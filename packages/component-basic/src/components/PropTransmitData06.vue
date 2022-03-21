<template>
    <div>{{ title_06 }}</div>
</template>

<script>
    export default {
        name: "propTransmitData06",
        props: {
            title_06: {
                type: String,
                require: true,
                validator: function (value) {
                    console.log(value.search("JSPang"));
                    return value.search("JSPang") !== -1;
                }
            }
        }
    }
</script>

<style scoped>

</style>
