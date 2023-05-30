<template>
  <div class="q-pa-md">
		<div class="q-gutter-y-md" style="max-width: 1000px">
			
	
			<q-tabs
			narrow-indicator
			class="bg-purple text-white shadow-2"
			>
			<q-tab name="home" label="Home" @click="tabClick('home')"/>
			<q-tab name="geust" label="방명록" @click="tabClick('guest')"/>
			<q-tab name="admin" label="admin" @click="tabClick('admin')"/>
			</q-tabs>
	
			
		</div>
	</div>
</template>

<script setup lang="ts">

import {useRouter} from 'vue-router';

const router = useRouter();

const tabClick = (tabName: string) => {
	if (tabName == 'guest') {
		router.push('/guest');
	}
	if (tabName == 'admin') {
		router.push('/admin');
	}
	if (tabName == 'home') {
		router.push('/index');
	}
}

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