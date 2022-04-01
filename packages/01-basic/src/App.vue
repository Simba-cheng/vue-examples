<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <basic-introduction01></basic-introduction01>

</template>

<script>
  import basicIntroduction01 from '@/components/basic-introduction-01'

  export default {
    name: 'App',
    components: {
      basicIntroduction01
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
