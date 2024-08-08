<template>
    <div>
      <div id="header">
      <h2 id="titre">Liste des clients</h2>
      <button id="ajout-loc">
        <router-link to="/app/AjoutClient" class="nav-link">Ajout Client</router-link>
        <img src="../assets/more.png" width="20px" style="margin-left: 10px;">
      </button>
    </div>
      <table>
        <thead>
          <tr>
            <th>nom</th>
            <th> prenom </th>
            <th>cin </th>  <th>Statut</th>
            <th>passeport</th>
            <th>date_delivrance</th>
            <th>lieu_delivrance</th>
            <th  v-if="false">
              <button id="action-button">
                <img src="../assets/edit-text.png" width="25px" />
              </button>
            </th>
            <th  v-if="false">
              <button  v-if="false" id="action-button">
                <img  v-if="false" src="../assets/delete.png" width="25px" />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cli in clients" :key="cli.id" >
            <td @click="DetailClient(cli.id)">{{ cli.id }}</td>
            <td>{{ cli.nom }}</td> <!-- Assuming 'nom' is the property name -->
            <td>{{ cli.prenom }}</td> <!-- Assuming 'nom' is the client name -->
         <td>{{ cli.cin }}</td>    <td>{{ cli.passeport }}</td>
            <td>{{ cli.date_delivrance }}</td>
            <td>{{ cli.lieu_delivrance }}</td> 
            <td>
              <button id="action-button" @click="modifier(cli.id)">
                <img src="../assets/edit-text.png" width="25px" />
              </button>
            </td>
            <td>
              <button id="action-button" @click="effacer(cli.id)">
                <img src="../assets/delete.png" width="25px" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'ListeClients',
    data() {
      return {
        clients: undefined
      };
    },
    mounted() {
      this.fetchClients();
    },
    methods: {
        fetchClients() {
        axios
          .get('clients') // Remplacez cette URL par celle correcte
          .then((response) => {
            console.log('Réponse du serveur:', response);
            this.clients = response.data.data; // Assignez les données reçues à la variable 
          })
          .catch((error) => {
            console.error(
              "Il y a eu une erreur lors de la récupération des Clients!",
              error
            );
            console.log("Détails de l'erreur:", error.response);
          });
      },
     
      modifier(id) {
        console.log('Modifier client avec ID:', id);
        this.$router.push({ name: 'EditClient', params: { id: id } });
  
      },
      effacer(id) {
        axios
            .delete(`clients/${id}`)
            .then(response => {
              console.log(response.data.message);
              this.clients = this.clients.filter(cli => cli.id !== id);
  
            })
            .catch(error => {
              console.error('There was an error deleting the client!', error);
              alert('Une erreur s\'est produite lors de la suppression du client.');
            });
        },
        DetailClient(id){
          this.$router.push({ name: 'DetailClient', params: { id: id } });
        }
      },
    
  };
  
  </script>
  
  
  
  <style scoped>
  #header{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 100px;
      margin-right: 100px;
      margin-bottom: 20px
  }
  #titre{
  color: #457B9D;
  
  }
  #ajout-loc{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: medium;
  font-weight: 700;
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
  font-weight: 500;
  }
  #action-button{
  background-color: #457B9D;
  border-color: #457B9D;
  color: #eeeeee;
  border-radius: 3px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  
  tr ,table {
      width: 100%;
      padding-left:40px;
      padding-right: 10px;
  
  }
  .nav-link{
      text-decoration: none;
      color: #fff;
  }
  tr:hover{
    background-color: #457b9d47;
  
  }
  </style>