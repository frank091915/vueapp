import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//导出store
export default new Vuex.Store({
  state: {
    count: 0,
    cart:[{amount:1,id:666,title:"六六六",price:666,img:"http://s11.mogucdn.com/mlcdn/c45406/190218_01ek21ghj3clgld58a3g4h6j6k56b_800x800.jpg_320x999.jpg"},
    {amount:2,id:888,title:"八八八",price:888,img:"http://s11.mogucdn.com/mlcdn/c45406/190217_2lfhejck8e4k251f4eig5805dikj3_800x780.jpg_320x999.jpg"}
    ]
  },
  getters:{
  	getTotalAmount(state){
  		return state.cart.reduce((pre,nex)=>{
  			return pre+nex.amount
  		},0)
  	},
  	getTotalPrice(state){
  		return state.cart.reduce((pre,nex)=>{
  			return parseFloat(pre+nex.price * nex.amount)
  		},0)
  	}
  },
  mutations: {
  	addcart(state,prod){
//		在加入购物车前,先判断是否已经有了该商品,没有的话就push进数组,有的话就将对象的amount属性加一
						const has=state.cart.some(curr=>curr.id==prod.id)
						if(has){
							state.cart.filter(curr=>{
								if(curr.id==prod.id){
									curr.amount+=1;
									return true
								}
							})
						}else{
									prod.amount=1;
									state.cart.push(prod)
								}
  		console.log(state.cart)
  	},
    addcount(state){
    	state.count += 2;
    },
    cutcount(state){
    	state.count -= 1;
    }
  },
  actions:{
  	asynchadd(store){
  		store.commit("addcount")
  	}
  }
})