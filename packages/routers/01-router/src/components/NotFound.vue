<template>
    <div class="pnf">
        <h1>404</h1>
        <button @click="backHome">返回首页</button>
    </div>
</template>

<script>
    export default {
        name: "notFound",
        methods: {
            backHome() {
                this.$router.push({
                    name: 'H'
                });
            },
        }
    }
</script>

<style>

</style>
