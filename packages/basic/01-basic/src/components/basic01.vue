<template>
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
                increaseCapacity
            }
        },
    }
</script>

<style scoped>

</style>
