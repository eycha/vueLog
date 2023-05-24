<template>
	<div class="list">
		<h5>게시글 번호</h5>
		<img src="/src/assets/images/glass.png" alt="test" />

		<h5>title</h5>
		<div class="content">
			<p>content..</p>
			<button>수정하기</button>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.list {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.content {
	display: flex;
	justify-content: center;
}
</style>
