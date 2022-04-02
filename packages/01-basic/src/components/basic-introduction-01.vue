<template>

  <!--声明式渲染-->
  <h5>{{ message }}</h5>

  <!--字符串反转-->
  <button @click="reverseMessage">Reverse Message</button>
  <br>
  <!--字符串追加-->
  <button @click="message += '!'">追加字符串(写法一)</button>
  <br>
  <button @click="messageAppend">追加字符串(写法二)</button>
  <br>

  <!--点击弹窗-->
  <span @click.prevent="notify">点击弹窗</span>

</template>

<script>
  export default {
    name: 'basic-introduction-01',
    data() {
      return {
        message: '我是message'
      }
    },
    methods: {
      reverseMessage() {
        this.message = this.message.split('').reverse().join('')
      },
      messageAppend() {
        this.message += '~'
      },
      notify() {
        alert('哈哈哈哈，你是谁？')
      }
    }
  }
</script>

<style scoped>

</style>