<template>
	<li class="cartItemLi">
		<div class="cartItemImg">
			<img :src="img"/>
		</div>
		<div class="cartItemInfo">
			<div class="cartItemTitle">
				<p class="itemTitle">产品信息--{{title}}</p>
				<p class="itemProperty">产品属性</p>
			</div>
			<div fixed class="amountWraper">
				<button @click="addcount(id)">+</button>
				<span class="cartItemAmount">数量{{amount}}</span>
				<button @click="cutcount(id)">-</button>	
			</div>
		</div>
	</li>
</template>

<script>
	import {mapMutations} from "vuex"
	export default {
		name:"cartList",
		props:["amount","id","title","price","img"],
		methods:{
			...mapMutations(["addcount","cutcount"])
		},
	}
</script>

<style>
	.cartItemLi{
		width: 50vh;
		min-height: 15vh;
		border: 1px solid greenyellow;
		margin: 2vh auto;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.cartItemLi .cartItemImg{
		width: 16vh;
	}
	.cartItemLi .cartItemImg img{
		width: 100%;
	}
	.cartItemInfo{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
</style>