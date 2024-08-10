<template>
<div id="container">
<img src="../assets/logo.jpg" id="logo">



      <router-link to="/app/locations" class="nav-link">Locations</router-link>
      <router-link to="/app/proprietes" class="nav-link">Propriétés</router-link>
      <router-link to="/app/clients" class="nav-link">Clients</router-link>      <router-link to="/app/equipements" class="nav-link">Equipements</router-link>

<div id="cred"><p><b>{{ username }} </b></p> <p>admin</p></div><button id="logout" @click="logout()"><img src="../assets/Logout.png" id="logout" >
</button>


</div>

</template>

<script>

export default {
    name: 'nav-bar',
    data() {
      return {
      username:'',
    };
},

    created (){
      this.setusername();
    },
  methods: {
  setusername(){
    this.username= localStorage.getItem("user_name")
  } ,logout(){
    localStorage.removeItem("isAuthenticated");
    this.$router.push({ name: "Signin" }); // Redirect to the main application

  }
  },
 
};
</script>
<style scoped>
.nav-link{
    text-decoration: none;
    color: #464F60;
}
#container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: medium;
    font-weight: 700;
    color: #464F60;
    margin-bottom: 20px;
  
}
#logo{
    height: 60px;
    margin-left: 100px;
}
#cred{
    font-size:10px;
    padding-left :70em;
}
#logout{
    width: 50px;
    margin-right: 20px;
    background-color: transparent;
    border: none;
}
</style>