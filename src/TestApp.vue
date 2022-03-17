<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld2 msg="哈哈哈，你在说啥？"></HelloWorld2>
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

            <!--1.使用事件抛出一个值-->
            <prop-transmit-data04 v-for="post in posts" :key="post.id" :title="post.title"
                                  @enlarge-text="postsFontSize+=$event"></prop-transmit-data04>
        </div>
    </div>

</template>

<script>
    import HelloWorld2 from "@/components/HelloWorld2.vue";
    import simpleComponent01 from "@/components/SimpleComponent01.vue";
    import propTransmitData01 from "@/components/PropTransmitData01.vue";
    import propTransmitData02 from "@/components/PropTransmitData02.vue";
    import propTransmitData03 from "@/components/PropTransmitData03.vue";
    import propTransmitData04 from "@/components/PropTransmitData04.vue";

    export default {
        name: 'testApp',
        components: {
            HelloWorld2,

            // 组件简单示例
            simpleComponent01,
            // 组件 - 传递数据
            propTransmitData01,
            propTransmitData02,
            propTransmitData03,
            propTransmitData04
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
