<template>
	<Navigation />
	<div class="guest-container">
		<h4>방명록 페이지</h4>
		<div class="q-pa-md">
			<q-table
				flat
				bordered
				:selected-rows-label="getSelectedString"
				selection="single"
				v-model:selected="selected"
				:rows="rows"
				:columns="columns"
				row-key="name"
				style="width: 1000px"
			/>
		</div>
		<div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
		<div class="btn">
			<button style="margin-right: 20px">글쓰기</button>
			<button style="margin-right: 20px">수정</button>
			<button>삭제</button>
		</div>
	</div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import { ref } from 'vue';

const columns = [
	{
		name: 'name',
		required: true,
		label: 'No',
		align: 'left',
		field: (row) => row.name,
		format: (val) => `${val}`,
		sortable: true,
	},

	{ name: 'writer', label: '작성자', field: 'writer', sortable: true },
	{ name: 'content', label: '내용', field: 'content', sortable: true },
	{ name: 'date', label: '게시일', field: 'date', sortable: true },
];

const rows = [
	{
		name: 1,
		writer: 'tlc1',
		content: '안녕하세요 감사해요 잘있어요 다시만나요~ 아침해가 뜨면~ 매일 같은 사람들과 ~ 또 다시 새로운 하루 일을 시작해~~',
		date: '2023-06-15',
	},
	{
		name: 2,
		writer: 'tlc2',
		content: 'Hi,Hi',
		date: '2023-06-16',
	},
];

const selected = ref([]);

export default {
	components: {
		Navigation: Navigation,
	},
	setup() {
		return {
			columns,
			rows,
			selected,
		};
	},
};
</script>

<style>
.guest-container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
