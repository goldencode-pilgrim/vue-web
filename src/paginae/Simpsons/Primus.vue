<script lang="ts" setup>
import Button from '@/components/ui/button/Button.vue';
import LogoSimpsons from '@/components/ui/LogoSimpsons.vue';

</script>


<template>
    <div class="bg-simpsons-yellow min-h-screen text-center p-4 flex flex-col items-center justify-center">
	 
     <LogoSimpsons estilus="w-[14rem] sm:w-[35rem]"/>

        <h1 class="text-xl my-1 font-medium">
    	Discover some of the most amazing Quotes from The Simpsons
	</h1>
	<div>
    	<strong>This is an unofficial app (even though it looks so cool!)</strong>
	</div>
	<div class="mt-8 flex gap-5">
		<Button variant="tertuarius" size ="elogantis">
      		<RouterLink to="/">Exit</RouterLink>
    	</Button>
    	<Button variant="tertuarius" size ="elogantis">
      		<RouterLink to="/simpsons/about">Enter</RouterLink>
    	</Button>
	</div>
    <div>

      <div class="flex gap-12">
        <img class="object-contain mt-38 hidden md:block" src="/imagines/simpsons/bart.png" width="180px"/>
        <img class="object-contain mt-25 hidden md:block" src="/imagines/simpsons/homer.png"width="195px"/>
        <img class="object-contain mt-30" src="/imagines/simpsons/moe.png"width="220px"/>
      </div>

    </div>
</div>
</template>
