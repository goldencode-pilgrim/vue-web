import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../paginae/domus/Domus.vue";
import Pavlvs from "../paginae/Pavlvs/Pavlvs.vue"; 
import Primus from "../paginae/Simpsons/Primus.vue";
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
        path: '/Simpsons',
        name: 'Simpsons',
        component: Primus
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