<template>
    <div id="holder">
        <div id="container">

            <div>
                <h1>Mis a jour Propriété</h1>
            </div>
            <form @submit.prevent="handleAjoutLoc">
                <div id="grid">
                    <div class="inp-div">
                        <label for="nomLoc">Nom Propriété</label><br>
                        <input type="text" id="nom" v-model="propriete.nom" required />
                    </div>
                    <div class="inp-div">
                        <label for="nomProp">Chambre</label><br>
                        <input type="text" id="chambre" v-model="propriete.nb_chambres" required />

                    </div>
                    <div class="inp-div">
                        <label for="salledebain">Salle de Bain</label><br>
                        <input type="text" id="salledebain" v-model="propriete.nb_salles_de_bain" required />
                    </div>
                    <div class="inp-div">
                        <label for="surface">Surface</label><br>
                        <input type="text" id="surface" v-model="propriete.surface" required />
                    </div>
                </div>
                <div id="second-container">
                    <div>
                        <div class="inp-div">
                            <label for="etage">Étage</label><br>
                            <input type="number" id="etage" v-model="propriete.etage">
                        </div>


                        <div class="inp-div">
                            <label for="fraisAgence">Frais Agence</label><br>
                            <input type="text" id="fraisAgence" v-model="propriete.frais_agence" required />
                        </div>
                        <div class="inp-div">
                            <label for="prixj">Prix/jour</label><br>
                            <input type="text" id="prixj" v-model="propriete.prix_jour" required />
                        </div>
                    </div>
                    <div class="inp-div">
                        <label for="description">Description</label><br>
                        <textarea id="description" v-model="propriete.description" style="height:180px;"></textarea>
                    </div>
                </div>



                <div id="popup" v-if="affiche">
            <div id="header-popup">
              <h3>Liste des équipements :</h3>
              <img src="../assets/cross.png" id="cross" @click="togglepopup" />
            </div>
            <div class="equi-container">
              <div v-for="equi in equipementsAvailable" :value="equi.id"
               :key="equi.id"         
               >
                <input
                  type="checkbox"
                  :value="equi.id"
                  v-model="selectedEquipements"
                  />
                {{ equi.intitule }}
              </div>
            </div>
          </div>
            </form>
            <div id="footer"> 
                <button id="btn-enrg" @click="togglepopup"  >Ajouter un équipement</button>
                <div>
                <button id="btn-annuler" @click="annuler()">Annuler</button>
                <button id="btn-enrg" @click="updatePropriete()">Enregistrer</button></div>
            </div>

        </div>

    </div>


</template>



<script>
import axios from 'axios';
export default {

    name: 'EditPropriete',
    data() {
        return {
            propriete: {
        equipements: [],
        nom: "",
        nb_chambres: 0,
        nb_salles_de_bain: 0,
        surface: 0,
        etage: 0,
        prix_jour: 0.0,
        frais_agence: 0.0,
        description: ""
      },
      equipementsAvailable: [],
      selectedEquipements: [],
      affiche: false,
      errorMessage: "",
    };
    },
    created() {
    this.fetchPropriete();this.fetchEquipements();
  },
    methods: {
        fetchPropriete() {
      const id = this.$route.params.id;
      axios
        .get(`proprietes/${id}`)
        .then((response) => {
          this.propriete = response.data.data;
          this.selectedEquipements = this.propriete.equipements.map((e) => e.id);
          console.log("Fetched property:", this.propriete);
        })
        .catch((error) => {
          console.error("Error fetching property data:", error);
        });
    },
    fetchEquipements() {
      axios
        .get("equipements")
        .then((response) => {
          this.equipementsAvailable = response.data.data;
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

    updatePropriete() {
      const id = this.$route.params.id;
      const payload = {
        ...this.propriete,
        equipements: this.selectedEquipements,
      };

      axios
        .put(`proprietes/${id}`, payload)
        .then((response) => {
          console.log("Propriété mise à jour:", response.data);
          console.log(this.propriete.equipements);
          this.$router.push("/app/proprietes"); // Redirige vers la liste
        })
        .catch((error) => {
          console.error("Erreur lors de la mise à jour de la propriété:", error);
        });
    },
    annuler() {
      this.$router.push("/app/proprietes");
    },
        togglepopup(){
            this.affiche = !this.affiche;
        }
    }
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
#second-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
   margin-bottom: 20px;

}

#grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 90px;
    gap: 5px;
    justify-content: center;
    align-items: center;
}
.equi-container {
  display: grid;
  grid-template-columns: 2fr 2fr  2fr 2fr ;
  align-items: flex-start; 
  grid-auto-rows: 30px;
  gap: 10px; /* Optional: Adds space between checkboxes */
}
#popup{
    font-size: small;
    background-color: #ffffff;
   /* position: absolute;
    top:300px;
    left: 380px;*/
    width: 80%;
    border: 2px solid #457B9D;
   padding-left: 20px;   padding-right: 20px;   padding-bottom: 20px;
   border-radius: 10px;
 margin: auto;
 
}

#header-popup{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  
}

#cross{
    width: 20px;  height: 20px;
}
#radios {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

#footer {
    display: flex;
    justify-content: space-between;
    margin-left: 70px;
    margin-right: 95px;
    margin-top: 30px;
    margin-bottom: 20px;
}
h3{
    color: #464F60;
    text-align: start;
   

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
    font-weight:bolder;

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
    margin-right: 5px;
    font-weight:bolder;
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