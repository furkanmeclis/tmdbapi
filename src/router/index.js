import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Filmler'
import Detay from '../components/Detay'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Filmler',
    component: Home
  },
  {
    path:'/detay/:id',
    name:'Detay',
    component: Detay
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
