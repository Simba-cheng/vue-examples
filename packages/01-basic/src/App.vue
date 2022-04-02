<template>
  <div id="introduction01">
    <introduction01></introduction01>
  </div>
  <p></p>

  <div id="attributeBind01">
    <attributeBind01></attributeBind01>
  </div>
  <p></p>

  <div id="conditionalsLoops01">
    <conditionalsLoops01></conditionalsLoops01>
  </div>
  <p></p>

  <div id="formBind01">
    <formBind01></formBind01>
  </div>
  <p></p>

  <div id="simpleComponents01">
    <simpleComponents01></simpleComponents01>
  </div>
  <p></p>

  <div id="computed01">
    <computed01></computed01>
  </div>
  <p></p>

</template>

<script>
  import introduction01 from '@/components/introduction-01'
  import attributeBind01 from '@/components/attribute-bind-01'
  import conditionalsLoops01 from '@/components/conditionals-loops-01'
  import formBind01 from '@/components/form-bind-01'
  import simpleComponents01 from '@/components/simple-Components-01'
  import computed01 from '@/components/computed-01'

  export default {
    name: 'App',
    components: {
      introduction01,
      attributeBind01,
      conditionalsLoops01,
      formBind01,
      simpleComponents01,
      computed01
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
