<template>
	
	<Navigation />
	<PostingModal v-if="isModalViewed"/>
	<PostingList v-if="contentOpen"  @click="modalsOpen"/>
    <PostingEditModal v-if="editModalViewed"/>
	<div class="content-container" v-if="contentOpen">
		<div class="search">
			<img src="/src/assets/images/glass.png" alt="img" width="20" height="20" />
			<input type="text" name="titleSearch" id="" style="width: 200px; height: 30px" />
			<button type="button" @click="isModalViewed = true; contentOpen = false" >글쓰기</button>
			
		</div>

		<div class="q-pa-lg flex flex-center">
			<q-pagination v-model="current" color="purple" :max="5" direction-links />
		</div>
	</div>
</template>

<script lang="ts">
import Navigation from '../components/Navigation.vue';
import PostingList from '../components/PostingList.vue';
import PostingModal from '../components/PostingModal.vue';
import PostingEditModal from '../components/PostingEditModal.vue';


export default {
	name: 'HomeLayout',
	data() {
		return {
			isModalViewed: false,
			contentOpen: true,
			editModalViewed : false,
			view: false,
		};
	},
	components: {
		Navigation: Navigation,
		PostingList: PostingList,
		PostingModal: PostingModal,
		PostingEditModal: PostingEditModal,
	},
	methods: {
		modalsOpen (contentOpen:boolean, editModalViewed: boolean) {
			this.contentOpen = contentOpen;
			this.editModalViewed = editModalViewed
		}

		
	}

	
};
</script>

<style scoped>
.search {
	display: flex;
	justify-content: center;
}
</style>
