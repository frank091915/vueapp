<template>
	<div class="subcategorywraper">
		<h2 >{{this.$route.params.categoryid}}类</h2>
		<ul>
			<li class="itemLi" v-for="item in subcategory" :key="item.id"
				to="/">
				<img :src="item.img"/>
				<p class="title">{{item.title}}</p>
				<p class="price">{{item.price}}</p>
				<mt-button class="cartbutton" type="primary" @click="addcart(item)">加入购物车</mt-button>
			</li>
		</ul>
	</div>

</template>

<script>
	import {mapMutations} from "vuex"
//	创建一个缓存对象,用来储存相应数据,每次路由参数有变化时,先查找是否存在重复请求,有的话,直接拿来用,没有的话,就向服务器发送请求
    const cache={};
	export default {
		name:"subcategory",
		methods:{
//			根据缓存来判断判断是否再发起请求
			getsubcategory(categoryid){
				if(Object.keys(cache).includes(categoryid)){
					this.subcategory = cache[categoryid]
				}else{
						this.$http.getsubcategory(categoryid).then(res=> {
						this.subcategory = res.data
						cache[categoryid]=res.data
					}
					)	
				}
			},
			...mapMutations(["addcart"])
		},
		data:function(){
			return {
				subcategory:[]
			}
		},
//		通过监听$route对象的变化来触发方法
//		watch:{
//			$route(to,from){
//				console.log(to.params.categoryid)
//			}
//		}


beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm=>{
    	vm.getsubcategory(1)
    })
},


//通过组件复用前的beforeUpDate守卫来触发方法

		beforeRouteUpdate(to,from,next){
			this.getsubcategory(to.params.categoryid)			
			next()
		}
	}
</script>

<style>
	.itemLi{
		height: 30vh;
	}
	.itemLi img{
		height: 19vh;
		width: 18vh;
	}
	.title{
		margin-top: 1vh;
	}
	.price{
		margin-top: 0.8vh;
	}
	.cartbutton{
		height: 3vh;
		font-size: 1em;
		line-height: 1em;
	}
</style>