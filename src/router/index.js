import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../components/Page/Main/Main'),
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
    mode: 'history', // убирает /#/ ванчале ссылки
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return {
                savedPosition,
                selector: to.hash
            }
        } else {
            const position = {}

            if (to.hash) {
                position.selector = to.hash

                if (to.hash === '#news') {
                    position.offset = {y: 150}
                }

                if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
                    return {
                        position,
                        selector: to.hash
                    }
                }

                return false
            }
        }
    }
})

export default router
