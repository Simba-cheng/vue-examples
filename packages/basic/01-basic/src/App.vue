<template>
    <div id="basic01">
        <basic01></basic01>
    </div>

</template>

<script>

    import basic01 from "@/components/vText_instructions.vue";

    export default {
        name: 'App',
        components: {
            basic01,
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
