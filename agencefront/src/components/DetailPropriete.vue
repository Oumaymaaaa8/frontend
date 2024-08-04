<template>
    <div id="holder">
        <div id="container">

            <div>
                <h1>Détails sur  Propriété</h1>
            </div>
           
                <div id="grid">
                    <div class="inp-div">
                        <label for="nomprop">Nom Propriété :</label>
                        <p>{{ propriete.nom }}</p>
                    </div>
                    <div class="inp-div">
                        <label for="chambre">Chambre :</label>
                        <p>{{ propriete.nb_chambres }}</p></div>

                   
                    <div class="inp-div">
                        <label for="salledebain">Salle de Bain :</label>
                        <p>{{propriete.nb_salles_de_bain}}</p></div>
                    <div class="inp-div">
                        <label for="surface">Surface :</label>
                        <p>{{propriete.surface}}</p>
                    </div>
                </div>
                <div id="second-container">
                    <div>
                        <div class="inp-div">
                            <label for="etage">Étage :</label>
                            <p>{{ propriete.etage }}</p>
                        </div>


                        <div class="inp-div">
                            <label for="fraisAgence">Frais Agence :</label>
                            <p>{{propriete.frais_agence}}</p>
                        </div>
                        <div class="inp-div">
                            <label for="prixj">Prix/jour :</label>
                            <p>{{propriete.prix_jour  }}</p>
                        </div>
                    </div>
                    <div class="inp-div">
                        <label for="description">Description :</label>
                        <p>{{propriete.description}}</p>
                    </div>
                </div> <div id="liste">         <label for="equipements">équipements  :</label>        <ul v-for="equip in equipements" :key="equip.id"><li>{{ equip.intitule }}</li></ul>
                </div>
                   
                
      
             <div id="footer"> <button id="btn-retour">Retour</button>    </div>    
        </div>
      
    
    </div>


</template>



<script>
import axios from 'axios';

export default {
    name: 'DetailPropriete',
    data() {
        return {

     propriete: {
        nom: '',
        nb_chambres: 0,
        nb_salles_de_bain: 0,
        surface: 0,
        etage: 0,
        prix_jour: 0.0,
        equipements : {intitule : 'pas encore ajouté'},

      },
        };
    },
    mounted() {
    this.fetchPropriete();
  },
    methods: {
        annuler() { },
        
        fetchPropriete() {
        const id = this.$route.params.id;
         axios
        .get(`proprietes/${id}`)
        .then(response => {
            const data = response.data.data; // Extract the data part of the response
          this.propriete = data;
          this.equipements = data.equipements // Assign the equipements
          console.log('Fetched property:', this.propriete);
          console.log('Fetched equipements:', this.equipements);
          console.log('Fetched property:', this.propriete);
        })
        .catch(error => {
          console.error('Error fetching property data:', error);
        });
       

    }}}
</script>

<style scoped>
#holder {
    display: flex;
    justify-content: center;
}
#liste{
display: flex;
justify-content:start; align-content: flex-start;
flex-direction: column;
flex-wrap: wrap;
margin-left: 5em;
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

label {
    font-weight: bold;
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
    margin-left: 70px;
   

}
h1 {
    color: #457B9D;
    text-align: start;
    margin-left: 70px;
    margin-top: 50px;
}




#btn-retour {
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
    font-weight:bold;
    font-size: medium;
 
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



</style>