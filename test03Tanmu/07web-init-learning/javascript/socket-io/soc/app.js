// http://www.cnblogs.com/xiezhengcai/p/3956401.html

// http://blog.csdn.net/neuq_zxy/article/details/76794551
const express = require('express')
const path = require('path')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const port = process.env.port || 8001
server.listen(8001, '192.168.30.210', function(){
    console.log('port is listening at ' + port )
});

//set view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//__dirname
app.use(express.static(path.join(__dirname, '/public')));

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

const usersNum = []
let users = 0

//io.on(‘connection’,function(socket));//监听客户端连接,回调函数会传递本次连接的socket
io.on('connection', function(socket){
    // console.log('socket', socket.emit)
    //socket.on 监听客户端发送的消息
    socket.on('news', function(data) {
        console.log(data)
        io.sockets.emit('service news', data)
        // socket.broadcast.emit('service news', data)
    })
   
    //socket.on('rightNews')
    socket.on('right news', function(data) {
        console.log(data)
        io.sockets.emit('service right')
    })
    
})