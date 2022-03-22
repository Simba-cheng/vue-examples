<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <container></container>
</template>

<script>

    import container from "@/components/Container.vue";

    export default {
        name: 'App',
        components: {
            container
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
