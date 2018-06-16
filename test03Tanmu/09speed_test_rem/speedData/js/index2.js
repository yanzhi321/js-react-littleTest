var ws = new WebSocket("ws://192.168.30.99:2001");
// var ws = new WebSocket("ws://123.207.167.163:9010/ajaxchattest")

console.log(ws)

const centerSpeed = document.querySelector('.center-speed')

//wifi
const wifiOneup = document.querySelector('.one-num')
const wifiOnedown = document.querySelector('.two-num')
const wifiOneping = document.querySelector('.three-num')

//5g
const fifgOneup = document.querySelector('.one-num-fifg')
const fifgOnedown = document.querySelector('.two-num-fifg')
const fifgOneping = document.querySelector('.three-num-fifg')

const clickBtn = document.querySelector('.click-btn')
//wait-tip
const waitTip = document.querySelector('.wait-tip')
const waitNum = document.querySelector('.wait-num')

// console.log(centerSpeed, wifiOneup, wifiOnedown, wifiOneping, fifgOneup, fifgOnedown, fifgOneping)

//wifi
var w = new Worker('./speed/speedtest_worker.min.js') // create new worker
ws.onopen = function (evt) {
    console.log("Connection open ...")

    clickBtn.onclick = function () {
        console.log(this.disabled)
        this.disabled = true
        

        let initId = idRandom()

        // register
        let registerData = JSON.stringify({
            id: initId,
            process: 'register'
        })

        ws.send(registerData)
        let registerId = initId

        // console.log(registerId, initId, 'init')

        //process-check
        ws.onmessage = function (res) {
            console.log(res.data, 'check')

            let checkId = registerId

            // console.log(checkId, registerId, initId, 'iddd')

                  

            let registerData = JSON.parse(res.data)

            if(registerData.id === checkId && registerData.process === 'start' && registerData.queue == 0) {

                console.log("========================222222222244");
                let checkData = JSON.stringify({
                    id: registerData.id,
                    process: 'start'
                })
                ws.send(checkData)
            }  

            waitNum.textContent = registerData.queue;
            if (registerData.id === checkId && registerData.process === "check") {
                console.log("check", checkId , registerId)

                let checkData = JSON.stringify({
                    id: registerData.id,
                    process: 'start'
                })
                ws.send(checkData)

                //process: process
                ws.onmessage = function (res) {

                    // console.log(res.data)
                    let processData = JSON.parse(res.data)
                    console.log(processData)

                    
                    if(processData.id === checkId && processData.process === 'end') {
                        console.log("location")
                        //传递数据
                        var strData = JSON.stringify(processData); //将json转化为字符串strStudent。
                        localStorage.setItem('key', strData); //对应方法2，将数据存储在HTML5的localStorage中。

                        location.href = "./result.html?endDatas=" + window.encodeURIComponent(strData);

                        // window.location.href = './result.html'

                        //process: start
                        ws.onmessage = function (res) {
                            let reStartData = JSON.parse(res.data)
                            if (reStartData.id === initId && reStartData.process === 'start') {
                                waitNum.textContent = processData.queue
                                ws.send(JSON.stringify({
                                    process: 'start',
                                    id: checkId
                                }))
                            }
                       }
                    }

                    if (processData.id === checkId && processData.process === 'process') {

                        //5g
                        fifgOneup.textContent = parseInt(processData.up)
                        fifgOnedown.textContent = parseInt(processData.down)
                        fifgOneping.textContent = parseInt(processData.delay)

                        centerSpeed.textContent = parseInt(processData.down)

                        waitNum.textContent = processData.queue
                        
                        //wifi-data
                        setInterval(function () {
                            w.postMessage('status')
                        }, 100) // ask for status every 100ms

                        w.onmessage = function (event) {
                            var data = event.data.split(';')
                            wifiOneup.textContent = parseInt(data[2])
                            wifiOnedown.textContent = parseInt(data[1])
                            wifiOneping.textContent = parseInt(data[3])
                        }
                        w.postMessage('start')

                    } 
                    
                }


            } else if (registerData.id !== checkId) {
                console.log(checkId, 'checkId')
                waitNum.textContent = registerData.queue
                waitNum.style.color = 'red'

            }
        }

    }


}




//idRandom()
function idRandom() {

    const letterArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let str = ''

    for (let i = 0; i < 16; i++) {
        const n = Math.round(Math.random() * 25)
        const m = Math.round(Math.random() * 9)
        str += letterArr[n].concat(numArr[m])
        //console.log(n, m)
    }
    return str
}