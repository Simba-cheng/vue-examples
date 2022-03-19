<template>
    <img alt="Vue logo" src="./assets/logo.png">

    <!--路由内置组件-->
    <router-link to="{name:'H'}">首页</router-link>
    <router-link to="{name:'L'}">列表</router-link>
    <router-link to="{name:'UI'}">用户中心</router-link>
    <br/>

    <!--展示组件内容-->
    <router-view></router-view>
</template>

<!--
    https://blog.csdn.net/DcTbnk/article/details/107342159
-->
<script>
    export default {
        name: 'App',
        components: {}
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
