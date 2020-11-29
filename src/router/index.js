import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../components/Page/Main/Main')
  },
  {
    path: '/houses',
    name: 'houses',
    component: () => import('../components/Page/Stages/Stages')
  },
  {
    path: '/houses/:name',
    name: 'itemHouse',
    component: () => import('../components/Page/Stages/itemHouse')
  },
  {
    path: '/buyers',
    name: 'buyers',
    component: () => import('../components/Page/Buyers/buyers')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('../components/Error')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history' // убирает /#/ ванчале ссылки
})

export default router
