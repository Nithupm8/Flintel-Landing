import Vue from 'vue'
import VueRouter from 'vue-router'
import Flintelmath from '../components/Flintelmath.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Flintelmath',
    component: Flintelmath
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
