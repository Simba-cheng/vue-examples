<template>
  <div id="computed-01">
    <span>是否有出版书籍：</span>
    <!--<span>{{ author.books.length > 0 ? 'yes' : 'no' }}</span>-->
    <span>{{publishedBooksMessage}}</span>

    <ul v-if="author.books.length > 0">
      <li v-for="book in author.books" :key="book">{{ book }}</li>
    </ul>
    <br>
    <button @click="author.books.pop()">删除一本书</button>

  </div>
</template>

<script>
  export default {
    name: 'computed-01',
    data() {
      return {
        author: {
          name: 'jd',
          books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
          ]
        }
      }
    },
    computed: {
      publishedBooksMessage() {
        return this.author.books.length > 0 ? 'yes' : 'no'
      }
    }
  }
</script>

<style scoped>

</style>