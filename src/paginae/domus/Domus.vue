<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';

</script>

<template>
  <!-- Este apartado me divide el bloque "fondo-home" que es donde se ubican los links a las otras páginas. -->
  <div class="bg-black flex-gap 4 justify-center ">
  <Button  variant="domus" class="mr-2">
  <RouterLink to='/Pavlvs'>Pavlvs</RouterLink>
  </Button>
  
  
  <Button  variant="domus" class="mr-2">
    <RouterLink to='/Petrvs'>Petrvs</RouterLink>
  </Button>
  
  <Button  variant="domus" class="mr-2">
    <a href='https://catholic.net/'>Catholicnet</a>
  </Button>

<Button variant="domus" class="mr-2" >
<RouterLink to='/dubitatio'>?</RouterLink>
</Button>

  </div>

  <div class ="bg-domus-navy h-screen text-white font-sans text-center flex flex-col items-center justify-center gap-4 fixed w-screen overflow-hidden" >
    
    <img class="absolute opacity-17" src="/imagines/Jesuitasdescalzoslogo.png"/>
    
    <h1 class= "gap-4 justify-center items-center text-5xl md:text-7xl  lg:text-8xl font-bold pb-5 md:pb-20 z-10 transition-all">
      <span class="text-domus-cyan">Diseño</span> Web y
      <br />
      Apps <span class="text-domus-cyan">Interactivas</span>
    </h1>
    <p class="text-lg md:tex-3xl transition-all">
      Enseñando a crear aplicaciones web.
    </p>
  </div>

    
  


    

</template>

<!-- <style scoped> -->
/* TODO ESTO ERA EL CÓDIGO DE DISEÑO CON CSS */
/* Esta orden determina el estilo visual de los objetos "fondo-home".
.fondo-home {
    background-color: rgb(21,21,21);
    height: 100vh;
    color: rgb(24,182,264);
}   
/* Este objeto de cóigo determina el estilo para los objetos tipo botones que sean un objeto tipo "Button". */
/* .botones > Button{
  background-color: rgb(24,182,246);
  margin-right: 0.5rem; 
   ; */
/* } */
/* Este objeto determina un estilo cuando un objeto de la clase "botones" y del tipo "button" se le pasa el cursor por encima. */
  /* .botones > Button:hover{
  background-color: rgba(24,182,246,0.7);
  
   
} */ */
    <!-- /* </style> */ -->

