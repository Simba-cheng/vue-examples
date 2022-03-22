<template>
    <div id="vText_Instructions">
        <vText_Instructions></vText_Instructions>
    </div>

    <div id="custom_Instructions">
        <custom_Instructions></custom_Instructions>
    </div>

</template>

<script>

    import vText_Instructions from "@/components/VText_Instructions.vue";
    import custom_Instructions from "@/components/Custom_Instructions.vue";

    export default {
        name: 'App',
        components: {
            vText_Instructions,
            custom_Instructions
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
