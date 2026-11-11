<!-- Lenguaje ts para el códgio js -->
<script lang="ts" setup>
import { House } from '@lucide/vue';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import CarrusImaginum from '@/components/CarrusImaginum.vue';
import { scrollToSection } from '@/utils/ScrollToSection';
import { ref } from 'vue';


// Funció para hacer una animación de scroll suave al hacer click en un enlace de la barra de navegación.


const photos =["pavlvsbarroco", "pavlvsicon","pavlvsrenacimiento","pavlvsflamencvs","pavlvsicon2"]

const videreMenu = ref<boolean>(true)


</script>

<!-- Código html  -->
<template>
  <div class="Pavluvs">
  <nav class="extra-nav flex items-center justify-between px-4">
    <RouterLink to="/" aria-label="Volver a la portada">
      <House class="size-9 text-brand-purple hover:text-brand-purple-dark transition-colors" />
    </RouterLink>
    
    <NavigationMenu>
      <!-- Esta etiqueta viene a ser un contenedor para los MenuItems -->
      <NavigationMenuList class="flex-col sm:flex-row justify-end gap-2 sm:gap-4">  
          <!-- Este es un MenuItem -->
        <NavigationMenuItem>
        <a href="#" @click.prevent="scrollToSection('#')">
        <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-base hover:bg-brand-purple hover:text-white transition-colors']">
          Portada 
        </NavigationMenuLink>
        </a>
        </NavigationMenuItem>
        <!-- Aquí termina el MenuItem -->
         
        <NavigationMenuItem>
          <!-- El emplear # en el href es para los enlaces dentro de las secciones de la propia página. -->
        <a href="#itineraris"  @click.prevent="scrollToSection('#itineraris')">
        <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-base hover:bg-brand-purple hover:text-white transition-colors']">
          Viajes
          </NavigationMenuLink>
        </a>
        </NavigationMenuItem>
  
        <NavigationMenuItem>
        <a href="#videre"  @click.prevent="scrollToSection('#videre')">
        <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-base hover:bg-brand-purple hover:text-white transition-colors']">
          Imágenes
          </NavigationMenuLink>
        </a>
        </NavigationMenuItem>
  
  <NavigationMenuItem>
        <a href="#contactus" @click.prevent="scrollToSection('#contactus')">
        <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-base hover:bg-brand-purple hover:text-white transition-colors']">
          Contacto
        </NavigationMenuLink>
      </a>
    </NavigationMenuItem>
    
  </NavigationMenuList>
  </NavigationMenu>

  </nav>
    
    </div>




<header class="titulus">
  <h1>Pavlvs</h1>
  <div id="titulus-Pavlvs" class="titulus-img"></div>
  <p>Él predica con tal ardor que enciende los corazones y golpea con  fuerza los espíritus malignos.</p>
</header>

<section id="itineraris">
  <div class="itineraris-titulus">
    <h1>Viajes misioneros de Pablo</h1>
  </div>
  <div class="primo-itineraris">
    <div class="item unus">
        <div class="notitia">
          <h2>Primer viaje misionero (aprox. 46-48 d. C.)</h2>
          <p><strong> •Acompañantes:</strong> Bernabé y Juan Marcos.
            <strong>  •Ruta:</strong> Salió de Antioquía de Siria hacia la isla de Chipre y diversas regiones de Asia Menor (como Perge, Antioquía de Pisidia, Iconio, Listra y Derbe), regresando finalmente a Antioquía.</p>

        </div>
        <img src="/imagines/Pavlvs/viajesanpablo1.png"/>
      </div>

      <div class="item duo">
        <div class="notitia">
          <h2>Segundo viaje misionero (ca. 49-52 d. C.)</h2>
          <p><strong>• Acompañantes:</strong> Junto a Silas (y más tarde Timoteo).<strong> •Ruta:</strong> Atravesó Cilicia, Frigia, Galacia y cruzó a Europa, fundando comunidades en Filipos, Tesalónica, Berea, Atenas y Corinto.</p>
        </div>
        <img src="/imagines/Pavlvs/viajesanpablo2.png"/>
      </div>
      
      <div class="item tribus">
        <div class="notitia">
          <h2>Tercer viaje misionero (ca. 53–57 d. C.)</h2>
          <p><strong>• Acompañantes:</strong> Pablo, junto con Timoteo y otros compañeros.<strong> •Ruta:</strong> Centrado en Asia Menor y Grecia, con una larga estancia de casi tres años en Éfeso, además de pasar por Macedonia y Corinto antes de regresar hacia Jerusalén.</p>
        </div>
        <small>Último viaje misionero antes del cautiverio y martirio.</small>
        <img src="/imagines/Pavlvs/viajesanpablo3.png"/>
      </div>
    </div>

 </section>

<section id="videre" class="flex w-full justify-center min-h-[60vh] mt-9 lg:min-h-[95vh] items-center bg-pink-950">
<!-- <Carousel class="w-full max-w-xs"> -->
  <!-- La sección llama al componente "<CarrusImaginum>" ahorrando espacio de código y tiempo -->
 <CarrusImaginum
  :photos="photos"
   basePath="/imagines/Pavlvs"
  :autoplayDelay="1500"
/>

</section>

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

/* Barra de navegación blanca a todo el ancho, como en la imagen de referencia. */
.extra-nav {
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 3.5rem;
  z-index: 20;
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
  color: rgb(255, 255, 255);
  pointer-events:none;
  display:none; 
}

@media (min-width: 768px){
    .titulus > p {
        display: block;
    }
}

#itineraris {
  max-width: 510px;
  margin: 0 auto 4rem;   /* 0 arriba · auto a los lados · 4rem abajo */
  padding: 4rem 0;       /* antes: 4-rem 0 (inválido) */
  display: flex;
  flex-direction: column;
}

.itineraris > h1 {
display: flex;
 order: 1;
 flex-direction: column;
}

.itineraris-titulus {
  height: 5.5rem; /* 88px */
  font-size: 2rem;
  position: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  padding: 1.rem 0;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
}

.unus {
  background-color: rgba(208, 151, 151, 0.2) ;
  order: 1;
}

.duo {
  background-color: rgba(226, 197, 197, 0.8);
  order: 2;
} 

.tribus {
  background-color: rgba(191, 181, 181, 0.8);
  order: 3;
}

.notitia{
  width: 90%;
  display:flex;
  flex-direction: column;
  align-items: center;
}

.item > img{
 width: 500px;
}

.notitia > small {
  font-weight: bold;
  margin-top: 0.5 rem;
  padding: 1.5rem;

}
 /* Título de la noticia */
.notitia > h2 {
 font-size: 1.3rem; 
 font-weight: 600;
 color: rgba(0, 0, 0, 0.9);
} 

@media (min-width: 640px) {
  #itineraris {
    max-width: 576px;
  }
}

@media (min-width: 768px) {
  #itineraris {
    max-width: 900px;
  }

  .item{
    flex-direction: row;
    height: 320px;
    margin-top: 10px;
  }
  .item > img {
    height: 320px;
  width: 500px;
  }

  .notitia {
    width: 75%;
  }
 .duo > img {
  order: -1
 }
}

@media (min-width: 1024px){
  #itineraris{
    display: flex;
    max-width: 1280px;
    flex-direction: column;
  } 
  .notitia {
    align-items: center;
  }
  .notitia > small {
    order:5;
    align-items: start;
  }
}
</style>