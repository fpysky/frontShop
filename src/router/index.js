import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/home',
      component: () => import('@/views/home/index')
    },
    {
      path: '/login',
      name: '/login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/register',
      name: '/register',
      component: () => import('@/views/login/register')
    },
    {
      path: '/userCenter',
      name: '/userCenter',
      component: () => import('@/views/userCenter/index')
    },
    {
      path: '/address',
      name: '/address',
      component: () => import('@/views/userCenter/address')
    },
    {
      path: '/product',
      name: '/product',
      component: () => import('@/views/product/product')
    },
    {
      path: '/cart',
      name: '/cart',
      component: () => import('@/views/cart/index')
    },
    {
      path: '/addOrder',
      name: '/addOrder',
      component: () => import('@/views/order/add')
    },
    {
      path: '/orders',
      name: '/orders',
      component: () => import('@/views/order/orders')
    },
  ]
})
