<template>
    <div>{{ author_data.firstname }} - {{ author_data.lastname }}</div>
    <div>{{ title_name }}</div>
</template>

<script>
    export default {
        name: "propTransmitData05",
        props: {
            author_data: {
                type: Object
            },
            title_name: {
                type: String
            }
        },
        setup(props) {
            console.info(props.author_data)
            console.info(props.title_name);
        },
    }

</script>

<style scoped>

</style>
