// http://www.cnblogs.com/xiezhengcai/p/3956401.html

// http://blog.csdn.net/neuq_zxy/article/details/76794551
const express = require('express')
const path = require('path')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const multiparty = require('multiparty')

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
	host = 'http://' + req.headers.host
	next();
})

app.get('/', function (req, res) {
    console.log(host)
//   res.sendfile(__dirname + '/index.html');



    res.render('index2', {
        Host: host
    })
});

//


app.post('/show', function(req, res, next) {
    //multiparty
    let  form = new multiparty.Form();
    form.uploadDir = './public/upload';

 	form.parse(req, function(err, fields, files){
        if(err) {
            throw err
        }
        //由于在app.js中设置过public为默认路径，所以整理地址时需要去掉public，并且把‘\'变成‘/
        let resPath =  files.image[0].path.replace(/\\/g, '\/').replace(/public/, '')
        console.log(resPath)

        if(files.image[0].originalFilename == ''){
            //res.send('error')
            res.render('err', {
                Host: host
            })
            return false;
        }

        res.render('index2_show', {
            Host: host,
            name: fields.name[0],
            path: resPath
        })
    })
})

const users = []
let usersNum = 0



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