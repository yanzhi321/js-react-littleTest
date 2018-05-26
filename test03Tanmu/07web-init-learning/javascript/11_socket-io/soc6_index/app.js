const express = require('express')
const app = express()
const server = require('http').Server(app)

const io = require('socket.io')(server)
const path = require('path')
const fs = require('fs')

//mongodb
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'myproject';

let  isInsert = false;

// https://github.com/kelvv/aliyun-sms-node

// Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);

//     insertDocuments(db, function() {
//         findDocuments(db, function() {
//             client.close()
//             updateDocument(db, function() {
//                 removeDocument(db, function() {
//                     client.close()
//                 })
//             })
//         })
//     });

// });

// //insert
// const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('documents');
//     // Insert some documents
//     collection.insertMany([
//       {a : 1}, {a : 2}, {a : 3}
//     ], function(err, result) {
//       assert.equal(err, null);
//       assert.equal(3, result.result.n);
//       assert.equal(3, result.ops.length);
//       console.log("Inserted 3 documents into the collection");
//       callback(result);
//     });
// }

// //find
// const findDocuments = function(db, callback) {
//      // Get the documents collection
//     const collection = db.collection('documents');
//     // Find some documents
//     collection.find({}).toArray(function(err, docs) {
//         assert.equal(err, null);
//         console.log("Found the following records");
//         console.log(docs)
//         callback(docs);
//     });
// }
// //update
// const updateDocument = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('documents');
//     // Update document where a is 2, set b equal to 1
//     collection.updateOne({ a : 2 }
//       , { $set: { b : 1 } }, function(err, result) {
//       assert.equal(err, null);
//       assert.equal(1, result.result.n);
//       console.log("Updated the document with the field a equal to 2");
//       callback(result);
//     });  
// }

// //remove
// const removeDocument = function(db, callback) {
//     isInsert = true
//     //Get the documents collection
//     const collection = db.collection('documents')
//     //remove document
//     // Delete document where a is 3
//     collection.deleteOne({ a : 3 }, function(err, result) {
//         assert.equal(err, null);
//         assert.equal(1, result.result.n);
//         console.log("Removed the document with the field a equal to 3");
//         callback(result);
//     }); 
// }


//favicons
const favicons = require('connect-favicons');

//ant-design  https://ant.design/docs/react/introduce-cn


const port = process.env.port || 3002
server.listen(port,  () => {
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
    // res.send('socket')
    res.render('index', {
        
    })
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
            
            socket.emit('loginResult',{
                code:0,
                users: users
            });   //code=0 用户登录成功

            userNum = users.length;  
            console.log(`用户${data.username}登录成功，进入socket.io聊天室，当前在线登录人数：${userNum}`); 
            console.log(users, 'login') 

            socket.broadcast.emit('loginUser', {
                userNum: userNum,
                userName: socket.username,
                imgpath: data.imgpath,
                users: users
            })

            socket.emit('showUser', {
                users: users,
                userName: socket.username,
                imgpath: data.imgpath
            })
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


    //sendToOne
    socket.on('sendToOne', (data) => {
        for(let _user of users) {
            if(_user.username === data.username) {
                _user.message.push(data.message)
                io.emit('sendToOneSuccess', {
                    username: data.username,
                    message: data.message,
                    nameReg: data.textname
                })
                break;
            }
        }
    })

    //断开连接后做的事情  
    let leaveUser = ''
    socket.on('disconnect',()=>{   

        if(!loginFlag) {
            return false;
        }       //注意，该事件不需要自定义触发器，系统会自动调用  
        
        //移除disconnect的用户
        users.map( (con, i) => {
            if(con.username === socket.username) {
                users.splice(i, 1)
               leaveUser = con.username
            }
        })

        userNum = users.length 
        console.log(`now It had left ${userNum}`)
        console.log(users)
        console.log(leaveUser, 'leaveUser')
        //触发用户离开的监听   
        socket.broadcast.emit('oneLeave', {
            users: users,
            userNum: userNum,
            leaveUser: leaveUser
        })
        
        //删除用户  
        // users.forEach(function (user,index) {  
        //     if(useser.username === socket.username) {  
        //         urs.splice(index,1);       //找到该用户，删除  
        //     }  
        // })  
    }); 

})


//校验用户是否已经登录
const checkUserName = (data) => {

    console.log(users, 'users')
    
    let isExist = false;
    users.map((user) => {
        if(user.username === data.username){
            isExist = true;
        }
    });
    console.log(users, 'users')
    
    return isExist;
}

// C:\Users\zhi\AppData\Local\Android\Sdk