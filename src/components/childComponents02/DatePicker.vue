<template>
    <button @click="run">通过广播方式实现子组件给父组件传值</button>
</template>

<script>
    export default {
        name: "dataPicker",
        emits: ["run-parent"],
        data() {
            return {};
        },
        methods:{
            run() {
                this.$emit("run-parent","这是子组件传的值");
            },
        }
    }
</script>

<style scoped>

</style>
