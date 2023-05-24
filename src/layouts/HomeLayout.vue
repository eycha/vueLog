<template>
	<Navigation/>
	<div class="search">
		<img src="/src/assets/images/glass.png" alt="img" width="20" height="20">
		<input type="text" name="titleSearch" id="" style="width: 200px; height: 30px">
		<button type="button">글쓰기</button>
		<!-- <div class="postingBtn">
			<div class="q-pa-md q-gutter-sm">
				<q-btn color="purple" label="글쓰기" style="width: 100px; height: 30px"/>
			</div>
		</div> -->
	</div>
	
	<div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
	  color="purple"
      :max="5"
      direction-links
    />
  </div>

</template>

<script lang="ts">
import Navigation from '../components/Navigation.vue';

export default {
	name: 'HomeLayout',
	data() {
		return {

		}
	},
	components: {
		Navigation : Navigation,
    
    
  },
}

</script>

<style scoped>
.search {
	display:flex;
	justify-content: center;
	
}



</style>
