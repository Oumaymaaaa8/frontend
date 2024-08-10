<template>
    <div id="holder">
        <div id="container">
            <div>
                <h1>Ajouter un Equipement</h1>
            </div>
            <form @submit.prevent="addEquipment">
                <div id="grid">
                   
                </div>
                <div id="footer">
                    <div class="inp-div">
                        <label for="nomLoc">Intitulé Equipement :</label><br>
                        <input type="text" id="nom" v-model="equipement.intitule" required />
                    </div>                     <button id="btn-enrg" type="submit">Ajouter</button>
                </div>
            </form>

            <table>
      <thead>
        <tr>
          <th>Liste des equipements</th>
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
        <tr v-for="eq in equipements" :key="eq.id" >
         
          <td>{{ eq.intitule }}</td> <!-- Assuming 'nom' is the client name -->
         
          <td>
            <button id="action-button" @click="effacer(eq.id)">
              <img src="../assets/delete.png" width="25px" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'equi-pements',
    data() {
        return {
            equipements: undefined,
equipement : {intitule:''},
            errorMessage: '',
        };
    },created() {
    this.fetchEquipements();
  },
  
  methods: {
  async fetchEquipements() {
    await axios
      .get("equipements")
      .then((response) => {
        this.equipements = response.data.data;
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des équipements:",
          error
        );
        this.errorMessage =
          "Une erreur s'est produite lors de la récupération des équipements.";
      });
  },
  
  addEquipment() {
    const payload = {
      ...this.equipement,
    };

    axios.post(`equipements`, payload)
      .then(response => {
        console.log('Équipement ajouté avec succès:', response.data);
        
        // Ajouter l'équipement à la liste locale
        this.equipements.push(response.data.data); // Assume that response.data.data contains the added equipment
        
        // Réinitialiser le formulaire
        this.equipement.intitule = '';
      })
      .catch(error => {
        console.error('Erreur lors de la création:', error);
        alert("Une erreur s'est produite lors de la création.");
      });
  },
  
  effacer(id) {
    axios
      .delete(`equipements/${id}`)
      .then(response => {
        console.log(response.data.message);
        this.equipements = this.equipements.filter(eq => eq.id !== id);
      })
      .catch(error => {
        console.error('There was an error deleting the location!', error);
        alert('Une erreur s\'est produite lors de la suppression de l\'équipement.');
      });
  },
}
  }
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
    width: 50%;
    padding-left:40px;
    padding-right: 10px;
    padding-bottom: 10px;

}
.nav-link{
    text-decoration: none;
    color: #fff;
}
tr:hover{
  background-color: #457b9d47;

}
  
  .error {
    color: red;
    text-align: center;
  }
  </style>