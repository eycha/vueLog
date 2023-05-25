<template>
    <div class="posting-box">
        <h4>Posting</h4>
        
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
                counter maxlength="100"
                
                :shadow-text="textareaShadowText"
                @keydown="processTextareaFill"
                @focus="processTextareaFill"
            />
        </div>
        <div class="btn-container">
            <button style="width:50px; height: 30px;">등록</button>
            <q-input
            @update:model-value="val => { file = val[0] }"
            filled
            color="purple-12" 
            type="file"
            hint="이미지파일 업로드"

        />
        </div>
        
    </div>
    

  

      
      
   
  
  
  
</template>

<script>
import { ref } from 'vue'

export default {
    setup () {
    return {
      file: ref(null),
      
    }
  }

}
</script>

<style>

.posting-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
}

.title-container {
    
    
}

.content-container {
    
}

.btn-container {
    display: flex;
    margin-top: 10px;
    

}

</style>