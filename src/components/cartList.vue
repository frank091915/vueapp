<template>
	<li class="cartItemLi">
		<div class="cartItemRight">
			<div class="toSelect">	
				<input type="checkbox"  class="toCheckIpunt" />
			</div>
			<div class="cartItemImg">
				<img :src="img"/>
			</div>
		</div>
		<div class="cartItemInfo">
			<div class="cartItemTitle">
				<p class="itemTitle">{{title}}</p>
				<p class="itemProperty">{{description}}</p>
			</div>
			<div fixed class="amountWraper">				
				<span @click="addcount(id)" class="tobebold">+</span>
				<span class="cartItemAmount">{{amount}}</span>
				<span @click="cutcount(id)" class="tobebold">-</span>					
			</div>
			<div class="toDelete">
				<span class="priceSpan">￥{{price}}</span>
				<span @click="deleteitem(id)" class="todeletespan">删除</span>
			</div>
		</div>
	</li>
</template>

<script>
	import {mapMutations} from "vuex"
	export default {
		name:"cartList",
		props:["amount","id","title","price","img","description"],
		methods:{
			...mapMutations(["addcount","cutcount","deleteitem"])
		},
	}
</script>

<style>
	.cartItemLi{
		width: 50vh;
		height: 16vh;
		margin: 1vh auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 5vh;
		align-items: center;
	}
	.cartItemRight{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.cartItemRight input{
		margin-right: 2vh;
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
	.itemProperty{
		margin-top:1vh;
		color: #999;
		font-size: 1.8vh
	}
	.amountWraper{
		background-color: #f7f7f7;
		color: #999;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items:center ;
		margin: 1vh 0;
	}
	.amountWraper span.tobebold{
		display: inline-block;
		font-size: 4.3vh;
		text-align: center;
		font-weight: 100;
		width: 33.33%;

	}
	.priceSpan{
		color: #e93b3d;
	}
	.todeletespan{
		color: #999;
		font-size: 1.8vh
	}
	.toDelete{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.toCheckIpunt{
		width: 2.5vh;
		height: 2.5vh;
	}
</style>