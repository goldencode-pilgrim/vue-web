<script setup lang="ts">
import {Card,CardContent,} from '@/components/ui/card'
import { ref } from 'vue';
import { characters, type Character } from './data';
// El componente Character.vue se usará más adelante en la página de detalle (/simpsons/gallery/:id).
// Aquí no se usa todavía: lo comento para que no dé error de "import sin usar".
// import CharacterCard from './Character.vue';

const listaSimpsons = ref<Character[]>(characters.slice(0,6))
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

       </div>

</template>


<style scoped>

</style>
