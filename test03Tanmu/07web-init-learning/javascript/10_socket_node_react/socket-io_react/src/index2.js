import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const socket = require('socket.io-client')('http://localhost:8003');


// function drag(ele) {
//     ele.onmousedown = function(evt) {
//         let e = evt || window.event
//         let disX = e.clientX - ele.offsetLeft
//         let disY = e.clientY - ele.offsetTop

//         document.onmousemove = function(evt) {

//             let e = evt || window.event

//             let left = e.clientX - disX
//             let top = e.clientY - disY

//             let leftMax = window.innerWidth - ele.clientWidth
//             let topMax = window.innerHeight - ele.clientHeight

//             if(left <= 0){
//                 left = 0
//             }else if(left >= leftMax ){
//                 left = leftMax
//             }

//             if(top <= 0){
//                 top = 0
//             }else if(top >= topMax) {
//                 top = topMax
//             }

//             console.log(left, top)

//             ele.style.left = left + 'px'
//             ele.style.top = top + 'px'
//         }

//         document.onmouseup = function(evt) {
//             document.onmousemove = null
//         }
//     }
// }

class Drag extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            display: true,
            top: 10,
            left: 10,
            clientX: 0,
            clientY: 0,
            isDragging: false,
            width: 0,
            height: 0, 
            value: null,
            touchX: 0,
            touchY: 0,
            isTouching: false
        }
    }


    conmponentDidMount() {
        
        //dom
        window.addEventListener('touchmove', this.handleTouchMove)
        window.addEventListener('touchend', this.handleTouchEnd)

    }

    componentWillUnmount() {
        
        //remove dom

    }


    handleChange = (e) => {
        
        socket.emit('input change', {
            value: e.target.value
        })

        let inputBox = this.refs.inputbox
        let inputReceive = this.refs.inputreceive
        socket.on('input send', function(data) {
            // console.log(data)
            // console.log(inputBox.value, data.value)
            inputBox.value = data.value
            inputReceive.value = data.value
        })
        
    }

    handleMouseDown = (e) => {
        let box = this.refs.box
        let boxWidth = box.offsetWidth
        let boxHeight = box.offsetHeight
        let that = this
    
        e.preventDefault()
        // console.log(box.offsetWidth, box.clientWidth)
        // console.log(socket)

        // this.setState({
        //     clientX: e.clientX - box.offsetLeft,
        //     clientY: e.clientY - box.offsetTop,
        //     isDragging: true,
        //     width: boxWidth,
        //     height: boxHeight
        // })

        socket.emit('box fir', {
            clientX: e.clientX - box.offsetLeft,
            clientY: e.clientY - box.offsetTop,
            isDragging: true,
            width: boxWidth,
            height: boxHeight
        })

        socket.on('fir send', function(data) {
            console.log(data)
            that.setState({
                clientX: data.clientX,
                clientY: data.clientY,
                isDragging: data.isDragging,
                width: data.width,
                height: data.height
            })
        })
    }

    //touchstart
    handleTouchStart = (e) => {
        
        let box = this.refs.box
        this.setState({
            touchX: e.changedTouches[0].clientX - box.offsetLeft,
            touchY: e.changedTouches[0].clientY - box.offsetTop,
            isTouching: true
        })

    }

    handleTouchMove = (e) => {
        const { touchX, touchY, isTouching } = this.state
       
        console.log(isTouching)
        let box = this.refs.box
        let boxWidth = box.offsetWidth
        let boxHeight = box.offsetHeight

        let leftMax = window.innerWidth - boxWidth
        let topMax = window.innerHeight - boxHeight

        if(isTouching) {
            let newLeft = e.changedTouches[0].clientX - touchX
            let newTop = e.changedTouches[0].clientY - touchY

            if(newLeft <= 0) {
                newLeft = 0
            }else if(newLeft >= leftMax) {
                newLeft = leftMax
            }

            if(newTop <= 0) {
                newTop = 0
            }else if(newTop >= topMax) {
                newTop = topMax
            }

            this.setState({
                left: newLeft,
                top: newTop
            })
        }
        
    }

    handleTouchEnd = (e) => {
        this.setState({
            isTouching: false
        })
    }

    handleMouseMove = (e) => {

        e.preventDefault()
        // e.stopPropagation()
        const { clientX, clientY, width, height } = this.state
        // let box = this.refs.box
        if(this.state.isDragging === true){

            let leftMax = window.innerWidth - width
            let topMax = window.innerHeight - height

            let newLeft = e.clientX - clientX
            let newTop = e.clientY  - clientY

            if(newLeft <= 0){
                newLeft = 0
            }else if(newLeft >= leftMax){
                newLeft = leftMax 
            }

            if(newTop <= 0){
                newTop = 0
            }else if(newTop >= topMax) {
                newTop = topMax
            }

            //socket
            socket.emit('box sec', {
                left: newLeft,
                top: newTop
            })

            let that = this

            socket.on('sec send', function(data) {
                that.setState({
                    left: data.left,
                    top: data.top
                })
            })

            // this.setState({
            //     left: newLeft,
            //     top: newTop
            // })
        }
               
    }

    handleMouseUp = (e) => {
       
        
        //socket
        socket.emit('box third', {
            isDragging: false,
            clientX: 0,
            clientY: 0
        })

        // e.preventDefault()
        // let box = document.getElementsByClassName('box')
    
        e.stopPropagation()
        let that = this
        socket.on('third send', function(data) {
            
            that.setState({
                isDragging: data.isDragging,
                clientX: data.clientX,
                clientY: data.clientY
            })
        })

        // this.setState({
        //     isDragging: false,
        //     clientX: 0,
        //     clientY: 0
        // })
       
    }


    render(){
        const { top, left } = this.state
		return(
            <div className="container">
                <h3 ref="title">drag</h3>
                <div className="con-input">
                    <input type="text" placeholder="socket" ref="inputbox" onChange={this.handleChange} autoFocus={true} />
                    <input type="text" placeholder="io" ref="inputreceive"  />
                </div>

                <div className="box" ref="box" style= {{top: top + 'px', left: left + 'px'}} onMouseDown={this.handleMouseDown} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onMouseMove={this.handleMouseMove} onMouseUp={this.handleMouseUp} >

                </div>
            </div>
			
        )
	}    

}

  
  // ========================================
  
ReactDOM.render(
    <Drag />,
    document.getElementById('root')
  );
  