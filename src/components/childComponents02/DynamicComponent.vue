<template>
    <div id="app">

        <!--放置tab点击标签-->
        <div class="top">

            <!--
                for循环cardArr,在data中定义的点击的tab数据
            -->
            <div class="cardClass" :class="{highLight:whichIndex === index}"
                 v-for="(item,index) in cardArr" :key="index"
                 @click="whichIndex = index;componentId = item.componentId">
                {{ item.componentName }}
            </div>
        </div>

        <!--动态组件呈现对应内容-->
        <div class="bottom">

            <!--
                动态组件标签：component。
                该标签的is属性,is值为谁，就渲染谁。
            -->
            <component :is="componentId"></component>

            <!--
                keep-alive 缓存组件
                组件不会被销毁，dom不会被重新渲染，浏览器不会回流、重绘，优化性能。
            -->
            <!--<keep-alive>
                <component :is="componentId"></component>
            </keep-alive>-->

        </div>
    </div>
</template>

<!--
    https://juejin.cn/post/6957696034449391646
-->
<script>

    // 引入定义好的tab组件
    import helloTab from "@/components/childComponents02/tabs/HelloTab.vue";
    import postsTab from "@/components/childComponents02/tabs/PostsTab.vue";
    import archiveTab from "@/components/childComponents02/tabs/ArchiveTab.vue";

    export default {
        name: "dynamicComponent",

        // 注册tab组件
        components: {
            helloTab,
            postsTab,
            archiveTab
        },

        data() {
            return {
                whichIndex: 0,

                //默认展示标签
                componentId: "helloTab",

                //定义存放点击的tab数据
                cardArr: [
                    {componentName: "helloTab", componentId: "helloTab"},
                    {componentName: "postsTab", componentId: "postsTab"},
                    {componentName: "archiveTab", componentId: "archiveTab"}
                ]
            }
        },
    }
</script>

<style>

    #app {
        width: 60%;
        height: 50vh;
        box-sizing: border-box;
        padding: 50px;
    }

    .top {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-around;
    }

    .cardClass {
        width: 20%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background-color: #fff;
        border: 1px solid #e9e9e9;
    }

    .highLight {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        transform: translate3d(0, -1px, 0);
    }

    .bottom {
        margin-top: 20px;
        width: 100%;
        height: calc(100% - 100px);
        border: 3px solid pink;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
