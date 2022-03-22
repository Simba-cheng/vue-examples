<template>
    <div>
        <p class="greeting"> {{ greeting }}</p>
    </div>
    <div>
        {{ testData }}
    </div>
    <button @click="addTestDataClick">累加testData</button>
    <br>
    <button @click="printTestDataClick">输出testData</button>
</template>

<script>
    import {ref} from "vue";

    const count = ref(0);
    console.log('count:', count.value)
    count.value++
    console.log('count:', count.value)

    export default {
        name: 'simpleComponent01',

        setup() {
            return {
                testData: ref(0)
            }
        },

        data() {
            return {
                greeting: '你好？我不好'
            }
        },

        methods: {
            addTestDataClick() {
                this.testData += 1;
            },
            printTestDataClick() {
                console.info('testData:' + this.testData);
            },
        }
    }
</script>

<style>
    .greeting {
        color: red;
        font-weight: bold;
    }
</style>
