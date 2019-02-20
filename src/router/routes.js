import home from "@/pages/home"
import categorypage from "@/pages/categorypage"
import maintext from "@/components/maintext"
import cart from "@/pages/cart"
import tabbar from "@/components/tabbar"
import homepageheader from "@/components/homepageheader"
import mine from "@/pages/mine"
import subcategory from "@/components/subcategory"

export default [
//重定向设置
	{
	path:"/",
	redirect:"/home",
	meta:{
		title:"",
		isrendered:false
		}
	},
//	首页组件
    {
	name:"home",
	path:"/home",
	components:{
		header: homepageheader,
		main:home,
		tabbar
	},
	meta:{
		title:"首页",
		isrendered:true
		}
	},
//	商城页面组件
	{
	name:"categorypage",
	path:"/categorypage",
	components:{
		header: homepageheader,
		tabbar,
		main:categorypage
	},
	meta:{
		title:"分类",
		isrendered:true
	},
	children:[
	{
		name:"subcategory",
		path:":categoryid",
		components:{
			subcategory:subcategory
		}
	}
	]
	},
//	详情页
	{
	name:"cart",
	path:"/cart",
	components:{
		header: homepageheader,
		main:cart,
	},
	meta:{
		title:"购物车",
		isrendered:true
		}
	},
		{
	name:"mine",
	path:"/mine",
	components:{
		header: homepageheader,		
		main:mine,
		tabbar
	},
	meta:{
		title:"我的",
		isrendered:true
		}
	}
]
