import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from "vue-router";
import App from './App.vue';
import Home from "@/components/Home.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'H',
            component: Home
        },
        {
            path: '/list',
            name: 'L',
            component: () => import('@/components/List.vue')
        },
        {
            path: '/detail/:p/:age?',
            name: 'Detail',
            component: () => import('@/components/Detail.vue')
        },
        {
            path: '/user',
            component: () => import('@/components/User.vue'),
            children: [
                {
                    path: 'info',
                    name: 'UI',
                    component: () => import('@/components/Info.vue')
                },
                {
                    path: 'pwd',
                    name: 'UPWD',
                    component: () => import('@/components/ChangePwd.vue')
                },
                {
                    path: 'score',
                    name: 'UScore',
                    component: () => import('@/components/Score.vue')
                },
                {
                    path: 'orders',
                    name: 'UOrder',
                    component: () => import('@/components/Orders.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/components/Login.vue')
        },
        {
            path: '/:catchAll(.*)',
            component: () => import('@/components/NotFound.vue')
        }
    ]
});

createApp(App).use(router).mount('#app')
