<template>
	
	<div class="list">
		<p class="posting-number">게시글 번호</p>
		<img src="/src/assets/images/glass.png" alt="test" width="300" height="300" class="posting-img"/>
		<h5>title</h5>
		<div class="content">		
			<p>content..</p>
			<button type="button" @click="editModalViewed = true ; $emit(editModalViewed)">수정하기</button>
		</div>

		<posting-edit-modal v-if="editModalViewed" @close="editModalViewed = false" />
	</div>
	

</template>

<script>
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
};
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
