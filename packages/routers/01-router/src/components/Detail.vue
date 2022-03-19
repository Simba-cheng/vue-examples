<template>
    <div class="container">
        <h5>详情</h5>
        <p>当前的id值: {{ $route.query.id }}</p>
    </div>
</template>

<script>
    export default {
        name: "detail-page",
        created() {
            console.info(this.$router);
        }
    }
</script>

<style>

</style>
