import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'glavnaya',
    component: () => import('../components/Page/Glavnaya/Glavnaya.vue')
  },
  {
    path: '/myHouse',
    name: 'myHouse',
    component: () => import('../components/Page/Stages/Stages')
  },
  {
    path: '/buyers',
    name: 'buyers',
    component: () => import('../components/Page/Buyers/buyers')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history' // убирает /#/ ванчале ссылки
})

export default router
