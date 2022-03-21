<template>
    <div>
        <div>It's User Page</div>
        <br>
        <div>id是 {{ this.$route.params.id }}</div>
    </div>
</template>

<script>
    export default {
        name: "user-page"
    }
</script>

<style scoped>

</style>
