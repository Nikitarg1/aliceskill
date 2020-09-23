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
    path: '/stages',
    name: 'stages',
    component: () => import('../components/Page/Stages/Stages')
  },
  {
    path: '/technology',
    name: 'technology',
    component: () => import('../components/Page/Technology/technology')
  },
  {
    path: '/buyers',
    name: 'buyers',
    component: () => import('../components/Page/Buyers/buyers')
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
