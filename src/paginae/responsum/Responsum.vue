<script setup lang="ts">
import { getYesNO, type YesNOTipus } from '@/actions/getYesNo.action';
import { useRouter } from 'vue-router';
import { onMounted, ref,  } from 'vue';
import { Loader2 } from '@lucide/vue';


const quaestio = history.state.quaestio as string || 'No hya pregunta'
const router = useRouter()
const YesNo = ref<YesNOTipus>({
    anwser: '',
    image: ''
})



const estLoading = ref<boolean>(true)

onMounted(async () => {
  try {
    const responsum = await getYesNO()
    YesNo.value = responsum
    estLoading.value = false
  } catch (error) {
    console.log(error)
    estLoading.value =false
  }
})

</script> 


<template>
    <div class="text-center">
     <!-- Mientras la API no responde -->
     <div v-if="estLoading">
        <img class="h-screen w-screen absolute top-0 left-0 object-cover" src="/imagines/github.jpg" alt="" />
	<div class="absolute w-screen h-screen top-0 left-0 bg-black opacity-40"></div>

	<div class="relative mt-[180px]">
		<p class="text-4xl text-white font-medium mt-14">{{ quaestio }}</p> 
		  <div class="flex items-center justify-center mt-60">
            <Loader2 class="w-18 h-18 text-white animate-spin"/>
          </div>


		<button 
        class="fixed top-5 right-5 w-12 h-12 bg-gray-700 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-600 transition-colors"
        @click="router.push('/')"
        >
			<span class="text-xl text-gray-300"> ➔ </span>
		</button>
	</div>
     </div>
     <!-- Respuesta lista -->
     <div v-else>
	   <img v-if="YesNo.image === ''"class="h-screen w-screen absolute top-0 left-0 object-cover" 
       />
       <img v-else class="h-screen w-screen absolute top-0 left-0 object-cover"
        :src="YesNo.image" />
      <div class="relative mt-[180px]">
        <p class="text-4xl text-white font.mendium mt-14">{{ quaestio }}</p>
        <p class="text-8xl text-white font-bold mt-60">
            {{YesNo.anwser === 'yes' ? 'Sis' :'Non' }}
        </p>
      </div>


     </div>
    </div>
</template>