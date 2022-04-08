<template>
  <div class="container-login full">
    <div class="notes">
      <h4>{{ title }}</h4>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
  import store from '@/store'

  const {title, desc} = store.state.login.info

</script>

<style scoped>

</style>