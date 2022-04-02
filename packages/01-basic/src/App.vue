<template>
  <div id="introduction01">
    <introduction01></introduction01>
  </div>

  <div id="attributeBind01">
    <attributeBind01></attributeBind01>
  </div>

</template>

<script>
  import introduction01 from '@/components/introduction-01'
  import attributeBind01 from '@/components/attribute-bind-01'

  export default {
    name: 'App',
    components: {
      introduction01,
      attributeBind01
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
