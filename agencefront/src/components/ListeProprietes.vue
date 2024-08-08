<template>
  <div id="header">
    <h2 id="titre">Liste des Propriétés</h2>
    <button id="ajout-loc">
      <router-link to="/app/NouvellePropriete" class="nav-link">
        Nouvelle Propriété
      </router-link>
      <img src="../assets/more.png" width="20px" style="margin-left: 10px;" />
    </button>
  </div>

  <table>
    <thead>
      <tr>
        <th>Nom Propriété</th>
        <th>Chambre</th>
        <th>Salle de Bain</th>
        <th>Surface</th>
        <th>Étage</th>
        <th>Prix/Jour</th>
        <th v-if="false">Modifier</th>
        <th  v-if="false">Effacer</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="prop in proprietes" :key="prop.id">
        <td @click="DetailProp(prop.id)">{{ prop.nom }}</td>
        <td>{{ prop.nb_chambres }}</td>
        <td>{{ prop.nb_salles_de_bain }}</td>
        <td>{{ prop.surface }}</td>
        <td>{{ prop.etage }}</td>
        <td>{{ prop.prix_jour }}</td>
        <td>
          <button id="action-button" @click="modifier(prop.id)">
            <img src="../assets/edit-text.png" width="25px" />
          </button>
        </td>
        <td>
          <button id="action-button" @click="effacer(prop.id)">
            <img src="../assets/delete.png" width="25px" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListeProprietes',
  data() {
    return {
      proprietes: [], // Initialize as an empty array
    };
  },
  mounted() {
    this.fetchProprietes();
  },
  methods: {
    fetchProprietes() {
      axios
        .get('proprietes') // Adjust the URL to match your API endpoint
        .then((response) => {
          this.proprietes = response.data.data;
          console.log('Réponse du serveur:', response.data);
        })
        .catch((error) => {
          console.error('There was an error fetching the properties!', error);
          alert(
            "Une erreur s'est produite lors de la récupération des propriétés."
          );
        });
    },
    modifier(id) {
      console.log('Modifier propriété avec ID:', id);
      this.$router.push({ name: 'EditPropriete', params: { id: id } });
    },
    effacer(id) {
      axios
        .delete(`proprietes/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.proprietes = this.proprietes.filter((prop) => prop.id !== id);
        })
        .catch((error) => {
          console.error('There was an error deleting the property!', error);
          alert(
            "Une erreur s'est produite lors de la suppression de la propriété."
          );
        });
    },
    DetailProp(id) {
      this.$router.push({ name: 'DetailPropriete', params: { id: id } });
    },
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
        padding-left:0px;
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