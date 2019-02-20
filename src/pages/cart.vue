<template>
	<div class="cartpage">
	<h2>购物车</h2>		
	<ul class="cartListView">
		<CartList v-for="item in cart" :key="item.id" v-bind="item"></CartList>
	</ul>
	<div class="computedBox" >
			总计 数量 {{getTotalAmount}} 总价 {{getTotalPrice}}
	</div>

	</div>

</template>

<script>
//	把store中的属性全拿过来,然后在结构赋值给组件的属性
	import {mapMutations,mapActions,mapState,mapGetters} from "vuex"
//	引入cartlist组件
	import CartList from "@/components/cartList"
	export default {
		name:"cart",
		components:{
			CartList
		},
		created(){
			console.log(this)
		},
		methods:{
			...mapMutations(["addcount","cutcount"]),
			...mapActions(["asynchadd"])
		},
		data:function(){
			return{

			}
		},
		computed:{
//			从store中获取的数结构计算属性中
			...mapState(["cart"]),
			...mapGetters(["getTotalAmount","getTotalPrice"])
		}
	}
</script>

<style>
.cartpage{
	margin-top: 6vh;
}
.cartListView{
	min-height: 80vh;
}
</style>