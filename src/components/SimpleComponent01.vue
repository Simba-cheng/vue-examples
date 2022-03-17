<template>
    <div>
        <p class="greeting"> {{ greeting }}</p>
    </div>
</template>

<script>
    export default {
        name: 'simpleComponent01',
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
