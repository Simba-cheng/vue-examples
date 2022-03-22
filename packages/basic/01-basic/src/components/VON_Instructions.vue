<!--
    v-on 绑定事件监听
-->
<template>
    <div>
        <span>{{ countData }}</span><br>

        <!--<button @click="addCountData">累加</button>
        <br>
        <button @click="printCountData">输出</button>-->

        <!--<button v-on:click="addCountData">累加</button>
        <br>
        <button v-on:click="printCountData">输出</button>-->

        <!-- TODO 修饰符,目前不知道是干嘛的-->
        <button @click.stop="addCountData">累加</button>
        <br>
        <button @click.stop.prevent="printCountData">输出</button>

    </div>
</template>

<script>

    import {ref} from "vue";

    export default {
        name: "vON_Instructions",

        setup() {

            const countData = ref(0);

            function addCountData() {
                countData.value += 1;
            }

            function printCountData() {
                console.log('countData.value: ', countData.value);
            }

            return {
                countData,
                addCountData,
                printCountData,
            }
        },
    }
</script>

<style scoped>

</style>
