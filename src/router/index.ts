import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../paginae/domus/Domus.vue";
import Pavlvs from "../paginae/Pavlvs/Pavlvs.vue"; 
import Primus from "../paginae/Simpsons/Primus.vue";
import dubitatio from "../paginae/responsum/Responsum.vue";
import Layaout from "@/paginae/Simpsons/Layaout.vue";
import Circa from "@/paginae/Simpsons/Circa.vue";
import Colectione from "@/paginae/Simpsons/Colectione.vue";
import Character from "@/paginae/Simpsons/Character.vue";
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
        children: [
          {
           path: "", //simpons
           name: 'simpsons',
           component: Primus

          },

          {
          path: "about",
          component: Layaout,
          children: [
            {
               path: "", //simpons/about
           name: 'simpsons-about',
           component: Circa
            }
          ]
          },
           {
          path: "gallery",
          component: Layaout,
          children: [
            {
               path: "", 
           name: 'simpsons-characters', //simpsons/gallery
           component: Colectione
            },
            {
              // Los ":" en el nombre del path indican que es una dirección dinámica, que cambiará.
              path:':id', //simpsons/gallery/[homer, etc.]
              name: 'simpsons-character',
              component: Character
            }
          ]
        }
        ]
         
        
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