<template>
    <Navigation/>

    <div class="list">
        <h4 class="title">title</h4>
        <div class="date-number">
            <p class="posting-number">게시글 번호</p>
            <p class="posting-date">게시일</p>
        </div>
		<img src="/src/assets/images/glass.png" alt="test" width="500" height="500" class="posting-img"/>
		
		<div class="content">		
			<h6>content.. </h6>
		</div>
        <div class="btn">
            <button style="margin-right: 10px;">목록보기</button>
            <button style="margin-right: 10px;">글 수정</button>
            <button>글 삭제</button>
        </div>
	</div>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {

    components: {
		Navigation: Navigation,
		
	},
}
</script>

<style>
.list {
	width: 500px;
  	height: 600px;
	padding: 20px;
	margin: auto;
  
}
.title {
    display: flex;
	justify-content: center;
}
.content {
	display: flex;
	justify-content: left;
    border: 1px solid #ccc;
}
.date-number {
    display: flex;
    justify-content: center;
}
.posting-number {
    margin-right: 170px;
}

.posting-date {
    margin-left: 170px;
}

.posting-img {
	display: block;
	margin-left: auto;
	margin-right: auto; 
	
}
.btn {
    display: flex;
	justify-content: center;
    padding: 10px;


}
</style>