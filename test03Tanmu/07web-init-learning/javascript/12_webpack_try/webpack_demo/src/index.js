import _ from 'lodash'
import './style.css'
import Icon from  './f1.jpg'
import Data from './data.xml'
import Test from './test.json'

function component() {
    var element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello')
    console.log(element)
    element.className = 'hello'

    //img
    let myIcon = new Image()
    myIcon.src = Icon

    element.appendChild(myIcon)

    console.log(Data)
    console.log(Test)

    let ele = document.createElement('ul')
    element.appendChild(ele)
    let str = ''
    for(let i = 0; i<Test.listData.length; i++) {
        let  str2 = `<li><span>${Test.listData[i].title}</span> <a href='${Test.listData[i].url}' target="_blank">${Test.listData[i].url}</a></li>`
        str += str2
    }

    ele.innerHTML = str
    console.log(ele)

    return element;
  }
  
document.body.appendChild(component());

