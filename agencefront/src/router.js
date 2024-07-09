import { createRouter, createWebHashHistory } from "vue-router";
import Signin from "./components/signin.vue";
import Signup from "./components/Signup.vue" ; 
import NouvLoc from "./components/NouvLoc.vue";
import DetailLoc from "./components/DetailLoc.vue";
import ListeLocations from "./components/ListeLocations.vue";
import ListeProprietes from "./components/ListeProprietes.vue";
const routes = [
    {path : '/login' , component : Signin },
     {path : '/signup' , component : Signup},
     {path : '/nouvloc' , component : NouvLoc},
     {path : '/detailLoc', component : DetailLoc},
     {path: '/locs' , component : ListeLocations} , 

     {path : '/props', component: ListeProprietes},
]
const router = createRouter({
    history : createWebHashHistory(),
    routes,
})


export default router;