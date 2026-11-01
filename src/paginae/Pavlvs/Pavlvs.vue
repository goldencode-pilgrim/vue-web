<!-- Lenguaje ts para el códgio js -->
<script lang="ts" setup>
import { House } from '@lucide/vue';


</script>

<!-- Código html  -->
<template>
    <div class="Pavlvs">
    <RouterLink to="/">
    <House class="icon-home" />
    </RouterLink>

    <header class="titulus">
        <h1>Pavlvs</h1>
        <div id="titulus-Pavlvs" class="titulus-img"></div>
        <p>El predica con tal ardor que enciende los corazones y golpea con  fuerza los espíritus malignos.</p>
    </header>
    </div>
</template>
<!-- Para el códgio css -->
<style scoped>
.pavlvs{
    font-family: Arial, Heveltica, sans-serif;
}
.icon-home{
    color: cornflowerblue;
    width: 3rem;
    height: 3rem;
}
.icon-home:hover{
    color:bisque white;
    background-color: crimson;
}

.titulus-img {
  background-size: 100% 100%;
  background-position: center center;
  background-image: url("../imagines/Pavlvs/St Paul - Private Collection.jpeg");
  min-height: 100vh;
}

.titulus-img:hover {
  background-size: 115% 115%;
}

.titulus > h1 {
  position: absolute;
  top: 63%;
  width: 100%;
  text-align: center;
  font-size: 5rem; 
  color: white;
  pointer-events:none; 
  font-family:roman-antique-italic;
}

.titulus > p {
  position: absolute;
  top: 36%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  pointer-events:none;
  display:none; 
}

@media (min-width: 768px){
    .titulus > p {
        display: block;
    }
}


</style>