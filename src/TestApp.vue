<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld2 msg="哈哈哈，你在说啥？"></HelloWorld2>
    <simpleComponent msg="我也不知道..."></simpleComponent>
</template>

<script>
    import HelloWorld2 from "@/components/HelloWorld2.vue";
    import simpleComponent from "@/components/SimpleComponent.vue";

    export default {
        name: 'testApp',
        components: {
            HelloWorld2,
            simpleComponent
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
