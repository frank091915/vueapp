import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//插件,在每次调用mutation后的钩子函数，可用于保存修改后的数据

const toSavePlugins = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
//  判断哪些操作是修改cart的,然后保存cart
		if( ["addcart", "addcount", "cutcount", "deleteitem"].indexOf(mutation.type)!=-1){
			window.localStorage.setItem("kkcart",JSON.stringify(state.cart))
		}
		
		console.log(state.cart.filter((curr)=>{
				if(curr.isSelected){
					return true
				}else{
					return false
				}
		}).length)
		
  })
}

//导出store
export default new Vuex.Store({
	plugins:[toSavePlugins],
  state: {
    count: 0,
    cart: JSON.parse(window.localStorage.getItem("kkcart")) || [],
    isSigned:window.localStorage.getItem("kktoken") != null,   
  }, 
  getters:{
  	getTotalAmount(state){
  		return state.cart.reduce((pre,nex)=>{
  			return pre+nex.amount
  		},0)
  	},
  	getTotalPrice(state){
  		return state.cart.filter((curr)=>{
				if(curr.isSelected){
					return true
				}else{
					return false
				}
		}).reduce((pre,nex)=>{
  			return parseFloat(pre+  nex.price * nex.amount)
  		},0)
  	},
  	selectedAmounted(state){
  		return state.cart.filter((curr)=>{
				if(curr.isSelected){
					return true
				}else{
					return false
				}
		}).length
  	},
  	//全选按钮的默认状态
  	defaultAllSelected(state){
//		根据购物车的状态返回不同的布尔值
  		return  !!state.cart.length ? state.cart.every((curr)=>{return curr.isSelected}): false
  		  	}
//		function togetselected (){
//			if(state.cart.length){
//			return true
//		}else{
//			const selectedAmount=state.cart.reduce((pre,nex)=>{
//					return pre+nex.isSelected ? 1 : 0
//			},0);
//			if(state.cart.length==selectedAmount){
//				return true
//			}else{
//				return false
//			}
//		}
//		}  		

  },
  mutations: {
  	addcart(state,prod){
//		在加入购物车前,先判断是否已经有了该商品,没有的话就push进数组,有的话就将对象的amount属性加一
						const has=state.cart.some(curr=>curr.id==prod.id)
						if(has){
							state.cart.filter(curr=>{
								if(curr.id==prod.id){
									curr.amount+=1;
								}
									return true
							})
						}else{
									prod.amount=1;
									state.cart.push(prod)
								}
  		console.log(state.cart)
  	},
    addcount(state,itemId){
//  用非变异方法时,重新给state赋值,视图才会更新
		  state.cart = state.cart.filter(curr=>{
				if(curr.id==itemId){
					curr.amount += 1;
				}		
					return true
		})
//			state.cart = state.cart.filter(curr => {
//						if (curr.id == itemId)
//							curr.amount += 1;
//						return true
//					})
		
    },
    cutcount(state,itemId){
    	  state.cart = state.cart.filter(curr=>{
						if(curr.id==itemId &&curr.amount>1){
								curr.amount -= 1;
						}		
							return true
				})
    	  console.log(state.cart)
    },
    deleteitem(state,itemId){
    	  state.cart = state.cart.filter(curr=>{
						if(curr.id==itemId){
								return false
						}		
							return true
				})
    },
    changeState(state){
    	state.isSigned = !state.isSigned
    },
    addtolocal(state){
    	window.localStorage.setItem("kkcart",JSON.stringify(state.cart))
    },
    changeSelected(state,id){
    		state.cart=state.cart.filter((curr)=>{
    			if(curr.id==id){
    				curr.isSelected=!curr.isSelected;
    				return true
    			}
    			return true
    		})
    },
//  全选按钮点击事件
	ifAllselected(state,preStatus){
		state.cart.forEach(curr=>{
			curr.isSelected=!preStatus;
		})
	}
  },
  actions:{
  	asynchadd(store){
  			store.commit("addcount")
  	}
  }
})