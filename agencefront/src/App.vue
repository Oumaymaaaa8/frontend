<template>
  <navbar></navbar>
<router-view></router-view>   
</template>

<script>

import navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {navbar},
};
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
