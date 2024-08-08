<template>
  <div id = "container">
    <div class="sign-in">
      <h2>Se connecter</h2>
      <form @submit.prevent="handleSignIn">
        <div class="inp-div">
          <label for="username">Nom d'utilisateur:</label><br>
          <input type="text" id="username" v-model="user.username" required />
        </div>
        <div class="inp-div">
          <label for="password">Mot de passe :</label><br>
          <input type="password" id="password" v-model="user.password" required />
        </div>
        <div id="switching"><p> Vous n’avez pas de compte?  <router-link to="/signup"> Créer un compte</router-link></p> </div>

        <button type="submit">Connexion</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    </div>
  </div>
  </template>


  <script>
import axios from 'axios';

export default {
  name: 'sign-in',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      errorMessage: '',
    };
  },
  methods: {
    async handleSignIn() {
     
     

      try {
        const response = await axios.post( 'login', {
          name: this.user.username,
          password: this.user.password,
        });

        if (response && response.data) {
          console.log('login successful:', response.data);
          alert('login successful!');
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem('user_id', response.data.user.id);
          localStorage.setItem('user_name', response.data.user.name);
          localStorage.setItem("isAuthenticated", "true");

          this.$router.push({ name: "ListeLocations" }); // Redirect to the main application

        }

        // Reset form fields
        this.user.username = '';
        this.user.password = '';
        this.errorMessage = '';
      } catch (error) {

        console.error('login failed:', error);

        if (error.response && error.response.data) {
          this.errorMessage = error.response.data.message || 'login failed. Please try again.';
        } else {
          this.errorMessage = 'An unexpected error occurred. Please try again.';
        }
      }
    },
  },
};
</script>

<style scoped>
#container{
  height:97.5vh;
  width: 100%;
  background-image: url('../assets/back.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.sign-in {
  max-width: 400px;
  border-radius: 5px;
  position: relative;
  left:55% ;
  top : 20%;
  background-color: rgba(69, 123, 157, 0.38);
  padding-bottom: 20px;
  padding-top: 20px;
  color: #eeeeee;
  
}


.sign-in h2 {
  text-align: center;
}

.inp-div{
display: flex;
flex-direction: column;
width: 17em;
align-self: center;
align-items: flex-start;
margin-bottom: 10px;
margin-top: 10px;
color: #eeeeee;
}
#switching{
margin-top: -10px;
display: flex;
flex-direction: row;
align-self:center;
font-size: 13px;
}
 
a {
  text-decoration: none;
  font-weight:900;
  color:#454B57 ;
}

.sign-in form {
  display: flex;
  flex-direction: column;
}

.sign-in form label {
  font-weight:normal;

}

.sign-in form input {
  padding: 8px;
  border: 1px solid #454B57;
  border-radius: 4px;
  width: 100%;
}

.sign-in form button {
  margin-top: 30px;
  padding: 10px;
  width: 40%;
  align-self: center;
  background-color: #457B9D;
  color: #eeeeee;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.sign-in form button:hover {
  background-color: #457B9D;
}

.error {
  color: red;
  text-align: center;
}
</style>