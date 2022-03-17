<template>
    <div>
        <date-picker @run-parent="getChild"></date-picker>
    </div>

    <p></p>

    <div>
        <custom-components01 @submit="getChild"></custom-components01>
    </div>

    <p></p>

    <!--插入内容占位符-->
    <div id="slots-demo" class="demo">
        <slotComponent>Something bad happened.</slotComponent>
    </div>

</template>

<script>
    import datePicker from "@/components/childComponents02/DatePicker.vue";
    import customComponents01 from "@/components/childComponents02/customComponents01.vue";
    import slotComponent from "@/components/childComponents02/SlotComponent.vue";

    export default {
        name: "appComponentTest02",
        components: {
            datePicker,
            customComponents01,
            slotComponent
        },
        methods: {
            getChild(data) {
                console.log("data -- :" + data.username + " " + data.password)
            },
        }
    }
</script>

<style scoped>

</style>
