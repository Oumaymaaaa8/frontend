// router.js
import { createRouter, createWebHashHistory } from "vue-router";
import Signin from "./components/signin.vue";
import Signup from "./components/Signup.vue";
import NouvelleLocation from "./components/NouvLoc.vue";
import DetailLocation from "./components/DetailLocation.vue";
import ListeLocations from "./components/ListeLocations.vue";
import ListeProprietes from "./components/ListeProprietes.vue";
import NouvellePropriete from "./components/NouvellePropriete.vue";
import DetailProp from "./components/DetailPropriete.vue";
import EditPropriete from "./components/EditPropriete.vue";
import EditLocation from "./components/EditLocation.vue";
import AjoutClient from "./components/AjoutClient.vue";
import DetailClient from "./components/DetailClient.vue";
import EditClient from "./components/Editclient.vue";
import ListeClients from "./components/ListeClients.vue";
import NotFound from "./components/NotFound.vue"; // Import the NotFound component

import { isAuthenticated } from "./auth.js"; // Import authentication check
import Equipements from "./components/Equipements.vue";

const routes = [
  {
    path: "/",
    component: () => import("./AuthLayout.vue"), // Layout for authentication
    children: [
      { path: "login", component: Signin, name: "Signin" },
      { path: "register", component: Signup, name: "Signup" },
    ],
  },
  {
    path: "/app",
    component: () => import("./MainLayout.vue"), // Main application layout
    children: [
      { path: "NouvelleLocation", component: NouvelleLocation, name: "NouvelleLocation" },
      { path: "locations/:id/edit", component: EditLocation, name: "EditLocation" },
      { path: "locations/:id", component: DetailLocation, name: "DetailLocation" },
      { path: "locations", component: ListeLocations, name: "ListeLocations" },
      { path: "proprietes/:id", component: DetailProp, name: "DetailPropriete" },
      { path: "proprietes", component: ListeProprietes, name: "ListeProprietes" },
      { path: "nouvelle-propriete", component: NouvellePropriete, name: "NouvellePropriete" },
      { path: "proprietes/:id/edit", component: EditPropriete, name: "EditPropriete" },
      { path: "clients/:id", component: DetailClient, name: "DetailClient" },
      { path: "clients", component: ListeClients, name: "ListeClients" },
      { path: "ajout-client", component: AjoutClient, name: "AjoutClient" },
      { path: "clients/:id/edit", component: EditClient, name: "EditClient" },
      { path: "Equipements", component: Equipements},

    ],
    meta: { requiresAuth: true }, // Add metadata to indicate the need for authentication
  },
  // Fallback route for undefined paths
  { path: "/:catchAll(.*)", component: NotFound, name: "NotFound" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Global Navigation Guard
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      // If not authenticated, redirect to login page
      next({ name: "Signin" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
