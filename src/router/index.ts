import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../paginae/domus/Domus.vue";
import Pavlvs from "../paginae/Pavlvs/Pavlvs.vue"; 
import Petrvs from "../paginae/Petrvs/Petrvs.vue";
import dubitatio from "../paginae/responsum/Responsum.vue";
export const router = createRouter ({
    //historio almacena el  historial de navegación url
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Domus
      },
      {
        path: '/Pavlvs',
        name: 'Pavlvs',
        component: Pavlvs
      },
      {
        path: '/Petrvs',
        name: 'Petrvs',
        component: Petrvs
      },
      {
        path: '/dubitatio',
        name: 'dubitatio',
        component: dubitatio
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: "/"
      }
    ]
})