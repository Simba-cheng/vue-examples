<template>
    <div>{{ title }}</div>
</template>

<script>
    export default {
        name: "propTransmitData06",
        props: {
            title: {
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
