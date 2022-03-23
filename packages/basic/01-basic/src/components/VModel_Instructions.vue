<!--
    v-model 双向数据绑定
    监听数据变化，并更新数据
-->
<template>

    <!--文本框-->
    <div>
        <input type="text" v-model="myValue"><br>
        <textarea name="" id="" cols="10" rows="2" v-model="myValue"></textarea>
    </div>

    <!--多选-->
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

    <p></p>

    <!--单选-->
    <div>
        <select v-model="selected">
            <option v-for="user in users" :key="user.name">{{ user.name }}</option>
        </select>
        <div>{{ selected }}</div>
    </div>

    <div>
        <my-component01 v-model:title="title"></my-component01>
    </div>

</template>

<script>
    import {ref} from "vue";
    import myComponent01 from "@/components/MyComponent01.vue";

    export default {
        name: "vModel_Instructions",
        data() {
            return {
                title:'123'
            }
        },
        setup() {
            const selected = ref();
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
                selected,
                checkedNames,
                users,
                myValue
            }
        },
        components: {
            myComponent01
        }
    }
</script>

<style scoped>

</style>
