<template>
	<div class="posting-box">
		<h4>Posting</h4>
		<button class="backBtn" @click="backPage()">Back</button>
		<div class="title-container">
			<q-input square filled v-model="text" label="Title" color="purple-12" style="min-width: 500px" />
		</div>

		<div class="content-container">
			<q-input
				v-model="textareaModel"
				filled
				clearable
				type="textarea"
				color="purple-12"
				label="Content"
				style="min-width: 500px"
				counter
				maxlength="100"
				:shadow-text="textareaShadowText"
				@keydown="processTextareaFill"
				@focus="processTextareaFill"
			/>
		</div>
		<div class="btn-container">
			<button style="width: 50px; height: 30px" @click="submitForm">등록</button>

			<q-input
				@update:model-value="
					(val) => {
						file = val[0];
					}
				"
				filled
				color="purple-12"
				type="file"
				hint="이미지파일 업로드"
			/>
		</div>
	</div>
</template>

<template>
	<div class="posting-box">
		<h4>Posting</h4>
		<button class="backBtn" @click="backPage()">Back</button>
		<div class="title-container">
			<q-input square filled v-model="text" label="Title" color="purple-12" style="min-width: 500px" />
		</div>

		<div class="content-container">
			<q-input
				v-model="textareaModel"
				filled
				clearable
				type="textarea"
				color="purple-12"
				label="Content"
				style="min-width: 500px"
				counter
				maxlength="100"
				:shadow-text="textareaShadowText"
				@keydown="processTextareaFill"
				@focus="processTextareaFill"
			/>
		</div>
		<div class="btn-container">
			<button style="width: 50px; height: 30px">등록</button>

			<q-input
				@update:model-value="
					(val) => {
						file = val[0];
					}
				"
				filled
				color="purple-12"
				type="file"
				hint="이미지파일 업로드"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios'; // axios를 import 해주세요

import { useRouter } from 'vue-router';

const router = useRouter();

const text = ref('');
const textareaModel = ref('');
const textareaShadowText = ref('');
const file = ref(null);

const backPage = () => {
	router.go(0);
};

const processTextareaFill = () => {
	textareaShadowText.value = textareaModel.value.length + '/100';
};

const submitForm = async () => {
	try {
		const formData = new FormData();
		formData.append('title', text.value);
		formData.append('content', textareaModel.value);
		// formData.append('file', file.value);

		// 아래 URL은 실제 서버 API 엔드포인트로 수정해야 합니다.
		const response = await axios.post('https://your-api-url.com/post', formData);

		// 성공적으로 서버에 요청을 보냈을 때의 처리 로직
		console.log('Success:', response.data);

		// 여기에서 적절한 리다이렉션 등을 처리할 수 있습니다.
	} catch (error) {
		// 에러가 발생했을 때의 처리 로직
		console.error('Error:', error);
	}
};
</script>

<style>
.posting-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;
	width: 700px;
	height: 1400px;
	margin: auto;
	background-color: #eaeaea;
	border: 1px solid #ccc;
	box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
}

.btn-container {
	display: flex;
	margin-top: 10px;
}

.backBtn {
	margin-bottom: 15px;
	margin-left: 450px;
}
</style>
