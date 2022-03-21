<template>
    <div class="home">
        <h1>我是列表页</h1>
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.id }} - {{ item.name }}
                <!--<router-link to="{name:'Detail',
                query:{id:item.id,name:item:name,r:Math.random()}},params:{p:'小智',age:18,skills:'暂无'}"
                ></router-link>-->
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "list-page",
        data() {
            return {
                list: [
                    {id: 1, name: '周杰伦'},
                    {id: 2, name: '林俊杰'},
                    {id: 3, name: '陶喆'}
                ]
            }
        },
    }
</script>

<style>
    .home {
        background-color: orange;
    }
</style>
