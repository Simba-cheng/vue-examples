<template>
    <div>{{ author }}</div>
    <div>{{ title }}</div>
</template>

<script>
    export default {
        name: "propTransmitData05",
        props: {
            author: Person,
            title: {
                type: String
            }
        },
        setup(props) {
            console.info(props.author)
            console.info(props.title);
        },
    }

    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

</script>

<style scoped>

</style>
