<template>
	<div class="signInWraper">
		<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<span class="signInButton" @click="toSignIn({username,password})">登录</span>
		<span class="signUpButton" @click="signUp">去注册</span>
	</div>
</template>

<script>
	import {mapMutations} from "vuex" 
	export default {
		name:"signIn",
		data:function(){
			return{
				username:"",
				email:"",
				password:"",
				phone:"",
				defaultName:"home"
			}
		},
		methods:{
			toSignIn(params){
				this.$http.toSignIn(params).then(res=>{ 
					if(res.res_body){
						this.changeState();
//						登录成功后,将用户名与token存在localStorage中
						window.localStorage.setItem("kkusername",res.res_body.data.username);
						window.localStorage.setItem("kktoken",res.res_body.data.token)
//						然后返回到之前的路由,之前的路由命称已经被beforeEach守卫传到this.$route的params中
						this.$router.push({name:this.$route.params.from.name || this.defaultName})
					}
				})
			},
			signUp(){
				this.$router.push("/signUp")
			},
			...mapMutations(["changeState"])
		},
		created(){
			console.log(this.$route)
		}
	}
	
</script>

<style>
	.signInWraper{
		margin-top: 8vh;
		width: 100%;
	}
	.signInButton{
		background-color: #fab3b3;
		display: block;
		color: white;
		height: 5vh;
		width: 80%;
		border-radius: 5vh;
		margin: 0 auto;
		margin-bottom: 2vh;
		line-height:5vh ;
	}
	.signUpButton{
		border: 1px solid #ff2000;
    	color: #f10000;
		display: block;
		height: 5vh;
		width: 80%;
		margin: 0 auto;
		border-radius: 5vh;
		line-height:5vh ;
	}
	
</style>