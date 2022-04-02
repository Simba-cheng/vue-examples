<template>

  <input type="text" v-model="myTextMessage">{{ myTextMessage }}
  <br>

  <!--单选框-->
  <input type="checkbox" id="checkbox1" v-model="checkbox1">
  勾选没？<label for="checkbox1">{{ checkbox1 }}</label>
  <br>

  <!--多选框-->
  <input type="checkbox" id="jack" value="Jack" v-model="checkbox2"/>
  <label for="jack">Jack</label>
  <input type="checkbox" id="John" value="John" v-model="checkbox2"/>
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkbox2"/>
  <label for="mike">Mike</label><br>
  <span>{{ checkbox2 }}</span>
  <br>

  <!--单选按钮-->
  <input type="radio" id="one" value="One" v-model="picked"/>
  <label for="one">One</label>
  <input type="radio" id="two" value="Two" v-model="picked"/>
  <label for="two">Two</label>
  <br/>
  <span>Picked:{{ picked }}</span>
  <br>

  <!--下拉选择-->
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected:{{ selected }}</span>
  <br>

</template>

<script>
  export default {
    name: 'form-bind-01',
    data() {
      return {
        myTextMessage: '怕那森',
        checkbox1: true,
        checkbox2: [],
        picked: 'One',
        selected: ''
      }
    }
  }
</script>

<style scoped>

</style>