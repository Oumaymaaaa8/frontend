<template>
  <div>
    <div id="header">
    <h2 id="titre">Liste des Locations</h2>
    <button id="ajout-loc">
      <router-link to="/app/NouvelleLocation" class="nav-link">Nouvelle Location</router-link>
      <img src="../assets/more.png" width="20px" style="margin-left: 10px;">
    </button>
  </div>
    <table>
      <thead>
        <tr>
          <th>Référence</th>
          <th>Propriété</th>
          <th>Client</th>  <th>Statut</th>
          <th>Date début</th>
          <th>Date fin</th>
          <th>Montant Total</th>
          <th>Agent</th>
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
        <tr v-for="loc in Locations" :key="loc.id" >
          <td @click="DetailLoc(loc.id)">{{ loc.id }}</td>
          <td>{{ loc.propriete.nom }}</td> <!-- Assuming 'nom' is the property name -->
          <td>{{ loc.client.nom }}</td> <!-- Assuming 'nom' is the client name -->
       <td>{{ loc.statut }}</td>    <td>{{ loc.date_debut }}</td>
          <td>{{ loc.date_fin }}</td>
          <td>{{ calculateMontantTotal(loc.propriete.prix_jour, loc.date_debut, loc.date_fin) }}</td> <!-- Calcul du montant total -->
          <td>{{ loc.agent.name }}</td> 
          <td>
            <button id="action-button" @click="modifier(loc.id)">
              <img src="../assets/edit-text.png" width="25px" />
            </button>
          </td>
          <td>
            <button id="action-button" @click="effacer(loc.id)">
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
  name: 'ListeLocations',
  data() {
    return {
      Locations: undefined
    };
  },
  mounted() {
    this.fetchLocations();
  },
  methods: {
    fetchLocations() {
      axios
        .get('locations') // Remplacez cette URL par celle correcte
        .then((response) => {
          console.log('Réponse du serveur:', response);
          this.Locations = response.data.data; // Assignez les données reçues à la variable `Locations`
        })
        .catch((error) => {
          console.error(
            "Il y a eu une erreur lors de la récupération des locations!",
            error
          );
          console.log("Détails de l'erreur:", error.response);
        });
    },
    calculateMontantTotal(prixJour, dateDebut, dateFin) {
      const startDate = new Date(dateDebut);
      const endDate = new Date(dateFin);

      // Calcul de la différence en jours
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // Calcul du montant total
      const montantTotal = prixJour * diffDays;
      return montantTotal.toFixed(2); // Format pour deux décimales
    },
    modifier(id) {
      console.log('Modifier propriété avec ID:', id);
      this.$router.push({ name: 'EditLocation', params: { id: id } });

    },
    effacer(id) {
      axios
          .delete(`locations/${id}`)
          .then(response => {
            console.log(response.data.message);
            this.Locations = this.Locations.filter(loc => loc.id !== id);

          })
          .catch(error => {
            console.error('There was an error deleting the location!', error);
            alert('Une erreur s\'est produite lors de la suppression de la location.');
          });
      },
      DetailLoc(id){
        this.$router.push({ name: 'DetailLocation', params: { id: id } });
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