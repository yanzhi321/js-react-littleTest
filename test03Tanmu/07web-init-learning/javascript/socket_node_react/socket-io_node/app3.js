const express = require('express')
const path = require('path')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const favicons = require('connect-favicons')

const port = process.env.port || 8003
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
    res.render('index3', {
        host: Host
    })
});

let msg = []
io.on('connection', function(socket) {
    socket.on('input change', function(data) {
        msg.push(data.value)
        io.sockets.emit('input send', data)
        console.log(data)
    })

    //drag -box
    socket.on('box fir', function(data) {
        console.log(data)
        io.sockets.emit('fir send', data)
    })

    //box sec
    socket.on('box sec', function(data) {
        console.log(data)
        io.sockets.emit('sec send', data)
    })

    //box third
    socket.on('box third', function(data) {
        console.log(data)
        io.sockets.emit('third send', data)
    })

})