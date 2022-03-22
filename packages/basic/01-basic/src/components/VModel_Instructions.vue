<!--
    v-model 双向数据绑定
    监听数据变化，并更新数据
-->
<template>
    <div>
        <input type="text" v-model="myValue"><br>
        <textarea name="" id="" cols="10" rows="2" v-model="myValue"></textarea>
    </div>

    <div>
        <ol>
            <li v-for="user in users" :key="user.name">
                <input type="checkbox" :value="user.name" :id="user.name" v-model="checkedNames">
                <span>{{ user.name }}</span>
            </li>
        </ol>
        <div>
            {{ checkedNames }}
        </div>
    </div>

</template>

<script>
    import {ref} from "vue";

    export default {
        name: "vModel_Instructions",
        setup() {

            const checkedNames = ref([]);
            const users = ref([
                {name: '程咬金', checked: false},
                {name: '花木兰', checked: false},
                {name: '安琪拉', checked: false},
                {name: '李元芳', checked: false},
                {name: '貂蝉', checked: false}
            ]);

            const myValue = ref('9527')

            return {
                checkedNames,
                users,
                myValue,
            }
        },
    }
</script>

<style scoped>

</style>
