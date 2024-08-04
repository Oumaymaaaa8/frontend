import { createRouter, createWebHashHistory } from "vue-router";
import Signin from "./components/signin.vue";
import Signup from "./components/Signup.vue";
import NouvLoc from "./components/NouvLoc.vue";
import DetailLocation from "./components/DetailLocation.vue";
import ListeLocations from "./components/ListeLocations.vue";
import ListeProprietes from "./components/ListeProprietes.vue";
import NouvellePropriete from "./components/NouvellePropriete.vue";
import DetailProp from "./components/DetailPropriete.vue";
import EditPropriete from "./components/EditPropriete.vue";
import EditLocation from "./components/EditLocation.vue";

const routes = [
    {
        path: '/',
        component: () => import('./AuthLayout.vue'), // Layout pour authentification
        children: [
            { path: 'login', component: Signin },
            { path: 'signup', component: Signup },
        ]
    },
    {
        path: '/app',
        component: () => import('./MainLayout.vue'), // Layout pour l'application principale
        children: [
            { path: 'NouvelleLocation', component: NouvLoc ,name:'NouvelleLocation'},
            { path: '/app/locations/:id/edit',  component: EditLocation, name: 'EditLocation' },
            { path: '/app/locations/:id', component: DetailLocation, name: 'DetailLocation' },
            { path: 'locations', component: ListeLocations },

            { path: '/app/proprietes/:id', component: DetailProp , name: 'DetailPropriete' },
            { path: 'proprietes', component: ListeProprietes },
            { path: 'NouvellePropriete', component: NouvellePropriete },
            { path: '/app/proprietes/:id/edit',  component: EditPropriete, name: 'EditPropriete' },

        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
