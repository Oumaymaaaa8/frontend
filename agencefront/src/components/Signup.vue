<template>
   <div id="container">
   <div class="sign-up">
      <h2>Création de compte</h2>
      <form @submit.prevent="handleSignUp">
        <div class="inp-div">
          <label for="username">Nom d'utilisateur:</label><br>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div  class="inp-div">
          <label for="cin">Numéro carte d’identité :</label><br>
          <input type="password" id="cin" v-model="cin" required />
        </div>
        <div  class="inp-div">
          <label for="password">Mot de passe :</label><br>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div  class="inp-div">
          <label for="confirm-password">Confirmer Mot de passe :</label><br>
          <input type="password" id="confirm-password" v-model="password" required />
        </div>
        <div id="switching"><p> Vous avez un compte?   <router-link to="/login"> se connecter</router-link></p> </div>

        <button type="submit">Valider</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    </div>
</div>
  </template>

<script>
export default {
  name: 'sign-up',
  data() {
    return {
      username: '',
      cin:'',
      password: '',
      confirmpassword: '',
      errorMessage: '',
    };
  },
  methods: {
    handleSignUp() {
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      if (this.email === 'test@example.com' && this.password === 'password') {
        alert('Sign in successful!');
      } else {
        this.errorMessage = 'données invalide';
      }
    }
  }
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