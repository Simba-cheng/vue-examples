<template>
  <button @click="show = !show">显示、隐藏</button>
  <br>

  <button @click="list.push(list.length+1)">添加</button>
  <br>

  <button @click="list.pop()">删除</button>
  <br>

  <button @click="list.reverse()">集合反转</button>
  <br>

  <ul v-if="show && list.length">
    <li v-for="item of list" :key="item">{{ item }}</li>
  </ul>
  <span v-else-if="list.length">被隐藏起来了</span>
  <span v-else>集合为空</span>

</template>

<script>
  export default {
    name: 'conditionals-loops-01',
    data() {
      return {
        show: true,
        list: [1, 2, 3, 4, 5]
      }
    }
  }
</script>

<style scoped>

</style>