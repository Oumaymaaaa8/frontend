<template>

    <div id="header">
        <h2 id="titre" >Liste des Propriétés</h2> <button id="ajout-loc">Nouvelle Propriété<img src="../assets/more.png" width="20px" style="margin-left: 10px;"> </button>
    </div>
    
    <table>
          <thead>
            <tr>
              <th>Nom Propriété</th>
              <th>Chambre</th>
              <th>Salle de Bain</th><th>Surface</th><th>Étage</th><th>Prix/Jour</th><th style="visibility: hidden;"><button id="action-button"><img src="../assets/edit-text.png" width="25px"></button></th><th style="visibility: hidden;"><button id="action-button"><img src="../assets/delete.png"  width="25px"></button></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prop in Propriete" :key="prop.nom">            
                    <td>{{ prop.nom }}</td>
                    <td>{{ prop.chambre }}</td>
                    <td>{{ prop.salleBain }} </td>
                    <td>{{ prop.surface }} </td>
                    <td>{{ prop.etage }}</td>
                    <td>{{ prop.prix }}</td>
                    <td><button id="action-button"><img src="../assets/edit-text.png" width="25px"></button></td>
                 <td><button id="action-button"><img src="../assets/delete.png"  width="25px"></button></td>
            </tr>   
          </tbody>
        </table>
    
    
    </template>
    <script>
    export default {
        name: 'liste-proprietes',
        data() {
            return {
           Propriete : [
            {nom : 'a' ,chambre: '2',salleBain:'2', surface:'250',etage:'1', prix:'100'},
            {nom : 'b' ,chambre: '2',salleBain:'2', surface:'250',etage:'1', prix:'100'},

           ]
            };
        },
        /*
        mounted() {
       axios.get('https://api.example.com/users')
        .then(response => {
        this.Locations = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },*/
        methods: {
         
        }
    };
    </script>
    <style scoped>
    #header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 100px;
        margin-right: 100px;
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
    </style>