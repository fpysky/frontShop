import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/index'
import login from '@/views/login/index'
import register from '@/views/login/register'
import userCenter from '@/views/userCenter/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter
    },
  ]
})
