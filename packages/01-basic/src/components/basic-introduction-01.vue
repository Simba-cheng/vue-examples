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

  <!--定时任务,每秒递增-->
  <div id="counter">
    Counter:{{ counter }}
  </div>

  <!--鼠标悬停-->
  <div id="bind-attribute">
    <span v-bind:title="bindAttributeMessage">
      鼠标悬停几秒钟查看动态绑定提示信息
    </span>
  </div>

  <!--数据双向绑定-->
  <div id="two-way-binding">
    <span>{{ twoWayBindingMessage }}</span><br>
    <input type="text" v-model="twoWayBindingMessage"/>
  </div>

  <!--条件判断-->
  <div id="conditional-rendering">
    <span v-if="seen">你能看到我么？</span><br>
    <button @click="seen = !seen">显示或者隐藏</button>
  </div>

</template>

<script>
  export default {
    name: 'basic-introduction-01',
    data() {
      return {
        message: '我是message',
        counter: 0,
        bindAttributeMessage: '当前时间：' + new Date().toLocaleTimeString(),
        twoWayBindingMessage: '你好呀....',
        seen: true
      }
    },
    mounted() {
      setInterval(() => {
        this.counter++
      }, 1000)
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