<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <simpleComponent01></simpleComponent01>
    <propTransmitData01 msg="我也不知道..."></propTransmitData01>
    <div>
        <prop-transmit-data02 title="My journey with Vue"></prop-transmit-data02>
        <prop-transmit-data02 title="Blogging with Vue"></prop-transmit-data02>
        <prop-transmit-data02 title="Why Vue is so fun"></prop-transmit-data02>
    </div>

    <div id="bookTitles">
        <prop-transmit-data03 v-for="bookTitle in bookTitles" :key="bookTitle.id"
                              :title="bookTitle.title"></prop-transmit-data03>
    </div>

    <p></p>

    <div id="posts-events-demo">
        <div :style="{fontSize:postsFontSize+'em'}">
            <!--<prop-transmit-data04 v-for="post in posts" :key="post.id" :title="post.title"
                                  @enlarge-text="postsFontSize+=0.1"></prop-transmit-data04>-->

            <!--1.接收从子组件传递的参数-->
            <!--<prop-transmit-data04 v-for="post in posts" :key="post.id" :title="post.title"
                                  @enlarge-text="postsFontSize+=$event"></prop-transmit-data04>-->

            <!--2.接收从子组件传递的参数,并将其传入绑定的函数-->
            <prop-transmit-data04 v-for="post in posts" :key="post.id" :title="post.title"
                                  @enlarge-text="onEnlargeText"></prop-transmit-data04>
        </div>
    </div>

    <p></p>

    <div>
        <prop-transmit-data05
                author="{firstname:'simba',lastname:'Cheng'}"
                title="我是标题呢"
        ></prop-transmit-data05>
    </div>

    <!--组件传参校验-->
    <div>
        <!--<prop-transmit-data06 title="你觉得呢JSPang"></prop-transmit-data06>-->
        <prop-transmit-data06 title="哦哦好的呢"></prop-transmit-data06>
    </div>

    <!--插入内容占位符-->
    <div id="slots-demo" class="demo">
        <slotComponent>Something bad happened.</slotComponent>
    </div>

    <div>
        <date-picker @run-parent="getChild"></date-picker>
    </div>
    <p></p>
    <div>
        <custom-components01 @submit="getChild"></custom-components01>
    </div>

</template>

<script>
    import simpleComponent01 from "@/components/SimpleComponent01.vue";
    import propTransmitData01 from "@/components/PropTransmitData01.vue";
    import propTransmitData02 from "@/components/PropTransmitData02.vue";
    import propTransmitData03 from "@/components/PropTransmitData03.vue";
    import propTransmitData04 from "@/components/PropTransmitData04.vue";
    import propTransmitData05 from "@/components/PropTransmitData05.vue";
    import propTransmitData06 from "@/components/PropTransmitData06.vue";
    import slotComponent from "@/components/SlotComponent.vue";
    import datePicker from "@/components/DatePicker.vue";
    import customComponents01 from "@/components/customComponents01.vue";

    export default {
        name: 'App',
        components: {
            // 组件简单示例
            simpleComponent01,
            // 组件 - 传递数据
            propTransmitData01,
            propTransmitData02,
            propTransmitData03,
            propTransmitData04,
            propTransmitData05,
            propTransmitData06,
            datePicker,
            customComponents01,
            // 占位符
            slotComponent
        },
        data() {
            return {
                bookTitles: [
                    {id: '1', title: '22 My journey with Vue'},
                    {id: '2', title: '22 Blogging with Vue'},
                    {id: '3', title: '22 Why Vue is so fun'}
                ],
                posts: [
                    {id: '1', title: '66 My journey with Vue'},
                    {id: '2', title: '66 Blogging with Vue'},
                    {id: '3', title: '66 Why Vue is so fun'}
                ],
                postsFontSize: 1
            }
        },
        methods: {
            onEnlargeText(enlargeAmount) {
                this.postsFontSize += enlargeAmount;
            },
            getChild(data) {
                console.log("data -- :" + data.username + " " + data.password)
            },
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
