<template>
  <div id="01">
    <span>是否有出版书籍：</span>
    <!--<span>{{ author.books.length > 0 ? 'yes' : 'no' }}</span>-->
    <span>{{ publishedBooksMessage }}</span>

    <ul v-if="author.books.length > 0">
      <li v-for="book in author.books" :key="book">{{ book }}</li>
    </ul>
    <br>
    <button @click="author.books.pop()">删除一本书</button>
  </div>

  <div id="02">
    姓：<input type="text" placeholder="first name" v-model="firstName"><br>
    名：<input type="text" placeholder="last name" v-model="lastName"><br>
    全名<input type="text" placeholder="fullName" v-model="fullName"><br>
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
        },
        firstName: '',
        lastName: ''
      }
    },
    computed: {
      publishedBooksMessage() {
        return this.author.books.length > 0 ? 'yes' : 'no'
      },
      fullName() {
        return this.firstName + ' ' + this.lastName
      }
      //      fullName: function() {
      //        return this.firstName + ' ' + this.lastName
      //      }
    }
  }
</script>

<style scoped>

</style>