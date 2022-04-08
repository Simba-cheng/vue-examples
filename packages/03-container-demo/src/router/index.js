import {createRouter, createWebHistory} from 'vue-router'
import about from '@/components/test/about'
//import home from '@/components/test/home'
import layout from '@/layout'

const routers = [
    {
        path: '/home',
        component: layout
    },
//    {
//        path: '/home',
//        component: home
//    },
    {
        path: '/about',
        component: about
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router