import {createRouter, createWebHistory} from 'vue-router'
import about from '@/components/test/about'
import layout from '@/layout'
import login from '@/views/login'

const routers = [
    {
        path: '/',
        redirect: '/home', // 重定向
        component: layout
    },
    {
        path: '/home',
        component: layout
    },
    {
        path: '/login',
        component: login
    },
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