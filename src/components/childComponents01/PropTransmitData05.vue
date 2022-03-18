<template>
    <div>{{ author }}</div>
</template>

<script>
    export default {
        name: "propTransmitData05",
        props: {
            author: Person
        }
    }

    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

</script>

<style scoped>

</style>
