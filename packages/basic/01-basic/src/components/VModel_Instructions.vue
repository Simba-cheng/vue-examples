<!--
    v-model 双向数据绑定
    监听数据变化，并更新数据
-->
<template>
    <div>
        <input type="text" v-model="myValue"><br>
        <textarea name="" id="" cols="10" rows="2" v-model="myValue"></textarea>
    </div>
</template>

<script>
    import {ref} from "vue";

    export default {
        name: "vModel_Instructions",
        setup() {
            const myValue = ref('9527')
            return {
                myValue,
            }
        },
    }
</script>

<style scoped>

</style>
