<template>
    <div id="holder">
        <div id="container">

            <div>
                <h1>Détails sur  Propriété</h1>
            </div>
           
                <div id="grid">
                    <div class="inp-div">
                        <label for="nomprop">Nom Propriété :</label>
                        <p>{{ nomprop }}</p>
                    </div>
                    <div class="inp-div">
                        <label for="chambre">Chambre :</label>
                        <p>{{ chambre }}</p></div>

                   
                    <div class="inp-div">
                        <label for="salledebain">Salle de Bain :</label>
                        <p>{{salledebain}}</p></div>
                    <div class="inp-div">
                        <label for="surface">Surface :</label>
                        <p>{{surface}}</p>
                    </div>
                </div>
                <div id="second-container">
                    <div>
                        <div class="inp-div">
                            <label for="etage">Étage :</label>
                            <p>{{ etage }}</p>
                        </div>


                        <div class="inp-div">
                            <label for="fraisAgence">Frais Agence :</label>
                            <p>{{fraisAgence }}</p>
                        </div>
                        <div class="inp-div">
                            <label for="prixj">Prix/jour :</label>
                            <p>{{prixj  }}</p>
                        </div>
                    </div>
                    <div class="inp-div">
                        <label for="description">Description :</label>
                        <p>{{description}}</p>
                    </div>
                </div>



                <div >
                 <div> <h3>Liste des équipements : </h3> </div> 
                    <div id="equip">
                    <p>équipement</p>
                    <p>équipement</p>
                    <p>équipement</p>
                    <p>équipement</p>
                    <p>équipement</p>


                </div> 
                </div>
      
             <div id="footer"> <button id="btn-retour">Retour</button>    </div>    
        </div>
      
    
    </div>


</template>



<script>
export default {
    name: 'nouv-prop',
    data() {
        return {

            nomprop: 'nom', 
            chambre :'4',
            salledebain:'5',
            surface:'500',
            fraisAgence:'400',
            prixj:'500dt',
            etage:'1',
            description :'Morbi in quam quis nulla aliquam volutpat.Donec dignissim dui ut arcu luctus, eu efficitur ex luctus.',
            affiche: false,
            errorMessage: '',   
        };
    },
    methods: {
        handleAjoutLoc() { },
        annuler() { },
       
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
#equip{
    display: grid;
    row-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr ;
    margin-bottom: 20px
   
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