<template>
  <div id="container">
  <div class="sign-up">
     <h2>Création de compte</h2>
     <form @submit.prevent="handleSignUp">
       <div class="inp-div">
         <label for="username">Nom d'utilisateur:</label><br>
         <input type="text" id="username" v-model="user.username" required />
       </div>
       <div  class="inp-div">
         <label for="cin">Numéro carte d’identité :</label><br>
         <input type="text" id="cin" v-model="user.cin" required />
       </div>
       <div  class="inp-div">
         <label for="password">Mot de passe :</label><br>
         <input type="password" id="password" v-model="user.password" required />
       </div>
       <div  class="inp-div">
         <label for="confirm-password">Confirmer Mot de passe :</label><br>
         <input type="password" id="confirm-password" v-model="user.confirmpassword" required />
       </div>
       <div id="switching"><p> Vous avez un compte?   <router-link to="/login"> se connecter</router-link></p> </div>

       <button type="submit">Valider</button>
     </form>
     <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

   </div>
</div>
 </template>
 
 <script>
import axios from 'axios';

export default {
  name: 'sign-up',
  data() {
    return {
      user: {
        username: '',
        cin: '',
        password: '',
        confirmpassword: '',
      },
      errorMessage: '',
    };
  },
  methods: {
    async handleSignUp() {
      if (this.user.password !== this.user.confirmpassword) {
        this.errorMessage = 'Passwords do not match!';
        return;
      }

      try {
        const response = await axios.post( 'register', {
          name: this.user.username,
          cin: this.user.cin,
          password: this.user.password,
          password_confirmation: this.user.confirmpassword,
        });

        if (response && response.data) {
          console.log('Registration successful:', response.data);
          alert('Registration successful!');
          this.$router.push("login"); 

        }

        // Reset form fields
        this.user.username = '';
        this.user.cin = '';
        this.user.password = '';
        this.user.confirmpassword = '';
        this.errorMessage = '';
      } catch (error) {

        console.error('Registration failed:', error);

        if (error.response && error.response.data) {
          this.errorMessage = error.response.data.message || 'Registration failed. Please try again.';
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

.sign-up {
 max-width: 400px;
 border-radius: 5px;
 position: relative;
 left:55% ;
 top : 10%;
 background-color: rgba(69, 123, 157, 0.38);
 padding-bottom: 20px;
 padding-top: 20px;
 color: #eeeeee;
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


.sign-up h2 {
 text-align: center;
 font-weight: 600;
}

.sign-up form {
 display: flex;
 flex-direction: column;
}

a {
 text-decoration: none;
 font-weight:900;
 color:#454B57 ;
}

.sign-up form label {
 font-weight:normal;}

.sign-up form input {
 padding: 8px;
 border: 1px solid #454B57;
 border-radius: 4px;
 width: 100%;
}

.sign-up form button {
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

.sign-up form button:hover {
 background-color: #457B9D;
}

.error {
 color: red;
 text-align: center;
}
</style>