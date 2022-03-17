<template>
    <h1>{{ msg }}</h1>
</template>

<script>
    export default {
        name: "propTransmitData01",
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
