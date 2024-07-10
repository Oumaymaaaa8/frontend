<template>

<div id="header">
    <h2 id="titre" >Liste des Locations</h2> <button id="ajout-loc"> Nouvelle location<img src="../assets/more.png" width="20px" style="margin-left: 10px;"> </button>
</div>

<table>
      <thead>
        <tr>
          <th>Réference</th>
          <th>Propriété</th>
          <th>Client</th><th>Date fin</th><th>Date Début</th><th>Montant Total</th><th>Agent</th><th style="visibility: hidden;"><button id="action-button"><img src="../assets/edit-text.png" width="25px"></button></th><th style="visibility: hidden;"><button id="action-button"><img src="../assets/delete.png"  width="25px"></button></th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="loc in Locations" :key="loc.reference">
          <td>{{loc.reference}}</td>
            <td>{{loc.propriete}}</td>
                <td>{{loc.client}} </td>
                <td>{{ loc.datefin }} </td>
                <td>{{ loc.datedeb }}</td>
                <td>{{loc.montantTotal}}</td>
                <td>{{loc.agent}}</td>
                <td><button id="action-button"><img src="../assets/edit-text.png" width="25px"></button></td>
             <td><button id="action-button"><img src="../assets/delete.png"  width="25px"></button></td>
        </tr>   
      </tbody>
    </table>


</template>
<script>
export default {
    name: 'liste-locations',
    data() {
        return {
          Locations : [
          {reference : 'a' ,propriete: '2',client:'2', datefin:'250',datedeb:'1', montantTotal:'100', agent : 'omnia'}],
        };
    },
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
    padding-left:40px;
    padding-right: 10px;

}
</style>