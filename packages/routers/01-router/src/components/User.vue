<template>
    <div class="user">
        <div class="left">
            <router-link to="{name:'UI'}">用户信息</router-link>
            <router-link to="{name:'UPWD'}">修改密码</router-link>
            <router-link to="{name:'UOrder'}">我的订单</router-link>
            <router-link to="{name:'UScore'}" 我的积分></router-link>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-page",
        created() {
            if (localStorage.getItem('token')) {
                console.info('用户已登录');
            } else {
                console.info('用户未登录');
                this.$router.push({
                    name: 'Login'
                });
            }
        }
    }
</script>

<style>
    .user {
        display: flex;
    }

    .user .left {
        width: 160px;
        display: flex;
        flex-direction: column;
    }

    .user .right {
        flex: 1;
        border: solid 0.02rem orangered;
    }
</style>
