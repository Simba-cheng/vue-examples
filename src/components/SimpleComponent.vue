<template>
    <div>
        <p class="greeting"> {{ greeting }}</p>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'simpleComponent',
        props: {
            msg: String
        },
        data() {
            return {
                greeting: '你好？我不好'
            }
        },
    }
</script>

<style>
    .greeting {
        color: red;
        font-weight: bold;
    }
</style>
