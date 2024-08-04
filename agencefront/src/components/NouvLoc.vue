<template>
    <div id="holder">
      <div id="container">
        <div>
          <h1>Nouvelle Location</h1>
        </div>
        <form @submit.prevent="handleAjoutLocation">
          <div id="grid">
            <!-- Sélecteur pour le locataire (client) -->
            <div class="inp-div">
              <label for="nomLoc">Nom Locataire :</label><br />
              <select id="nomLoc" v-model="location.client_id" required>
                <option v-for="client in clients" :key="client.id" :value="client.id">
                  {{ client.nom }} {{ client.prenom }}
                </option>
              </select>
            </div>
            <!-- Sélecteur pour la propriété -->
            <div class="inp-div">
              <label for="nomProp">Nom Propriété :</label><br />
              <select id="nomProp" v-model="location.propriete_id" required>
                <option v-for="prop in proprietes" :key="prop.id" :value="prop.id">
                  {{ prop.nom }}
                </option>
              </select>
            </div>
            <!-- Champ pour la date de début -->
            <div class="inp-div">
              <label for="datedeb">Date Début :</label><br />
              <input type="date" id="datedeb" v-model="location.date_debut" required />
            </div>
            <!-- Champ pour la date de fin -->
            <div class="inp-div">
              <label for="datefin">Date Fin :</label><br />
              <input type="date" id="datefin" v-model="location.date_fin" required />
            </div>
            <!-- Champ pour le taux de remise -->
            <div class="inp-div">
              <label for="tauxrem">Taux de remise :</label><br />
              <input type="number" step="0.01" id="tauxrem" v-model="location.taux_remise" required />
            </div>
            <!-- Champ pour l'avance -->
            <div class="inp-div">
              <label for="avance">Avance :</label><br />
              <input type="number" step="0.01" id="avance" v-model="location.avance" required />
            </div>
            <!-- Champ pour la description -->
            <div class="inp-div">
              <label for="description">Description :</label><br />
              <textarea id="description" v-model="location.description"></textarea>
            </div>
            <!-- Champ pour le statut de location -->
            <div class="inp-div">
              <label for="status">Statut :</label><br />
              <select id="status" v-model="location.statut" required>
                <option value="en attente">En attente</option>
                <option value="confirmée">Confirmée</option>
                <option value="en cours">En cours</option>
                <option value="terminée">Terminée</option>
                <option value="annulée">Annulée</option>
              </select>
            </div>
          </div>
          <div id="footer">
            <button id="btn-annuler" type="button" @click="annuler()">Annuler</button>
            <button id="btn-enrg" type="submit">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'NouvelleLocation',
    data() {
      return {
        location: {
            agent_id : 1,
          client_id: null,
          propriete_id: null,
          date_debut: '',
          date_fin: '',
          taux_remise: '',
          avance: '',
          description: '',
          statut: 'en attente', // Statut par défaut
        },
        clients: [], // Liste des clients
        proprietes: [], // Liste des propriétés
        errorMessage: '',
      };
    },
    created() {
      this.fetchProprietes();
      this.fetchClients();
    },
    methods: {
      fetchClients() {
        axios
          .get('clients')
          .then((response) => {
            this.clients = response.data.data;
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération des clients:', error);
            this.errorMessage = "Une erreur s'est produite lors de la récupération des clients.";
          });
      },
      fetchProprietes() {
        axios
          .get('proprietes')
          .then((response) => {
            this.proprietes = response.data.data;
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération des propriétés:', error);
            this.errorMessage = "Une erreur s'est produite lors de la récupération des propriétés.";
          });
      },
      handleAjoutLocation() {
        const payload = {
          ...this.location,
        };
  
        axios
          .post('locations', payload)
          .then((response) => {
            console.log('Location créée avec succès:', response.data.data);
            this.$router.push('/app/locations'); // Redirection après mise à jour
          })
          .catch((error) => {
            if (error.response && error.response.status === 422) {
              console.error("Erreurs de validation:", error.response.data.errors);
              alert("Veuillez vérifier les erreurs de validation.");
            } else {
              console.error("Une erreur s'est produite lors de la création:", error);
              alert("Une erreur s'est produite lors de la création. Veuillez réessayer.");
            }
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
#container{
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
#footer{
    display: flex;
    justify-content: space-between;
    margin-left: 70px;
    margin-right: 95px;
    margin-top: 20px;
    margin-bottom: 20px;
}
h1{
    color: #457B9D;
    text-align: start;
    margin-left: 70px;
    margin-top: 50px;
}

input , textarea , select{
  padding: 8px;
  border: 1px solid #457B9D;
  border-radius: 4px;
  width: 100%;
}

#btn-enrg{ 
  align-self: center;
  background-color: #457B9D;
  border-color: #457B9D;
  color: #eeeeee;
  border-radius: 3px;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom:5px;
  padding-right: 20px;
  padding-left: 20px;
}
#btn-annuler{ 
  align-self: center;
  background-color: #ffffff;
  border-color:#457B9D;
  color: #464F60;
  border-radius: 3px;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom:5px;
  padding-right: 20px;
  padding-left: 20px;
}

.inp-div{
display: flex;
flex-direction: column;
width: 17em;
align-self: center;
align-items: flex-start;
margin-bottom: 10px;
margin-left: 70px;
color:#464F60;
}


.error {
    color: red;
    text-align: center;
}
</style>