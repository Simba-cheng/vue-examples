<!--
    v-text 指令
-->
<template>

    <!--
        显示文本的两种方式
        1.双大括号(Mustache语法)
        2.'v-text'指令
    -->
    <div>
        <span>{{ myTitle }}</span><br>
        <span v-text="myTitle"></span><br>
    </div>

    <div>
        <h4>{{ myTitle2 }}</h4>
        <h4 v-text="myTitle2"></h4>
    </div>

    <div>
        <p>剩余空间: {{ spaceLeft }} out of {{ capacity }}</p>
        <h2>Attending</h2>
        <div>
            <button @click="increaseCapacity">增加容量</button>
        </div>
    </div>
</template>

<script>

    import {ref, computed} from "vue";

    export default {
        name: "basic-01",

        setup() {

            const myTitle2 = ref(['hello 9527']);
            const capacity = ref(4);
            const attending = ref(['Tim', 'Bob', 'Joe']);

            //计算属性的声明方式
            const spaceLeft = computed(() => {
                //ref声明的响应式数据 需通过'.value'获取值
                return capacity.value - attending.value.length;
            });

            //代替methods声明方法
            function increaseCapacity() {
                capacity.value++;
            }

            return {
                capacity,
                attending,
                spaceLeft,
                increaseCapacity,
                myTitle2
            }
        },
        data() {
            return {
                myTitle: '嘿嘿嘿,我是标题'
            }
        },
    }
</script>

<style scoped>

</style>
