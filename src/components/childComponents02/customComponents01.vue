<template>
    <input type="text" v-model="username">
    <p></p>
    <input type="text" v-model="password">
    <p></p>

    <button @click="run">通过广播方式实现子组件给父组件传值</button>
</template>

<script>
    export default {
        name: "customComponents01",
        //props: {
        //    username: {
        //        type: String,
        //        default: ''
        //    },
        //    password: {
        //        type: String,
        //        default: ''
        //    }
        //},
        emits: {
            submit: ({username, password}) => {
                if (username && password) {
                    console.info("username: " + username + ",password: " + password)
                    return true;
                } else {
                    console.info("用户名或密码为空")
                    return false;
                }
            },
        },
        data() {
            return {
                username: "admin",
                password: "",
            }
        },
        methods: {
            run() {
                this.$emit('submit', {
                    username: this.username,
                    password: this.password
                });
            }
        },
    }
</script>

<style scoped>

</style>
