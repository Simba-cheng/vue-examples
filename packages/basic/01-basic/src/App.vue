<template>
    <div id="vText_Instructions">
        <vText_Instructions></vText_Instructions>
    </div>

    <div id="custom_Instructions">
        <custom_Instructions></custom_Instructions>
    </div>

    <div id="vFor_Instructions">
        <vFor_Instructions></vFor_Instructions>
    </div>

    <div id="vON_Instructions">
        <vON_Instructions></vON_Instructions>
    </div>

</template>

<script>

    import vText_Instructions from "@/components/VText_Instructions.vue";
    import custom_Instructions from "@/components/Custom_Instructions.vue";
    import vFor_Instructions from "@/components/VFor_Instructions.vue";
    import vON_Instructions from "@/components/VON_Instructions.vue";

    export default {
        name: 'App',
        components: {

            /*
                v-text指令 及 自定义指令
                https://juejin.cn/post/6991484757259321358
            */
            vText_Instructions,
            custom_Instructions,

            /*
                v-for指令
             */
            vFor_Instructions,

            /*
                v-on指令
             */
            vON_Instructions
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
