<template>
	
	<div class="list">
		<p class="posting-number">게시글 번호</p>
		<img src="/src/assets/images/glass.png" alt="test" width="300" height="300" class="posting-img"/>
		<h5>title</h5>
		<div class="content">		
			<p>content..</p>
			<!-- <button type="button" @click="editModalViewed = true; $emit=(editModalViewed,true)" >수정하기</button> -->
			<button type="button" @click="isEditModalViewed" >수정하기</button>
		</div>

		<!-- <posting-edit-modal v-if="editModalViewed" @close="editModalViewed = false" /> -->
	</div>
	

</template>

<!-- <script>
import PostingEditModal from "@/components/PostingEditModal.vue";

export default {

	data() {
		return {
			editModalViewed: false,
			
		};
	},
	components: {
		PostingEditModal,
		
	},
	methods : {
		isEditModalViewed : () => {
			editModalViewed = true; 
			emi
		}
	}
	
};
</script> -->
<script setup lang="ts">
import PostingEditModal from "@/components/PostingEditModal.vue";
import {ref} from 'vue'
const props = defineProps({
	contentOpen : {
		type:Boolean
	}
})
const editModalViewed = ref<boolean>(false)
const contentOpenValue =ref<boolean>(props.contentOpen)
const emit = defineEmits(['click'])
const isEditModalViewed = () => {
	editModalViewed.value = true; 
	contentOpenValue.value = false;
	emit('click' ,contentOpenValue.value, editModalViewed.value)
}

</script>


<style scoped>
.list {
	/* display: flex; */
	/* flex-direction: column; */
	/* justify-content: center; */
	width: 500px;
  	height: 600px;
	/* background-color: #eaeaea; */
	/* border: 1px solid #ccc; */
	padding: 20px;
	margin: auto;
  
}
.content {
	display: flex;
	justify-content: left;
}

.posting-number {
	text-align: right;

}
.posting-img {
	display: block;
	margin-left: auto;
	margin-right: auto; 
	
}







</style>
