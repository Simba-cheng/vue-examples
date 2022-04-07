<template>
  <div class="common-layout-01">
    <el-container  style="height: 500px; border: 1px solid #eee">
      <!--侧边栏-->
      <el-aside  width="200px" style="background-color: rgb(238, 241, 246)">I'am left</el-aside>
      <!-- header头 -->
      <el-container>
        <el-header style='text-align:right;font-size:12px'>I'am header</el-header>
        <!-- 主要 内容 -->
        <el-main style='background-color: rgb(228, 231, 246)'>I'am main</el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  export default {
    name: 'comonLayout01'
  }
</script>

<style scoped>

</style>