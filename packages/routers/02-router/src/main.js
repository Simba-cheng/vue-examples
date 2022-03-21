import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import home from "@/components/Home.vue";
import about from "@/components/About.vue";

// 定义路由（每个路由都需要映射到一个组件）
const routes = [
    {path: '/', component: home},
    {path: '/about', component: about},
]

// 创建路由实例并传递'routes'配置
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

createApp(App)
    .use(router)
    .mount('#app')
