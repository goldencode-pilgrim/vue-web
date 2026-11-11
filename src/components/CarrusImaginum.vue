
<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { Card, CardContent } from '@/components/ui/card'

import Autoplay from 'embla-carousel-autoplay'

// Propiedades del padre para el hijo, las que tienen "?" son opcionales, sino es establece nada, se aplica un valor predefinido.
interface Props{
    // lista de fotos
    photos: string[] 
    // url de las fotos
    basePath: string
    autoplayDelay?: number
    loop?: boolean
    dragFree?: boolean
}
// Esta función pasa al componente hijo las propiedades del padre con "defineProps<Props>()"y con "const props = withDefaults" predefine los valores para las propiedades opcionales.
const props = withDefaults(defineProps<Props>(),{

    autoplayDelay: 2000,
    loop: true,
    dragFree: true
  
})


</script>


<template>
  <Carousel
class="w-full max-w-md md:max-w-0.5xl lg:max-w-0.05xl "
 :opts="{
 dragFree: props.dragFree,
 loop: props.loop
 }"
    :plugins="[Autoplay({
      delay: props.autoplayDelay,
    })]"
>
    <CarouselContent>
      <CarouselItem v-for="(photo, index) in props.photos" :key="index">
        <div class="p-1">
          <Card class="bg-pink-950 border-none" >
            <CardContent class="flex aspect-3/4 items-center justify-center p-6">
              <img 
              :src="`${props.basePath}/${photo}.jpg`"
              class="w-full h-full object-cover"
              :alt="`Imagen ${index + 1} de Sanctvs Pavlvs`"
              />
            </CardContent>
            </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class=" hidden md:flex bg-pink-950 text-white " />
    <CarouselNext class=" hidden md:flex  bg-pink-950 text-white " />
  </Carousel>


</template>
    


<style scoped></style>