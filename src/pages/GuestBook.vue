<template>
    <Navigation/>
    <div class="guest-container">
        <h4>방명록 페이지</h4>
        <div class="q-pa-md">
        <q-table

        flat bordered
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
        :rows="rows"
        :columns="columns"
        row-key="name"
        style="width:1000px"
        
        />
        </div>
        <div class="q-mt-md">
        Selected: {{ JSON.stringify(selected) }}
        </div>
        <button>삭제</button>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import { ref } from 'vue'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'No',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'ID', align: 'center', label: 'ID', field: 'ID', sortable: true },
  { name: '작성자', label: '작성자', field: '작성자', sortable: true },
  
  
]

const rows = [
  {
    name: 1,
    ID: 'tlc1',
    PASSWORD: '1234',
  },
  {
    name: 2,
    ID: 'tlc2',
    PASSWORD: '1234',
  },
  
]

const selected = ref([])

export default {

    components: {
		Navigation: Navigation,
		
	},
    setup () {
    
    return {
      columns,
      rows,
      selected,
    }
  }
}

    

</script>

<style>
.guest-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>