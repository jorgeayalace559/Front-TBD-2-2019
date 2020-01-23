import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/register-emergency',
    name: 'register-emergency',
    component: () => import('../components/Emergency/Register.vue')
  },
  {
    path: '/emergencies',
    name: 'emergencies',
    component: () => import('../components/Emergency/Emergencies.vue')
  },
  {
    path: '/emergencies/:id/queryGeolocaliza',
    name: 'emergency-details',
    component: () => import('../components/QueryGeo.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
