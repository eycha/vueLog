<template>
    <div class="signup-box">
        <h3>회원가입</h3>
        <div class="input-container">
            <div class="id-box">
                ID
                <input type="text" v-model="id">
            </div>
            <div class="password-box">
                Password
                <input type="text" v-model="password">
                
            </div>
            <div class="confirm-password-box">
                Confirm Password
                <input type="text" v-model="passwordConfirmed">
            </div>
        </div>
        <div class="btn"> 
            <button class="signup-button" @click="register">회원등록</button>
            
        </div>
    </div>




    
      <!-- <q-input v-model="password" filled type="password" hint="Password" /> -->

    

    
    
</template>

<script>
import instance from "@/modules/axiosTest";
import requests from "@/modules/request";




export default {

    data() {
        return {
        id: '',
        password: '',
        passwordConfirmed: '',
        };
    },

        

    register() {
    //   console.log('ID:', this.id);
    //   console.log('Password:', this.password);
    //   console.log('Confirm Password:', this.passwordConfirmed);

      const accountData = {
        userId: this.id,
        userPw: this.password,
      };

      instance.post(requests.signup, accountData).then(res=>{
        console.log(res);
    });

    },
}








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