<template>
    <div class="login">
        <button @click="loginHandle">登录</button>
    </div>
</template>

<script>
    export default {
        name: "login-page",
        methods: {
            loginHandle() {
                localStorage.setItem('token', '123456');
                this.$router.push({
                    name: 'UI'
                });
            },
        }
    }
</script>

<style scoped>

</style>
