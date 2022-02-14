import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Goods from '@/views/Goods'
import Cart from '@/views/Cart'
import Details from '@/views/Details'
import Login from '@/views/Login'
import Order from '@/views/Order'
import Collect from '@/views/Collect'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/goods',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/collect',
    name: 'Collect',
    component: Collect
  }
]

const router = new VueRouter({
  routes
})

export default router
