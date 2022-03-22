<!--
    v-for指令
-->
<template>
    <div>
        <ul v-for="item in tempList" :key="item.id" :name="item.name">
            <li>{{ item.id }} - {{ item.name }}</li>
        </ul>
    </div>

    <div>
        <ol>
            <li v-for="king in kings" :key="king" :ref="setItemRef">{{ king }}</li>
        </ol>
    </div>

</template>

<script>

    import {ref} from "vue";

    export default {
        name: "vFor_Instructions",
        setup() {

            const kings = ref(["程咬金", "安琪拉", "芈月", "吕布", "李信"]);

            //存放元素变量，要操作元素时，从此变量中直接拿值
            const itemRefs = [];
            const setItemRef = el => {
                if (el) {
                    itemRefs.push(el);
                }
            }

            const tempList = [
                {id: '1', name: '南京'},
                {id: '2', name: '北京'},
                {id: '3', name: '上海'},
                {id: '4', name: '深圳'},
            ];
            return {
                tempList,
                kings,
                setItemRef
            }
        },
    }
</script>

<style scoped>

</style>
