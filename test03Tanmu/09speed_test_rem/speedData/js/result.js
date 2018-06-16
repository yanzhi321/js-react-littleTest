// var ws = new WebSocket("ws://192.168.30.99:2001");

const manyBits = document.querySelector('.many-bits')
const infoDown = document.querySelector('.info-left-num')
const infoUp = document.querySelector('.info-mid-num')
const infoPing = document.querySelector('.info-right-num')


let someUrl = location.search;
let resData=JSON.parse(window.decodeURIComponent(someUrl.split("=")[1]));  

manyBits.textContent = resData.order
infoDown.textContent = parseInt(resData.maxDownSpeed)
infoUp.textContent = parseInt(resData.maxUpSpeed)
infoPing.textContent = parseInt(resData.delay)
