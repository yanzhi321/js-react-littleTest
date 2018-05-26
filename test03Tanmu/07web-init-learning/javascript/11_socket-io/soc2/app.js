// http://www.cnblogs.com/xiezhengcai/p/3956401.html

// http://blog.csdn.net/neuq_zxy/article/details/76794551
const express = require('express')
const path = require('path')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const favicons = require('connect-favicons')

const port = process.env.port || 8002
server.listen(port, function(){
    console.log('port is listening at ' + port )
});

//set view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//__dirname && favicon
app.use(express.static(path.join(__dirname, '/public')));
app.use(favicons(__dirname + '/public/icons'))

//req.headers.host 该路由使用的中间件
app.use(function(req, res, next){
	Host = 'http://' + req.headers.host
	next();
})

app.get('/', function (req, res) {
    console.log(Host)
//   res.sendfile(__dirname + '/index.html');
    res.render('index', {
        host: Host
    })
});

const users = []
let usersNum = 0

//io.on(‘connection’,function(socket));//监听客户端连接,回调函数会传递本次连接的socket
// io.on('connection', function(socket){
//     // console.log('socket', socket.emit)
//     //socket.on 监听客户端发送的消息
//     socket.on('news', function(data) {
//         console.log(data)
//         io.sockets.emit('service news', data)
//         // socket.broadcast.emit('service news', data)
//     })
   
//     //socket.on('rightNews')
//     socket.on('right news', function(data) {
//         console.log(data)
//         io.sockets.emit('service right')
//     })
    
// })

io.on('connection', function(socket) {

    usersNum++;  
    console.log(`当前有${usersNum}个用户连接上服务器了`);  

    socket.on('login',(data)=>{  
        //将该用户的信息存进数组中  
        users.push({  
            username: data.username,  
            message: []  
        });  
          
        //然后触发loginSuccess事件告诉浏览器登陆成功了  
        socket.emit('loginSuccess',data);   //将data原封不动的再发给该浏览器  
    }); 

    //服务端监听sendMessage 事件
    //for in是ES5标准，遍历key. 
    //for of是ES6标准，遍历value.

    socket.on('sendMessage',(data)=>{  
        for(let _user of users) {  
            if(_user.username === data.username) {  
                _user.message.push(data.message);  
                //信息存储之后触发receiveMessage将信息发给所有浏览器  
                io.emit('receiveMessage',data);  
                break;  
            }  
        }  
    }); 


    //断开连接后做的事情  
    socket.on('disconnect',()=>{          //注意，该事件不需要自定义触发器，系统会自动调用  
        usersNum --;  
        console.log(`当前有${usersNum}个用户连接上服务器了`);  
    })


})