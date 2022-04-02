<template>
  <div id="todoItem">
    <todo-item v-for="item in groceryList" :todo="item" :key="item.id"></todo-item>
  </div>
</template>

<script>
  import todoItem from '@/components/simpleComponents/TodoItem'

  export default {
    name: 'Simple-Components-01',
    components: {
      todoItem
    },
    data() {
      return {
        groceryList: [
          {id: 0, text: 'Vegetables'},
          {id: 1, text: 'Cheese'},
          {id: 2, text: 'Whatever else humans are supposed to eat'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>