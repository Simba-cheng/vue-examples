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

    <p></p>

    <!--动态组件-->
    <div>
        <dynamic-component></dynamic-component>
    </div>

    <p></p>

    <div>
        <dynamic-component2></dynamic-component2>
    </div>

</template>

<script>
    import datePicker from "@/components/childComponents02/DatePicker.vue";
    import customComponents01 from "@/components/childComponents02/customComponents01.vue";
    import slotComponent from "@/components/childComponents02/SlotComponent.vue";
    import dynamicComponent from "@/components/childComponents02/DynamicComponent.vue";
    import dynamicComponent2 from "@/components/childComponents02/DynamicComponent2.vue";

    export default {
        name: "appComponentTest02",
        components: {
            datePicker,
            customComponents01,
            slotComponent,
            dynamicComponent,
            dynamicComponent2
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
