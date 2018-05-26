const express = require('express')
const app = express()
const server = require('http').Server(app)

const io = require('socket.io')(server)
const path = require('path')
const fs = require('fs')

//favicons
const favicons = require('connect-favicons');

//ant-design  https://ant.design/docs/react/introduce-cn


const port = process.env.port || 3002
server.listen(port, () => {
    console.log('app is listening at ' + port)
})

// https://github.com/theworkers/connect-favicons
app.use(favicons(__dirname + '/public/icons'));
// app.use(express.static(path.join(__dirname, '/public')));

app.use('/',express.static(path.join(__dirname,'./public')));    
//set view engine
app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')


// app.get('/', (req, res) => {
//     res.render('chat', {})
// })

app.get('/', (req, res) => {
    // res.redirect('/chat.html')
    res.send('socket')
})

//readFile
app.get('/chats', (req,res)=>{
    // res.send('hhhhhh')

    fs.readFile(path.join(__dirname,'./public/chat.html'),function(err,data){       //读取文件，readFile里传入的是文件路径和回调函数，这里用path.join()格式化了路径。
        if(err){
            console.error("读取chat.html发生错误",err);                    //错误处理
            res.send('4 0 4');                                           //如果发生错误，向浏览器返回404
        } else {
            res.end(data);                  //这里的data就是回调函数的参数，在readFile内部已经将读取的数据传递给了回调函数的data变量。
        }                                    //我们将data传到浏览器，就是把html文件传给浏览器
    })
});

//req.headers.host 该路由使用的中间件
app.use(function(req, res, next){
	Host = 'http://' + req.headers.host
	next();
})

app.get('/chat', (req, res) => {
    res.render('chat', {
        host: Host
    })
})

const users = []
let userNum = 0

let loginFlag = false
//socket
io.on('connection', function(socket) {

    // userNum++
    socket.on('login',(data)=>{  

        socket.username = data.username;  
        // console.log(data)

        if(checkUserName(data)){
            socket.emit('loginResult',{code:1});   //code=1 用户已登录 
        }
        else{
            //将该用户的信息存进数组中  
            users.push({  
                username: data.username,  
                message: [],
                imgpath: data.imgpath 
            }); 
            socket.emit('loginResult',{code:0});   //code=0 用户登录成功
            userNum = users.length;  
            console.log(`用户${data.username}登录成功，进入socket.io聊天室，当前在线登录人数：${userNum}`); 
            console.log(users, 'login') 
        }
        loginFlag = true
    });  

    /** 
     * 监听sendMessage,我们得到客户端传过来的data里的message，并存起来。 
     */  
    socket.on('sendMessage',(data)=>{  
        // console.log(data, 'sendMessage')
        for(let _user of users) {  
            if(_user.username === data.username) {  
                _user.message.push(data.message);  
                //信息存储之后触发receiveMessage将信息发给所有浏览器-广播事件  
                io.emit('receiveMessage',data);  
                break;  
            }  
        }  
    });

    //断开连接后做的事情  
    socket.on('disconnect',()=>{   
        if(!loginFlag) {
            return false;
        }       //注意，该事件不需要自定义触发器，系统会自动调用  
        
        //移除disconnect的用户
        users.map( (con, i) => {
            if(con.username === socket.username) {
                users.splice(i, 1)
            }
        })

        userNum = users.length 
        console.log(`now It had left ${userNum}`)
        console.log(users)
        //触发用户离开的监听  
        socket.broadcast.emit('oneLeave', {
            users: users,
            userNum: userNum
        })
        
        //删除用户  
        // users.forEach(function (user,index) {  
        //     if(user.username === socket.username) {  
        //         users.splice(index,1);       //找到该用户，删除  
        //     }  
        // })  

    }); 

})

//校验用户是否已经登录
const checkUserName = (data) => {
    let isExist = false;
    users.map((user) => {
        if(user.username === data.username){
            isExist = true;
        }
    });
    return isExist;
}