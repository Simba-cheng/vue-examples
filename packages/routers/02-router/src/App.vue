<template>
    <img alt="Vue logo" src="./assets/logo.png">

    <div>
        <h1>Hello Router</h1>

        <!-- router-link标签的to属性，对应一条路由 -->
        <p>
            <router-link to="/">go to home</router-link>
            <br/>
            <router-link to="/about">go to about</router-link>
            <br/>
            <router-link to="/users/1">go to user1</router-link>
            <br/>
            <router-link to="/users/2">go to user2</router-link>
            <br/>
            <router-link to="/users/3">go to user3</router-link>
        </p>

        <div v-for="item in user_document_ids" :key="item.id">
            <router-link :to="/users/+item.id">go to user item - {{ item.id }}</router-link>
        </div>

        <!--用于放置路由映射对应的页面-->
        <router-view></router-view>
    </div>

</template>

<script>

    export default {
        name: 'App',
        components: {},
        data() {
            return {
                user_document_ids: [
                    {id: '1123noin1', name: 'aaa'},
                    {id: 'asbdi12390', name: 'bbb'},
                    {id: '78asdbiusvd', name: 'ccc'}
                ]
            }
        },
    }

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
