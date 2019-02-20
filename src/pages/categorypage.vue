<template>
	<div class="categorywraper">
		
		<ul class="asidelist">
		 <router-link 
		 	v-for="item in asidecategory" 
		 	:key="item.id" tag="li" 
		 	:to="`/categorypage/${item.id}`">
		 	{{item.title}}</router-link>
		</ul>
		<div class="subcategory">
			<img class="headimg"  src="http://img13.360buyimg.com/mcoss/jfs/t1/20167/38/5982/51492/5c46af5dE7736fc55/b27a8ed4e61b2291.png"/>
			<h2>分类</h2>	
			<ul>
				<li> </li>
			</ul>
			<router-view name="subcategory"></router-view>
		</div>
	</div>

</template>

<script>	
	export default {
		name:"products",
		created(){
			this.$http.getcategorynav().then(res=>{
				this.asidecategory=res.res_body.data;
//				第一次点开分类页面,默认选中第一栏
				this.$nextTick(()=>{
//					细节,再刷新当前页面时,还是默认选中之前已选中的选项,然后再从其他页面跳转过来时,默认选中第一项，用到了简介的es6的解构赋值
					const {categoryid=this.asidecategory[0].id}=this.$route.params;
					this.$router.push(`/categorypage/${categoryid}`)
				})
				
		})
		},
		data:function(){
			return {
				asidecategory:[]
			}
		}
	}
</script>

<style>
	.categorywraper{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 6vh;
		height: 80vh;
	}
	.asidelist{
		min-height:60vh;
		width: 10vh;
	}
	.asidelist:first-child{
		background-color: white;
	}
	.subcategory{
		flex: 1;
	}
	.router-link-exact-active.router-link-active{
		background-color: white;
		color: red;
	}
	.asidelist li{
		color: #333;
		background-color: #f8f8f8; 	
		height: 4.5vh;
		line-height: 4.5vh;
	}
	.headimg{
		width: 100%;
		height: 10vh;
	}

</style>