<template>
    <!--动态组件-->
    <div>
        <dynamic-component></dynamic-component>
    </div>
    <p></p>
    <div>
        <dynamic-component2></dynamic-component2>
    </div>
</template>

<script>

    import dynamicComponent from "@/components/DynamicComponent.vue";
    import dynamicComponent2 from "@/components/DynamicComponent2.vue";

    export default {
        name: 'App',
        components: {
            dynamicComponent,
            dynamicComponent2
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
