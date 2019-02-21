import axios from "axios"
//引入等待图标插件
import {Indicator} from "mint-ui"
//引入弹出提示框
import { Toast } from 'mint-ui';

//此页面仅提供请求的数据,由其他模块引入进行后续操作

const ajax =axios.create({
	baseURL:"http://rap2api.taobao.org/app/mock/126599"
});

//请求首页轮播图路径的方法
const getswiperimgs=()=>{
	return ajax.get("/swiper")
}
//请求分类列表导航栏的数据
const getcategorynav=()=>{
	return ajax.get("/frank")
}

//请求下级分类列表的数据
const getsubcategory=(categoryid)=>{
	return ajax.get("/subcagetorynav")
}

const gettabbar=()=>{
	return ajax.get("/tabbarimg")
}

//登录请求
const toSignIn=({username,password})=>{
	return ajax.get("/signIn")
}

//拦截请求,并进行操作,显示等待图标
ajax.interceptors.request.use((config)=>{
//	Indicator.open({text:"loading..."});
	return config
});

//拦截相应,对相应数据进行操作并返回,顺带关掉indicator
ajax.interceptors.response.use((config)=>{
//	Indicator.close();
	if(config.data.res_code==1){
		return config.data

	}else{
		Toast({
		  message: '数据加载异常',
		  position: 'bottom',
		  duration: 5000
		});
	}

})

//导出模块
export{
	getswiperimgs,getcategorynav,getsubcategory,gettabbar,toSignIn
}
