import React from 'react'
import ReactDom from 'react-dom'

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'//导入的方式跟之前有点变化

import Home from './components/Home'
import News from './components/News'

import './components/static/css/basic.css'

class App extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            msg: 'App'
        }
    }

    componentDidMount() {

    }

    render() {

        const { msg } = this.state
        return(
            <div>
                <h2>{msg}</h2>
                <Router>
                    <div className="container">
                        
                        <ul className="nav">
                            <li><NavLink  exact to='/'>首页</NavLink></li>
                            <li><NavLink to='/news'>News</NavLink></li>
                        </ul>
                        
                        <div className="route-list">
                            <Route exact path='/' component={Home} />
                            <Route exact path='/news' component={News} />
                        </div>

                    </div>
                </Router>
            </div>
        )

    }

}

ReactDom.render(
    <App />,
    document.getElementById('root')
)