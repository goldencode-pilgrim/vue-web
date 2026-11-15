import { defineStore } from "pinia"
import { ref, computed } from "vue"
import {characters, type Character} from "@/paginae/Simpsons/data"
export const useFavoritosStore = defineStore('Favoritos',() => {
  const favoritos = ref<Character[]>([
     characters.find(char=> char.id === 0)! 
  ])

  return {
    favoritos,
    totalFavoritos: computed (() => favoritos.value.length), 
  }
})