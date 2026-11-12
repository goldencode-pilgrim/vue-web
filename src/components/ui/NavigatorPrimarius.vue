<script setup lang="ts">
import { House, Menu } from '@lucide/vue';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Toggle } from '@/components/ui/toggle'
import { onMounted, onUnmounted, ref } from 'vue'; 
import { scrollToSection } from '@/utils/ScrollToSection';

interface MenuItems {
    label: string
    href: string
    onClick?: () => void
}  

interface Props {
    items: MenuItems []
    homeRoute?: string

}

withDefaults(defineProps<Props>(), {
 homeRoute: '/',
})

const videreMenu = ref<boolean>(true)

const handleResize = () => {
  if (window.innerWidth <= 640) {
    videreMenu.value = false
  } else {
    videreMenu.value = true
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})
// Para que la anterior orden deje de ejecutarse al salir de la página.
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>


<template>
    <div>
<Toggle
        class="fixed top-2 right-4 z-50 bg-slate-500 sm:hidden"
        v-model="videreMenu"
        >
        <Menu />
      </Toggle>
      
  <nav class="extra-nav flex items-center justify-between px-4">
    <div class="flex items-center gap-2">
   
      <RouterLink :to="homeRoute" aria-label="Volver a la portada">
        <House class="size-9 text-brand-purple hover:text-brand-purple-dark transition-colors" />
      </RouterLink>
    </div>
    
    <NavigationMenu :class="['max-sm:max-w-full', videreMenu ? '' : 'max-sm:hidden']">
      <!-- Esta etiqueta viene a ser un contenedor para los MenuItems -->
      <NavigationMenuList class="flex-1 sm:flex-none flex-col sm:flex-row justify-end gap-2 sm:gap-4 items-start pt-12 sm:pt-0">  
          <!-- Este es un MenuItem -->
        <NavigationMenuItem v-for="item in items" :key="item.label">
        <a 
         :href="item.href"
         @click.prevent= "item.onClick ? item.onClick() : null"
        >
        <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-base hover:bg-brand-purple hover:text-white transition-colors']">
          {{ item.label}}
          </NavigationMenuLink>
        </a>
    </NavigationMenuItem>
    
  </NavigationMenuList>
  </NavigationMenu>

  </nav>
    </div>
</template>


<style lang="scss" scoped>

.icon-home {
  color: slateblue;
  width: 3rem;
  height: 3rem;

}

.icon-home:hover {
  color: white;
  background-color: slateblue;

}
.extra-nav {
  background-color: rgb(253, 253, 253);
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 1;
}
  @media (min-width: 640px){
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
  }
}

</style>