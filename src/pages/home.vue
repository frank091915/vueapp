<template>
	<div class="homewraper">
		<h2>首页</h2>
		<div >
			<mt-swipe class="swipe" :auto="4000">
			  <mt-swipe-item v-for="item in swiperimgs " :key="item.id">
			  	<img :src="item.url" />
			  </mt-swipe-item>

			</mt-swipe>	
		</div>

	</div>
</template>

<script>

	import { Swipe, SwipeItem } from 'mint-ui';
	import Vue from 'vue';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	export default {
		name:"home",
		data:function(){
			return {
				swiperimgs:[]
			}
		},
		created(){
			console.dir(Vue)
			this.$http.getswiperimgs().then(res=>{
				console.log(res)
				this.swiperimgs=res.res_body.data;
			})
		},
	}
</script>

<style>
	.swipe{
		height: 150px;
		
	}
	#swiper1{
		background-color: royalblue;
	}
		#swiper2{
		background-color: greenyellow;
	}
		#swiper3{
		background-color: peachpuff;
	}
	.mint-swipe-item>img{
		width: 100%;
		height: 100%;
	}
	.homewraper{
		margin-top: 6vh;
	}
</style>