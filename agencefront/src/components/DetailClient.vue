<template>
    <div id="holder">
        <div id="container">
            <div>
                <h1>Détails sur client</h1>
            </div>
            <div id="grid">
                <div class="inp-div">
                    <label for="nom">Nom client :</label><br>
                    <p id="nom">{{ client.nom }}</p>
                </div>
                <div class="inp-div">
                    <label for="prenom">Prenom client :</label><br>
                    <p id="prenom">{{ client.prenom }}</p>
                </div>
                <div class="inp-div">
                    <label for="cin">Cin :</label><br>
                    <p id="cin">{{ client.cin }}</p>
                </div>
                <div class="inp-div">
                    <label for="passeport">passeport :</label><br>
                    <p id="passeport">{{ client.passeport }}</p>
                </div>
                <div class="inp-div">
                    <label for="date_delivrance">date delivrance :</label><br>
                    <p id="date_delivrance">{{ client.date_delivrance }}</p>
                </div>
                <div class="inp-div">
                    <label for="lieu_delivrance">lieu delivrance :</label><br>
                    <p id="lieu_delivrance">{{ client.lieu_delivrance }}</p>
                </div>
               
            </div>
          
            <div id="footer">
                <button id="btn-annuler" @click="retour()">Retour</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'DetailClient',
    data() {
        return {
            client: {
        nom: '',
        prenon: '',
        cin: '',
        passeport: '',
        date_delivrance: '',
        lieu_delivrance:','
      },
    };
        
    },
    mounted() {
        this.fetchClient(); // Appel de la fonction pour récupérer les données lors de l'initialisation du composant
    },
    methods: {
        fetchClient() {
            const id = this.$route.params.id;

            axios
                .get(`clients/${id}`)
                .then((response) => {
                    console.log('Réponse du serveur:', response);
                    this.client = response.data.data; 
                })
                .catch((error) => {
                    console.error(
                        "Il y a eu une erreur lors de la récupération du client !",
                        error
                    );
                    console.log("Détails de l'erreur:", error.response);
                    // Afficher un message d'erreur ou une notification à l'utilisateur
                });
        },
      
        retour() {
            // Ajoutez la logique de retour
            console.log("Retour à la page précédente");
        },
      
    }
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
    margin-top: 30px;
    margin-bottom: 20px;
}
h1{
    color: #457B9D;
    text-align: start;
    margin-left: 70px;
    margin-top: 50px;
}

label {
    font-weight: bold;
}
#btn-fact{ 
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
  font-weight: 700;

}
#btn-annuler{ 
  align-self: center;
  background-color: #ffffff;
  border-color:#457B9D;
  color: #464F60;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 700;
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
margin-left: 70px;
color:#464F60;

}
p{
    color: #464F60;
    font-size: small;
    margin-top: -10px;
}


.error {
    color: red;
    text-align: center;
}
</style>