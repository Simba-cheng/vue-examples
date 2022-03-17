<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld2 msg="哈哈哈，你在说啥？"></HelloWorld2>
    <simpleComponent01></simpleComponent01>
    <propTransmitData01 msg="我也不知道..."></propTransmitData01>
</template>

<script>
    import HelloWorld2 from "@/components/HelloWorld2.vue";
    import simpleComponent01 from "@/components/SimpleComponent01.vue";
    import propTransmitData01 from "@/components/PropTransmitData01.vue";

    export default {
        name: 'testApp',
        components: {
            HelloWorld2,

            // 组件简单示例
            simpleComponent01,
            // 组件 - 传递数据
            propTransmitData01
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
