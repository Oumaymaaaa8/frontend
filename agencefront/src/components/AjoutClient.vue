<template>
  <div id="holder">
      <div id="container">
          <div>
              <h1>Ajouter un Client</h1>
          </div>
          <form @submit.prevent="addClient">
              <div id="grid">
                  <div class="inp-div">
                      <label for="nomLoc">Nom client :</label><br>
                      <input type="text" id="nom" v-model="client.nom" required />
                  </div>
                  <div class="inp-div">
                      <label for="prenom">prenom :</label><br>
                      <input type="text" id="prenom" v-model="client.prenom" required />
                  </div>
                  <div class="inp-div">
                      <label for="cin">cin :</label><br>
                      <input type="text" id="cin" v-model="client.cin"  />
                  </div>
                  <div class="inp-div">
                      <label for="passeport">passeport :</label><br>
                      <input type="text" id="passeport" v-model="client.passeport"  />
                  </div>
                  <div class="inp-div">
                      <label for="datedeliv">Date Délivrance :</label><br>
                      <input type="date" id="date_delivrance" v-model="client.date_delivrance" required />
                  </div>
                  <div class="inp-div">
                      <label for="lieu"> lieu delivrance :</label><br>
                      <input type="text" id="lieu" v-model="client.lieu_delivrance" required />
                  </div>
                 
              </div>
              <div id="footer">
                  <button id="btn-annuler" @click="annuler()">Annuler</button>
                  <button id="btn-enrg" type="submit">Enregistrer</button>
              </div>
          </form>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditClient',
  data() {
      return {
          client: {
              nom: '',
              prenon: '',
              cin: ' ',
              passeport: ' ',
              date_delivrance: '00-00-0000',
              lieu_delivrance: ','
          },
          errorMessage: '',
      };
  },

  methods: {
    
    addClient() {
          const payload = {
              ...this.client,
          };

          axios.post(`clients`, payload)

              .then(response => {
                  console.log('client ajouté avec succès:', response.data);
                  this.$router.push('/app/clients');
              })
              .catch(error => {
                  console.error('Erreur lors de la création:', error);
                  alert("Une erreur s'est produite lors de la création.");
              });
      },
      annuler() {
          this.$router.go(-1); // Retour à la page précédente
      },
  },
};
</script>

<style scoped>
#holder {
  display: flex;
  justify-content: center;
}

#container {
  border: 1px solid #457B9D;
  border-radius: 20px;
  width: 60%;
}

#grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 90px;
  gap: 5px;
  justify-content: center;
  align-items: center;
}

#footer {
  display: flex;
  justify-content: space-between;
  margin-left: 70px;
  margin-right: 95px;
  margin-top: 20px;
  margin-bottom: 20px;
}

h1 {
  color: #457B9D;
  text-align: start;
  margin-left: 70px;
  margin-top: 50px;
}

input,
textarea,
select {
  padding: 8px;
  border: 1px solid #457B9D;
  border-radius: 4px;
  width: 100%;
}

#btn-enrg {
  align-self: center;
  background-color: #457B9D;
  border-color: #457B9D;
  color: #eeeeee;
  border-radius: 3px;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 20px;
  padding-left: 20px;
}

#btn-annuler {
  align-self: center;
  background-color: #ffffff;
  border-color: #457B9D;
  color: #464F60;
  border-radius: 3px;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 20px;
  padding-left: 20px;
}

.inp-div {
  display: flex;
  flex-direction: column;
  width: 17em;
  align-self: center;
  align-items: flex-start;
  margin-bottom: 10px;
  margin-left: 70px;
  color: #464F60;
}


.error {
  color: red;
  text-align: center;
}
</style>