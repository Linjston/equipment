import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/components/Login'
import HH from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component:Login
    },
    {
      path:'/main',
      name:'main',
      component:Layout
    }
  ]
})
