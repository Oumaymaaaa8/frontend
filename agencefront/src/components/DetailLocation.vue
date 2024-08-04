<template>
    <div id="holder">
        <div id="container">
            <div>
                <h1>Détails sur Location</h1>
            </div>
            <div id="grid">
                <div class="inp-div">
                    <label for="nomLoc">Nom Locataire :</label><br>
                    <p id="nomLoc">{{ location.client.nom }}</p>
                </div>
                <div class="inp-div">
                    <label for="nomProp">Nom Propriété :</label><br>
                    <p id="nomProp">{{ location.propriete.nom }}</p>
                </div>
                <div class="inp-div">
                    <label for="datedeb">Date Début :</label><br>
                    <p id="datedeb">{{ location.date_debut }}</p>
                </div>
                <div class="inp-div">
                    <label for="datefin">Date Fin :</label><br>
                    <p id="datefin">{{ location.date_fin }}</p>
                </div>
                <div class="inp-div">
                    <label for="tauxrem">Taux de remise :</label><br>
                    <p id="tauxrem">{{ location.taux_remise }}</p>
                </div>
                <div class="inp-div">
                    <label for="avance">Avance :</label><br>
                    <p id="avance">{{ location.avance }}</p>
                </div>
                <div class="inp-div">
                    <label for="total">Montant Total :</label><br>
                    <p id="total">{{ total }}</p>
                </div>
            </div>
            <div class="inp-div">
                <label for="description">Description :</label><br>
                <p id="description">{{ location.description }}</p>
            </div>

            <div id="footer">
                <button id="btn-annuler" @click="retour()">Retour</button>
                <button id="btn-fact" @click="facturer()">Facturer</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'DetailLocation',
    data() {
        return {
            location: {
        client: { nom: '' },
        propriete: { nom: '' },
        date_debut: '',
        date_fin: '',
        taux_remise: 0,
        avance: 0,
        description: ''
      },
      total: 0 // Ajout d'une propriété pour le montant total
    };
        
    },
    mounted() {
        this.fetchLocation(); // Appel de la fonction pour récupérer les données lors de l'initialisation du composant
    },
    methods: {
        fetchLocation() {
            const id = this.$route.params.id;

            axios
                .get(`locations/${id}`)
                .then((response) => {
                    console.log('Réponse du serveur:', response);
                    this.location = response.data.data; // Assurez-vous que les données sont bien assignées à `location`
                    this.calculateTotal(); // Appel d'une fonction pour calculer le montant total si nécessaire
                })
                .catch((error) => {
                    console.error(
                        "Il y a eu une erreur lors de la récupération de la location!",
                        error
                    );
                    console.log("Détails de l'erreur:", error.response);
                    // Afficher un message d'erreur ou une notification à l'utilisateur
                });
        },
        calculateTotal() {
            if (this.location) {
                // Exemple de calcul du montant total en utilisant un taux de remise
                const remise = this.location.taux_remise || 0;
                const avance = this.location.avance || 0;
                // Assurez-vous de récupérer le montant total ou de calculer le montant total à partir des données disponibles.
                const montantDeBase = 1000; // Remplacez par la logique correcte de calcul
                this.total = montantDeBase * (1 - remise / 100) - avance;
            }
        },
        retour() {
            // Ajoutez la logique de retour
            console.log("Retour à la page précédente");
            this.$router.push('/previous-page');
        },
        facturer() {
            // Ajoutez la logique pour générer une facture
            console.log("Générer la facture pour cette location");
        }
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