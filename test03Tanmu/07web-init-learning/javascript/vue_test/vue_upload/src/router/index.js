import Vue from 'vue'
import Router from 'vue-router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import HelloWorld from '@/components/HelloWorld'
import UploadImg from '@/components/UploadImg'
import DragBox from '@/components/DragBox'
import TodoList from '@/components/TodoList'


Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/upload', 
        name: 'UploadImg',
        component: UploadImg
    },
    {
        path: '/drag',
        name: 'DragBox',
        component: DragBox
    },
    {
        path: '/todo',
        name: 'TodoList',
        component: TodoList
    }
 
  ]
})
