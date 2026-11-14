<script setup lang="ts">
import {Card,CardContent,} from '@/components/ui/card'
import { ref, computed } from 'vue';
import { characters, type Character } from './data';
import { CopySlash } from '@lucide/vue';
// El componente Character.vue se usará más adelante en la página de detalle (/simpsons/gallery/:id).
// Aquí no se usa todavía: lo comento para que no dé error de "import sin usar".
// import CharacterCard from './Character.vue';

const inPagina =6

const nuncPaginae = ref(1)
// Calcula el total de páginas entre el largo de personajes divido el número de páginas y el resultado redondeado a la AlignHorizontalDistributeCenter. En esete caso (4).
const totalPaginae = Math.ceil(characters.length / inPagina) 

 const listaSimpsons = computed (() => {
    const inicio= (nuncPaginae.value-1) * inPagina
    const fin = inicio + inPagina
    return characters.slice(inicio,fin)
 
  } )

  const ireAdPaginam = (pagina:number) => {
     // Solo aceptamos páginas dentro del rango válido: [1, totalPaginae]
     if (pagina >= 1 && pagina <= totalPaginae) {
       nuncPaginae.value = pagina
     }
  }
// "[...Array(totalPaginae)] calcula el total de números de la página sin tener que escribir manualmente 1 x 1"
const paginaNumeri: number[] = [...Array(totalPaginae)].map((_, i) => i + 1)

</script>



<template>
    <div class="flex flex-col items-center gap-8 w-full max-w-page my-8 mx-auto">
       <div class="text-center">
        <h1 class="font-bold text-xl lg:text-5xl mb-5">
        The Simpsons Quote App
       </h1>
       <p class="mb-5">Click on the quote of your favorite character</p>
       </div>
       <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
          <Card
          v-for="character in listaSimpsons"
          :key="character.id"
          class="cursor-pointer w-[220px] h-[240px] hover:bg-simpsons-red hover:text-white transition-colors"
          >
            <CardContent class="flex h-full flex-col items-center justify-center gap-2 px-2">
             <img
             class="h-[160px] w-[160px] object-cover object-top rounded-t-md border border-black bg-simpsons-yellow"
             :src="`/imagines/simpsons/${character.imago}`"
             :alt="character.nomen"
             />
             <h2 class="font-medium text-lg">{{ character.nomen }}</h2>
            </CardContent>
           </Card>
        </div>
            <div class="flex items-center justify-center gap-2 mt-4">
              <button
              @click="ireAdPaginam(nuncPaginae - 1)"
              :disabled="nuncPaginae == 1"
                :class="['px-4 py-2 rounded-md font-medium transition-colors',
                 nuncPaginae == 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-simpsons-yellow hover:bg-simpsons-red hover:text-white',

                ]" 
                >
                Anterior
                </button>

                <button
                 v-for="pagina in paginaNumeri"
                 @click="ireAdPaginam(pagina)"
                 :class="[
                  'w-10 h-10 rounded-md font-medium transition-colors ',
                  nuncPaginae == pagina
                   ? 'bg-simpsons-red text-white'
                   : 'bg-simpsons-yellow hover:bg-simpsons-red hover:text-white'

                 ]"
                 
                 >
                 {{ pagina }}
                 </button>

                <button
                @click="ireAdPaginam(nuncPaginae + 1)"
                :disabled="nuncPaginae == totalPaginae"
                :class="['px-4 py-2 rounded-md font-medium transition-colors',
                 nuncPaginae == totalPaginae
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-simpsons-yellow hover:bg-simpsons-red hover:text-white',

                ]"
                 >
                Siguiente
                </button>
                </div>
                </div>

</template>


<style scoped>

</style>
