<template>
	<div class="signInWraper">
		<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
		<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
		<span @click="toSignIn({username,password})">登录</span>
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
				phone:""
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
						this.$router.push({name:this.$route.params.from.name})
					}
				})
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
	}
</style>