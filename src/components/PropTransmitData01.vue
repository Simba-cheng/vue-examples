<template>
    <h1>{{ msg }}</h1>
</template>

<script>
    export default {
        name: "propTransmitData01",
        // 定义组件要接收的参数
        props: {
            msg: String
        },
        data() {
            return {
                message: 'simba'
            }
        },
    }
</script>

<style scoped>

</style>
