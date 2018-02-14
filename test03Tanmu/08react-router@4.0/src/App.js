import React from 'react';
//import { render } from 'react-dom';

import {BrowserRouter as Router,Route,Link, NavLink} from 'react-router-dom'//导入的方式跟之前有点变化

import Home from './components/Home'
import Info from './components/Info'
import Gantt from './components/Gantt'

import './components/static/css/basic.css'
//http://blog.csdn.net/github_38095237/article/details/70157021?winzoom=1
//<NavLink></NavLink> 

const One = () => (
    <div>
        <h1>this is One</h1>
    </div>
)

const Two = () => (
  <div>
      <h2>second page</h2>
  </div>
)

const Lists = ({match}) => (
  <div>
    <h3>{match.params.ListsId}</h3>
  </div>
)



const List = ({match}) => (
  <div>
    <h2>我是一个列表</h2>

    <ul>

      <li>
        <Link to={`${match.url}/我是第一个哈哈`}>
                    列表下边的第一个
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/我是第二个呵呵`}>
          列表下边的第二个
        </Link>
      </li>

      <li>
        <Link to={`${match.url}/我是第三个哈哈`}>
          列表下面的第三个
        </Link>
      </li>
   
    </ul>

    <Route path={`${match.url}/:ListsId`} component={Lists}/>
     <Route exact path={match.url} render={() => (
          <h3>点击上边的列表项此处显示与url地址一样的...</h3>
      )}/>

  </div>
)

let data = {
  data: [
    {id: 1, text: 'Task #1', start_date: '15-04-2017', duration: 3, progress: 0.6},
    {id: 2, text: 'Task #2', start_date: '18-04-2017', duration: 3, progress: 0.4}
  ],
  links: [
    {id: 1, source: 1, target: 2, type: '0'}
  ]
}

const RouterList = () =>(

      <Router>
          <div className="container">
            
            <ul className="nav">
                <li><NavLink  exact to='/'>首页</NavLink></li>
                <li><NavLink to='/two' activeStyle={{color:'purple'}}>第二页</NavLink></li>
                <li><NavLink to='/Lists'>列表页</NavLink></li>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/info'>Info</NavLink></li>
                <li><NavLink to='/gantt'>Gantt</NavLink></li>
            </ul>
            
            <div className="route-list">
              <Route exact path='/' component={One} />
              <Route exact path='/two' component={Two} />
              <Route exact path='/Lists' component={List} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/info' component={Info} />
              <Route exact path='/gantt' component={Gantt} />
            </div>
          </div>
      </Router>
)


export default RouterList
