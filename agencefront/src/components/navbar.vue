<template>
<div id="container">
<img src="../assets/logo.jpg" id="logo">
<a>Locations</a>
<a>Proprietes </a>
<a>Planning des Reservations</a>
<div id="cred"><p><b>Foulen</b></p> <p>admin</p></div>
<router-link to="/login"><img src="../assets/Logout.png" id="logout"></router-link>


</div>

</template>

<script>
export default {
    name: 'nav-bar',
    data() {
        return {
       
        };
    },
    methods: {
     
    }
};
</script>
<style scoped>
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
    margin-bottom: 30px;
  
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
}
</style>