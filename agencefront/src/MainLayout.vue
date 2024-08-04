<template>
    <div class="main-layout">
        <navbar></navbar>
     
        <router-view></router-view> 

    </div>
  </template>
  
  <script>

  import navbar from './components/navbar.vue'; 
  export default {
    name: 'MainLayout',
  components: { navbar },
  data() {
    return {
      username: null,
    }
  },
    
   
  };
  </script>
  
  <style scoped>
  .main-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  header {
    background: #333;
    color: #fff;
    padding: 10px;
  }
  
  nav {
    display: flex;
    justify-content: space-around;
  }
  
  main {
    flex: 1;
    padding: 20px;
  }
  </style>
  