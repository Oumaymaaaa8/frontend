<!-- NotFound.vue -->
<template>
    <div class="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <router-link to="/">Go to Homepage</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 50px;
  }
  
  .not-found h1 {
    font-size: 3em;
    color: #ff4757;
  }
  
  .not-found p {
    font-size: 1.5em;
    margin: 20px 0;
  }
  
  .not-found a {
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
  }
  
  .not-found a:hover {
    text-decoration: underline;
  }
  </style>
  