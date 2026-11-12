<!-- Lenguaje ts para el códgio js -->
<script lang="ts" setup>


import CarrusImaginum from '@/components/CarrusImaginum.vue';
import { scrollToSection } from '@/utils/ScrollToSection';
import { useMouseMotio } from '@/compossables/useMouseMotio';
import NavigatorPrimarius from '@/components/ui/NavigatorPrimarius.vue';
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
// Funció para hacer una animación de scroll suave al hacer click en un enlace de la barra de navegación.


const photos =["pavlvsbarroco", "pavlvsicon","pavlvsrenacimiento","pavlvsflamencvs","pavlvsicon2"]

const {mousePositione, cumMouseMove,cumMouseLeave} = useMouseMotio()
// Estos items hay que colocarlos para que el navegador sepa con los datos que se va onpointerrawupdate, esto para cualquier página que qerramos crear
const Menuitems = [
  {
    label: 'Portada',
    href: '#',
    onClick: () => scrollToSection('#')
  },
  {
    label: 'Viajes',
    href: '#itineraris',
    onClick: () => scrollToSection('#itineraris')
  },
  {
    label: 'Videre',
    href: '#videre',
    onClick: () => scrollToSection('#videre')
  },
  {
    label: 'Contacto',
    href: '#contactus',
    onClick: () => scrollToSection('#contactus')
  },
  
]
</script>

<!-- Código html  -->
<template>
  <div class="Pavluvs">
   <NavigatorPrimarius :items="Menuitems" homeRoute="/" />
    
    </div>




<header class="titulus">
  <h1>Pavlvs</h1>
  <div 
  id="titulus-Pavlvs" 
  class="titulus-img"
  @mousemove="cumMouseMove"
  @mouseleave="cumMouseLeave"
  :style="{
    backgroundPositionX: `calc(50% + ${mousePositione.x}px)`,
    backgroundPositionY: `calc(50% + ${mousePositione.y}px)`,
    transition:'background-position 0,1s ease-out'

  }"
  >
  </div>
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
<section id="contactus" class="w-full py-12 bg-gray-100">

  <div class="container mx-auto max-w-5xl px-4">

    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Contacta con Batman</h2>
          
    <div class="flex flex-col lg:flex-row gap-8 items-center">

            <!-- Mapa de Google Maps -->
      <div class="hidden lg:block w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <div class="aspect-square">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.362755252682!2d-0.3440323!3d39.4837227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60488259073375%3A0xfb410ba707ca33c9!2sUPV%20-%20Facultad%20de%20Bellas%20Artes%20BBAA!5e0!3m2!1ses-419!2ses!4v1794506076402!5m2!1ses-419!2ses"
            class="w-full h-full rounded-lg"
            :style="{ border: 0 }"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
    
        </div>
      </div>

            <!-- Formulario -->
      <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">
        <form  class="space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square">
          <div class="space-y-2">
            <!-- mismo nombre "nomen" para que al clicar en Nombre redirija a la casilla. -->
           <Label for="nomen">Nombre</Label>
           <Input id="nomen" required />

          </div>
                
          <div class="space-y-2">      
         <Label for="cognomen">Apellidos</Label>
           <Input id="cognomen" required />
          </div>

          <div class="space-y-2">

               <Select>
                 <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="apple">
                        Apple
                     </SelectItem>
                     <SelectItem value="banana">
                         Banana
                     </SelectItem>
                     <SelectItem value="blueberry">
                        Blueberry
                     </SelectItem>
                     <SelectItem value="grapes">
                         Grapes
                     </SelectItem>
                     <SelectItem value="pineapple">
                       Pineapple
                     </SelectItem>
                   </SelectContent>
                </Select>

          </div>

          <div class="space-y-2">

            Poner un calendario para la fecha de la misión

          </div>

          Poner un botón para enviar la solicitud
              
        </form>
      </div>
    </div>
  </div>
</section>

<footer class="w-full bg-gray-900 text-gray-300 py-12">
   <div class="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto">

    <div class="space-y-4 text-center md:text-left">

      <h3 class="text-xl font-bold text-white">Información de Contacto</h3>
            
        <div class="space-y-2">
          <p class="flex items-center gap-2 justify-center md:justify-start">

            +1 (555) 123-4567

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">

            batman@wayneenterprises.com

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">

            Wayne Manor, Gotham City

          </p>
        </div>
      </div>

      <!-- Redes sociales -->
      <div class="space-y-4 text-center md:text-left text-gray-400">
        <h3 class="text-xl font-bold text-white">Síguenos</h3>
        <div class="flex gap-8 justify-center">
        
          Icono de X -
          Icono de Instagram -
          Icono de Linkedin - 
          Icono de MessageCircle
              
        </div>
    </div>
  </div>
</footer>

</template>
<!-- Para el códgio css -->
<style scoped>
.pavlvs{
    font-family: Arial, Heveltica, sans-serif;
}


.titulus-img {
  background-size: 100% 100%;
  background-position: center center;
  background-image: url("../imagines/Pavlvs/St Paul - Private Collection.jpeg");
 aspect-ratio: 8/9 ;
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