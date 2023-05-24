<template>
	
	<div class="q-pa-md">
		<div class="q-gutter-y-md" style="max-width: 1000px">
			
	
			<q-tabs
			v-model="tab"
			narrow-indicator
			class="bg-purple text-white shadow-2"
			>
			<q-tab name="mails" label="Home" />
			<q-tab name="alarms" label="방명록" />
			<q-tab name="movies" label="admin" />
			</q-tabs>
	
			
		</div>
	</div>
	
  </template>

<script setup lang="ts">
import BaseHeader from '../components/BaseHeader.vue';
import BaseDrawer from '../components/BaseDrawer.vue';
import { ref } from 'vue'

// @Options({
//   components: {
   
//   },
//   setup () {
//     return {
//       tab: ref('mails'),

//     }
//   }
  
// })

</script>

<style scoped>
.q-pa-md {
	display:flex;
	justify-content: center;
	
}
.q-gutter-y-md {
	width: 1000px;
}
</style>
