<template>
  <div>
    <span :title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>
    <br>

    <span :class="{red:isRed}" @click="changeRed">
      This should be red... but click me to toggle it.
    </span>
    <br>

    <span :style="{color}" @click="changeColor">
      This should be green, and should toggle between green and blue on click.
    </span>
  </div>
</template>

<script>
  export default {
    name: 'attribute-bind-01',
    data() {
      return {
        message: 'hello ...',
        isRed: true,
        color: 'green'
      }
    },
    methods: {
      changeRed() {
        this.isRed = !this.isRed
      },
      changeColor() {
        this.color = this.color === 'green' ? 'blue' : 'green'
      }
    }
  }
</script>

<style scoped>
.red {
  color: red;
}
</style>