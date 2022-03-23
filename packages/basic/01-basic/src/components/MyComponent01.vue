<template>
    <input type="text" :value="title" @input="$emit('update:title', $event.target.value)">
    <span>
        {{ title }}
    </span>
</template>

<script>
    export default {
        name: "myComponent01",
        props: {
            title: String
        },
        emits: ['update:title']
    }
</script>

<style scoped>

</style>
