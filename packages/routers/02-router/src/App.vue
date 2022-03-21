<template>
    <img alt="Vue logo" src="./assets/logo.png">

    <div>
        <h1>Hello Router</h1>

        <!-- router-link标签的to属性，对应一条路由 -->
        <p>
            <router-link to="/">go to home</router-link>
            <br/>
            <router-link to="/about">go to about</router-link>
            <br/>
            <router-link to="/users/1">go to user1</router-link>
            <br/>
            <router-link to="/users/2">go to user2</router-link>
            <br/>
            <router-link to="/users/3">go to user3</router-link>
        </p>

        <!--用于放置路由映射对应的页面-->
        <router-view></router-view>
    </div>

</template>

<script>

    export default {
        name: 'App',
        components: {
        }
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
