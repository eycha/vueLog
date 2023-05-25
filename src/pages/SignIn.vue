<template>
    <div class="login-box">
        <h3>Login</h3>
        <div class="id-box">
            <img src="/src/assets/images/human.png" alt="id" width="20" height="20">
            <input type="text">
        </div>
        <div class="password-box">
            <img src="/src/assets/images/key.png" alt="password" width="20" height="20">
            <input type="text">
        </div>
        <div class="btn"> 
            <button class="login-button">로그인</button>
            <button class="signup-button">회원가입</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.login-box {
    /* display: flex; */
	/* flex-direction: column; */
	/* justify-content: center;
    width: 300px;
  	height: 600px;
    padding: 20px;
	margin: auto; */

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    
}


.btn {
    margin-top: 10px;
    margin-left: 20px;
    display: flex;
}

.signup-button{
    margin-left: 10px;
}

.password-box,
.id-box  {
    background-color: #eaeaea;
	border: 1px solid #ccc;
}
    
</style>