<template>
    <div id="holder">
        <div id="container">

            <div>
                <h1>Nouvelle Propriété</h1>
            </div>
            <form @submit.prevent="handleAjoutLoc">
                <div id="grid">
                    <div class="inp-div">
                        <label for="nomLoc">Nom Propriété</label><br>
                        <input type="text" id="nomLoc" v-model="nomLoc" required />
                    </div>
                    <div class="inp-div">
                        <label for="nomProp">Chambre</label><br>
                        <input type="text" id="chambre" v-model="chambre" required />

                    </div>
                    <div class="inp-div">
                        <label for="salledebain">Salle de Bain</label><br>
                        <input type="text" id="salledebain" v-model="salledebain" required />
                    </div>
                    <div class="inp-div">
                        <label for="surface">Surface</label><br>
                        <input type="text" id="surface" v-model="surface" required />
                    </div>
                </div>
                <div id="second-container">
                    <div>
                        <div class="inp-div">
                            <label for="etage">Étage</label><br>
                            <div id="radios"><input type="radio" value="0">0<input type="radio" value="1"
                                    style="margin-left: 40px;">1 <input type="radio" value="2"
                                    style="margin-left: 40px;">2<input type="radio" value="3"
                                    style="margin-left: 40px;">3
                            </div>
                        </div>


                        <div class="inp-div">
                            <label for="fraisAgence">Frais Agence</label><br>
                            <input type="text" id="fraisAgence" v-model="fraisAgence" required />
                        </div>
                        <div class="inp-div">
                            <label for="prixj">Prix/jour</label><br>
                            <input type="text" id="prixj" v-model="prixj" required />
                        </div>
                    </div>
                    <div class="inp-div">
                        <label for="description">Description</label><br>
                        <textarea id="description" v-model="description" style="height:180px;"></textarea>
                    </div>
                </div>



                <div id="popup"  v-if="affiche == true">
                 <div id="header-popup"> <h3>Liste des équipements : </h3> <img src="../assets/cross.png" id="cross"  @click="togglepopup"></div> 
                    <div id="gridequipement">
                        <input type="checkbox"> eqipement a
                        <input type="checkbox"> eqipement a      <input type="checkbox"> eqipement a
                        <input type="checkbox"> eqipement a      <input type="checkbox"> eqipement a
                        <input type="checkbox"> eqipement a      <input type="checkbox"> eqipement a
                   <input type="checkbox"> eqipement a 

                </div>
                </div>
            </form>
            <div id="footer"> 
                <button id="btn-enrg" @click="togglepopup"  >Ajouter un équipement</button>
                <div>
                <button id="btn-annuler" @click="annuler()">Annuler</button>
                <button id="btn-enrg">Enregistrer</button></div>
            </div>

        </div>

    </div>


</template>



<script>
export default {
    name: 'nouv-loc',
    data() {
        return {
            affiche: false,
            errorMessage: '',   
        };
    },
    methods: {
        handleAjoutLoc() { },
        annuler() { },
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
#gridequipement{
    display: grid;
    row-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr   ;
    align-items: flex-start
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