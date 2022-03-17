<template>
    <div class="propTransmitData04-post">
        <h4>{{ title }}</h4>

        <!--<button @click="$emit('enlargeText')">点我试试</button>-->

        <!--1. 通过第二个参数,子组件向父组件反向传值-->
        <!--<button @click="$emit('enlargeText',0.1)">点我试试</button>-->

        <!--2.-->
        <button @click="$emit('enlargeText',0.1)">点我试试</button>
    </div>
</template>

<script>
    export default {
        name: "propTransmitData04",
        props: {
            title: String
        }
    }
</script>

<style scoped>

</style>
