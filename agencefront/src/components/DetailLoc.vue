<template>
    <div id="holder">
    <div id="container">

        <div>
            <h1>Détails sur Location</h1>
        </div>
            <div id="grid">
                <div class="inp-div">
                    <label for="nomLoc">Nom Locataire :</label><br>
                   <p  id="nomLoc"> {{nomLoc }}</p>
                </div>
                <div class="inp-div">
                    <label for="nomProp">Nom Propriété :</label><br>
                    <p id="">{{nomProp}}</p>
                </div>
                <div class="inp-div">
                    <label for="datedeb">Date Début :</label><br>
                    <p id="datedeb" >{{datedeb}}</p>
                </div>
                <div class="inp-div">
                    <label for="datefin">Date Fin :</label><br>
               <p id="datefin" >{{datefin}}</p>
                </div>
                <div class="inp-div">
                    <label for="tauxrem">Taux de remise :</label><br>
                    <p id="tauxrem" >{{tauxrem}}</p>
                </div>
                <div class="inp-div">
                    <label for="avance">Avance:</label><br>
                    <p id="avance" >{{avance}}</p>

                </div>

                <div class="inp-div">
                    <label for="total">Montant Total:</label><br>
               <p id="total" >{{total}}</p>
                </div>
              

            </div>
            <div class="inp-div">
                    <label for="description">Description:</label><br>
              <p id="description" >{{description}}</p>
                </div>

        <div id ="footer">
            <button id="btn-annuler" @click="annuler()" >retour</button>
            <button id="btn-fact">Facturer</button>
        </div>

    </div>

</div>


</template>



<script>
export default {
    name: 'detail-loc',
    data() {
        return {
            nomLoc:'cc',
            nomProp:'aa',
            datedeb:'aa',
            datefin: 'aa',
            tauxrem: 'aa',
            avance:'aa',
            total:'aa',
            description:'aa',
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