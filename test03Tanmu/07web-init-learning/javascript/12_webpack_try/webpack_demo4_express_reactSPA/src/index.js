import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'//导入的方式跟之前有点变化

import Home from './components/Home'
import News from './components/News'
import Doc from './components/Doc'
import CalendarCom from './components/CalendarCom'

import './components/static/css/basic.css'

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1> Hello, world! </h1>
//                 <ul>
//                     <li>1</li>
//                     <li>2</li>
//                     <li>3</li>
//                     <li>4</li>
//                 </ul>
//             </div>
//         )
//     }
// }

// ReactDom.render(
//     <App />,
//     document.getElementById('root')
// )

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            msg: 'App'
        }
    }

    componentDidMount() {
        //dom action
    }

    componentWillUnmount() {
        // remove dom
    }

    render() {

        return(

            <Router>
                <div className="container">
                    
                    <ul className="nav">
                        <li><NavLink  exact to='/'>首页</NavLink></li>
                        <li><NavLink to='/news'>News</NavLink></li>
                        <li><NavLink to='/doc'>列表页</NavLink></li>
                        <li><NavLink to='/cal'>日历</NavLink></li>
                    </ul>
                    
                    <div className="route-list">
                        <Route exact path='/' component={Home} />
                        <Route exact path='/news' component={News} />
                        <Route exact path='/doc' component={Doc} />
                        <Route exact path='/cal' component={CalendarCom} />
                    </div>

                </div>
            </Router>
        )
        
    }

}

ReactDom.render(
    <App />,
    document.getElementById('root')
)