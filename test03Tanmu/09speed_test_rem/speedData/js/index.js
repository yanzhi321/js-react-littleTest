



var ws = new WebSocket("ws://192.168.30.99:2001");
// var ws = new WebSocket("ws://123.207.167.163:9010/ajaxchattest")

// console.log(ws)

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
// var w = new Worker('./speed/speedtest_worker.min.js') // create new worker

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

        //process: check
        ws.onmessage = function (res) {
            console.log(res.data, 'check')

            let checkId = registerId

            let registerData = JSON.parse(res.data)

            switch(registerData.process)
            {
                case "start":               
                case "check":
                    if(registerData.id == checkId && registerData.queue == 0)
                    {
                        let checkData = JSON.stringify({
                            id: registerData.id,
                            process: 'start'
                        })
                        ws.send(checkData)
                        waitTip.textContent = "测速中"
                        waitTip.style.color = 'red'
                    }
                    else
                    {
                        console.log(checkId, 'checkId')
                        waitNum.textContent = registerData.queue
                        waitNum.style.color = 'red'
                    }
                    break;
                
                case "end":
                    if(registerData.id == checkId)
                     {
                        //传递数据
                        var strData = JSON.stringify(registerData); //将json转化为字符串strStudent。
                        localStorage.setItem('key', strData); //对应方法2，将数据存储在HTML5的localStorage中。
                        location.href = "./result.html?endDatas=" + window.encodeURIComponent(strData);       
                    }
                    break;

                case "process":
                    //5g
                    fifgOneup.textContent = parseInt(registerData.up)
                    fifgOnedown.textContent = parseInt(registerData.down)
                    fifgOneping.textContent = parseInt(registerData.delay)
                    centerSpeed.textContent = parseInt(registerData.down)
                    
                    // setInterval(function () {
                    //     w.postMessage('status')
                    // }, 100) // ask for status every 100ms

                    // w.onmessage = function (event) {
                    //     var data = event.data.split(';')
                    //     wifiOnedown.textContent = data[1] ? parseInt(data[1]) : 0
                    //     wifiOneup.textContent = data[2] ? parseInt(data[2]) : 0
                    //     wifiOneping.textContent = data[3] ? parseInt(data[3]) : 0
                    // }
                    // w.postMessage('start')

                    break;
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
