<!--
  布局容器

  https://element-plus.gitee.io/zh-CN/component/container.html#%E5%B8%B8%E8%A7%81%E9%A1%B5%E9%9D%A2%E5%B8%83%E5%B1%80
-->
<template>
  <div>
    <!--<commonLayout01></commonLayout01>-->
    <commonLayout02></commonLayout02>
    <!--<commonLayout03></commonLayout03>-->
  </div>
</template>

<script>

//  import commonLayout01 from '@/components/commonLayout01'
  import commonLayout02 from '@/components/commonLayout02'
  //  import commonLayout03 from '@/components/commonLayout03'

  export default {
    name: 'App',
    components: {
      //      commonLayout01,
      commonLayout02
      //      commonLayout03
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
