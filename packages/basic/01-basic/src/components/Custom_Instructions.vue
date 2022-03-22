<!--
    自定义指令
-->
<template>
    <h5>{{ myTitle }}</h5>
    <h5 v-ctext="myTitle"></h5>
</template>

<script>

    import {ref} from "vue";

    export default {
        name: 'custom_Instructions',
        setup() {
            const myTitle = ref('hello 9876');
            return {
                myTitle
            }
        },
        directives: {
            ctext: {
                mounted(el, {value}) {
                    el.textContent = value;
                }
            },
        }
    }

</script>

<style scoped>

</style>
