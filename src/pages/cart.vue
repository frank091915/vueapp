<template>
	<div class="cartpage">
	<h2>购物车</h2>		
	<ul class="cartListView">
		<CartList v-for="item in cart" :key="item.id" v-bind="item"></CartList>
	</ul>
	<div class="computedBox" >
		<div class="allSelected">
			<input @click="ifAllselected(defaultAllSelected)" type="checkbox" :checked="defaultAllSelected"/>
			<span >全选</span>
		</div>
		<div class="computedInfo">
			<div class="totalPrice">
				<p ><span class="totalPriceSpan1">总价：</span><span class="totalPriceSpan2">￥{{(getTotalPrice).toFixed(2)}}</span> </p>
				<p>满减</p>
			</div>
			<div class="goPay" ><a href="">去结算</a><span>({{getTotalAmount}}件)</span> </div>
		</div>
			
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
		methods:{
			...mapMutations(["addcount","cutcount","addtolocal","ifAllselected"]),
			...mapActions(["asynchadd"])
		},
		data:function(){
			return{

			}
		},
		computed:{
//			从store中获取的数结构计算属性中
			...mapState(["cart"]),
			...mapGetters(["getTotalAmount","getTotalPrice","defaultAllSelected"])
		},
		created(){

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
.computedBox{
	position: fixed;
	bottom: 0;
	height: 7vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	z-index: 99;
	background: hsla(0,0%,100%,.95);
}
.computedBox .allSelected{
	width: 5vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.allSelected span{
	color: #999;
}
.computedBox .allSelected input{
	width: 2.5vh;
	height: 2.5vh;
	border-radius: 50%;
}
.computedInfo{
	width: 36vh;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.goPay{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 16vh;
	color: white;
	background: #e4393c;
	height: 100%;
	display: ;
}
.goPay a{
	color: white;
}
.goPay span{
	font-size: 1.8vh;
}
.totalPrice{
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.totalPriceSpan2{
	color:#e93b3d ;
	font-weight: 600;
}
.totalPrice p:nth-child(2){
	color: #999;
	font-size: 1.8vh;
}
.totalPriceSpan1{
	font-weight: 600;
}
</style>