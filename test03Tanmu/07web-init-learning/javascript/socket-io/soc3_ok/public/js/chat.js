
    
const url = 'http://localhost:3002'
let _username = '';
let _password = '';
//dom
const _inputname = document.querySelector('#name')
const _inputpassword = document.querySelector('#password')
const _loginButton = document.querySelector('.login-button')
const _chattextarea = document.querySelector('#chatmessage')
//socket connect
let socket = io.connect(url)
console.log(socket)

//header-img--choose
const header = document.querySelector('.header')
const headerImg = document.querySelector('.header-img')
const imgList = document.querySelector('.img-list')
const liArr = imgList.querySelectorAll('li')
const preview = document.querySelector('.preview')

let liArrs = Array.from(liArr)
let imgChoose = null
let imgClickChoose = false

liArrs.map( (con, i) => {
    // console.log(con.childNodes[0].childNodes[0].src)
    con.onclick = function() {
        imgClickChoose = true

        imgChoose = con.childNodes[0].childNodes[0].src
        console.log(imgChoose)
        let str = this.innerHTML
        preview.innerHTML = str
        headerImg.style.display = 'none'
    }
})

let count = 1
header.onclick = function() {
    if(count == 1) {
        headerImg.style.display = 'block'
        --count
    } else{
        headerImg.style.display = 'none'
        ++count
    }
}

//设置用户名

let setUsername = () => {

    if(imgClickChoose) {

        console.log(imgChoose)
        _username = _inputname.value.trim();
        _password = _inputpassword.value;
        _imgpath = imgChoose
        //判断用户名是是否为空
        if(_username && _password) {
            socket.emit('login', {
                username: _username,
                password: _password,
                imgpath: _imgpath
            }); //把用户名和密码传给服务端，就相当于告诉服务器我们要登录了
        } else{
            alert('please input username or password')
        }

    }else {
        alert("add header icon")
    }

} 


// show the chat page
const loginBox = document.querySelector('#loginbox')
const content = document.querySelector('#content')
const chatBox = document.querySelector('#chatbox')
let showChatRoom = () => {

    //hide login page and show chat page
    loginBox.style.display = 'none'
    _loginButton.onclick = null

    let div = document.createElement('div')
    div.className = 'title'
    let txt = document.createTextNode(_username)

    let img = new Image()
    img.src = imgChoose
    img.width = '50'
    img.height = '50'

    let p = document.createElement('p')
    p.textContent = `welcome you! ${_username}`
    // div.appendChild(txt)
    div.appendChild(p)
    div.appendChild(img)
    content.appendChild(div)

    chatBox.style.display = 'block'
}

//send message

let sendMessage = () => {
    let _message = _chattextarea.value

    if(_message) {
        socket.emit('sendMessage', {
            username: _username, 
            message: _message,
            imgpath: _imgpath
        })
    } else{
        alert('please input msg')
    }
}

//showMessage
let showMessage = (data) => {

    let imgChooseLeft = imgChoose
    //判断这个消息是不是自己发出的，然后以不同的样式显示
    if(data.username === _username) {
    
    
    let p = document.createElement('p')
    p.className = 'self-message'

    let span = document.createElement('span')
    span.className = 'msg'
    span.innerText = data.message
        
    let span2 = document.createElement('span')
    span2.className = 'name'
    span2.innerText = data.username

    let img = new Image()
    img.src = data.imgpath
    img.width = '20'
    img.height = '20'
    img.style.display = 'inline-block'
    img.style.verticalAlign = 'middle'

    p.appendChild(span)
    p.appendChild(img)
    p.appendChild(span2)
    content.appendChild(p)

    }else {

        let p = document.createElement('p')
        p.className = 'other-message'

        let span = document.createElement('span')
        span.className = 'name'
        span.innerText = data.username

        let span2 = document.createElement('span')
        span2.className = 'msg'
        span2.innerText = data.message

        let img = new Image()
        img.src = data.imgpath
        img.width = '20'
        img.height = '20'
        img.style.display = 'inline-block'
        img.style.verticalAlign = 'middle'

        p.appendChild(span)
        p.appendChild(img)
        p.appendChild(span2)
        content.appendChild(p)
    }
}

// _loginButton
_loginButton.onclick = function() {
    setUsername()
}

//chattextarea
_chattextarea.onkeyup = function() {
    if(event.keyCode === 13) {
        sendMessage()
        _chattextarea.value = ''
    }
}

//socket.io
socket.on('loginResult', (data) => {
    /** 
     * 如果服务器返回的用户名和刚刚发送的相同的话，就登录 
     * 否则说明有地方出问题了，拒绝登录 
    */
    console.log(data)

    if(data.code === 0) {
        showChatRoom()
    } else if(data.code === 1) {
        alert('wrong password')
    } else if(data.code === '2-0') {
        alert('registered successfully')
        showChatRoom()
    } else if(data.code === '2-1') {
        alert('fail to register')
    } else if(data.code === 3) {
        alert('user logged in')
    } else {
        alert('fail to login')
    }
})

// receiveMessage
socket.on('receiveMessage', (data) => {
    //监听服务器广播的消息
    showMessage(data)
    console.log(data)
})

// oneLeave
socket.on('oneLeave', (data) => {
    console.log(data)
})