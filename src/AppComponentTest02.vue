<template>
    <div>
        <date-picker @run-parent="getChild"></date-picker>
    </div>
</template>

<script>
    import datePicker from "@/components/childComponents02/DatePicker.vue";

    export default {
        name: "appComponentTest02",
        components: {
            datePicker
        },
        methods: {
            getChild(data) {
                console.log("data: " + data)
            },
        }
    }
</script>

<style scoped>

</style>
