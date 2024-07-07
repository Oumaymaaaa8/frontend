<template>
    <div id="holder">
    <div id="container">

        <div>
            <h1>Nouvelle Location</h1>
        </div>
        <form @submit.prevent="handleAjoutLoc">
            <div id="grid">
                <div class="inp-div">
                    <label for="nomLoc">Nom Locataire :</label><br>
                    <input type="text" id="nomLoc" v-model="nomLoc" required />
                </div>
                <div class="inp-div">
                    <label for="nomProp">Nom Propriété :</label><br>
                    <select id="nomProp" v-model="nomProp" required>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>

                    </select>
                </div>
                <div class="inp-div">
                    <label for="datedeb">Date Début :</label><br>
                    <input type="date" id="datedeb" v-model="datedeb" required />
                </div>
                <div class="inp-div">
                    <label for="datefin">Date Fin :</label><br>
                    <input type="date" id="datefin" v-model="datefin" required />
                </div>
                <div class="inp-div">
                    <label for="tauxrem">Taux de remise :</label><br>
                    <input type="text" id="tauxrem" v-model="tauxrem" required />
                </div>
                <div class="inp-div">
                    <label for="avance">Avance:</label><br>
                    <input type="text" id="avance" v-model="avance" required />
                </div>

                <div class="inp-div">
                    <label for="total">Montant Total:</label><br>
                    <input type="text" id="total" v-model="total" required />
                </div>
                <div class="inp-div">
                    <label for="description">Description:</label><br>
                    <textarea id="description" v-model="description"></textarea>
                </div>


            </div>
        </form>
        <div id ="footer">
            <button id="btn-annuler" @click="annuler()" >Annuler</button>
            <button id="btn-enrg">Enregistrer</button>
        </div>

    </div>

</div>


</template>



<script>
export default {
    name: 'nouv-loc',
    data() {
        return {

            errorMessage: '',
        };
    },
    methods: {
        handleAjoutLoc(){},
        annuler(){},
    }
};
</script>

<style scoped>
#holder {
    display: flex;
    justify-content: center;
margin-top: 80px;}
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