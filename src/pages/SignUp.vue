<template>
    <div class="signup-box">
        <h3>회원가입</h3>
        <div class="input-container">
            <div class="id-box">
                ID
                <input type="text">
            </div>
            <div class="password-box">
                Password
                <input type="text">
                
            </div>
            <div class="confirm-password-box">
                Confirm Password
                <input type="text">
            </div>
        </div>
        <div class="btn"> 
            <button class="signup-button">회원등록</button>
            
        </div>
    </div>




    
      <!-- <q-input v-model="password" filled type="password" hint="Password" /> -->

    

    
    
</template>

<script setup lang="ts">


import instance from "./modules/axious.ts;




</script>

<style>
.signup-box {
	justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;    
}


.signup-button {
    margin-top: 10px;
}

.id-box,
.password-box,
.confirm-password-box {
    background-color: #eaeaea;
	border: 1px solid #ccc;
    text-align: right;
}
</style>