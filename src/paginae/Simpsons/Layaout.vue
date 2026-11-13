<script setup lang="ts">
import LogoSimpsons from '@/components/ui/LogoSimpsons.vue';


</script>

<template>

   <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
     <header class="bg-simpsons-yellow w-full border border-black">

    <div class="flex flex-col md:flex-row justify-between items-center p-3 mx-auto max-w-page md:px-20 ">
        <LogoSimpsons estilus="w-[8rem] h-auto"  />
      
     <div>
          <RouterLink 
          to="/simpsons/gallery"
          active-class="font-bold">
        Characters
      </RouterLink>
      <RouterLink 
      to="/simpsons/about"
      active-class="font-bold">
        About
      </RouterLink>
      <Button variant="tertiarius"size="elogantis" class="bg-simpsons-red hover:bg-simpsons-yellow focus:bg-simpsons-yellow">
        <RouterLink to="/">
          Exit
        </RouterLink>
      </Button>
    </div>

   
     </div>
     
     </header>
     <main>
     <RouterView/>
     </main>
     <footer class="bg-simpsons-yellow text-center py-6 w-full border border-black">
        <div>
	     <strong>All Rights Reserved</strong> - Mr. Matt Groening - 1989-2023
         </div>

         <small>
	     This app was done by Fernando Cordón
         </small>
     </footer>
   </div>

   

</template>


<style scoped>

</style>