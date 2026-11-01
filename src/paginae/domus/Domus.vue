<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';

</script>

<template>
  <!-- Este apartado me divide el bloque "fondo-home" que es donde se ubican los links a las otras páginas. -->
  <div class = "fondo-home">
    <h1>
      <span>Diseño</span> Web y
      <br />
      Apps <span>Interactivas</span>
    </h1>

    <div class="botones">
    <Button  variant="default">
    <RouterLink to='/Pavlvs'>Pavlvs</RouterLink>
    </Button>
    
      <Button  variant="default">
    <RouterLink to='/dubitatio'>?</RouterLink>
    </Button>

      <Button  variant="default">
    <RouterLink to='/Petrvs'>Petrvs</RouterLink>
    </Button>
    
      <Button  variant="default">
    <a href='https://catholic.net/'>Catholicnet</a>
    </Button>

    </div>
    
  </div>

</template>

<style scoped>
/* Esta orden determina el estilo visual de los objetos "fondo-home". */
.fondo-home {
    background-color: rgb(21,21,21);
    height: 100vh;
    color: rgb(24,182,264);
}   
/* Este objeto de cóigo determina el estilo para los objetos tipo botones que sean un objeto tipo "Button". */
.botones > Button{
  background-color: rgb(24,182,246);
  margin-right: 0.5rem; 
   ;
}
/* Este objeto determina un estilo cuando un objeto de la clase "botones" y del tipo "button" se le pasa el cursor por encima. */
  .botones > Button:hover{
  background-color: rgba(24,182,246,0.7);
  
   
}
    </style>

