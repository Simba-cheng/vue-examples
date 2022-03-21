<template>
    <div>
        name:{{ name }}
        <br/>
        myType:{{ myType }}
        <br/>
        myList:{{ myList }}
        <br/>
        isVisible:{{ isVisible }}
    </div>
</template>Î

<script>
    export default {
        name: "propTransmitData00",
        props: {
            name: String,
            myType: {
                validator: function (value) {
                    //必须匹配下列字符串中的一个
                    return ['success', 'warning', 'danger'].includes(value);
                },
            },
            myList: {
                type: Array,
                default: () => []
            },
            isVisible: {
                type: Boolean,
                default: false
            },
            myChange: {
                type: Function,
                default: () => {
                }
            }
        }
    }
</script>

<style scoped>

</style>
