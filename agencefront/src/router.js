import { createRouter, createWebHashHistory } from "vue-router";
import Signin from "./components/signin.vue";
import Signup from "./components/Signup.vue" ; 
const routes = [
    {path : '/login' , component : Signin },
     {path : '/signup' , component : Signup}
]
const router = createRouter({
    history : createWebHashHistory(),
    routes,
})


export default router;