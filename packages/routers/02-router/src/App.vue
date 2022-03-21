<template>
    <img alt="Vue logo" src="./assets/logo.png">

    <div>
        <h1>Hello Router</h1>
        <p>
            <router-link to="/">go to home</router-link>
            <br/>
            <br/>
            <router-link to="/about">go to about</router-link>
        </p>
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
