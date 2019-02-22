<template>
	<div class="signInWraper">
		<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
		<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
		<span @click="toSignUp({username,password})">注册</span>
	</div>
</template>

<script>
	export default {
		name:"signUp",
		data:function(){
			return{
				username:"",
				email:"",
				password:"",
				phone:""
			}
		},
		methods:{
				toSignUp(params){
				this.$http.toSignUp(params).then(res=>{ 
					if(res.res_body){
						this.$router.push({name:"signIn",params:{from:""}})
					}
				})
			}
			
		}
	}
</script>

<style>
</style>