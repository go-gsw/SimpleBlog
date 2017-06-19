/*
 *Created by gongsw  on 2017/6/3
 */
//在这里引用所有mutation类型
import * as type from './mutations_types.js'
// import 

export default {
	[type.ADDEVENT](state,obj){
		state.count++
		obj.item.id=state.count
	},
	[type.CHANGETOOLS](state){
		state.isShow=!state.isShow
	},
	[type.INCLIKES](state){
		state.thisIslike?state.likes+=1:state.likes-=1
	},
	[type.CHANGELIKE](state){
		state.thisIslike=!state.thisIslike
	},
	[type.CHANGELOG](state,obj){
		// obj.showsignin=!obj.showsignin;
		if(obj.showsignin&&obj.loged){
			obj.showsignin
			obj.loged=false
		}else{
			obj.showsignin=!obj.showsignin;
		}
	},
	[type.CANCELLOGIN](state,obj){
		obj.showsignin=!obj.showsignin;
	},
	[type.SIGNOUT](state,obj){
		obj.loged=!obj.loged;
	},
	[type.HADCHANGELOG](state,obj){
		obj.loged=!obj.loged
		if(obj.loged){
			obj.loged
			obj.showsignin=false
		}else{
			obj.loged=!obj.loged
		}
	},
	[type.SAVEUSERINFO](state,obj){
		// console.log(obj)
		if(obj.rootState.isgsw){
			obj.rootState.userInfo=obj.param[1]
		}else{
			obj.rootState.userInfo=obj.param[2]
		}
	},
	[type.CHANGESIGNINTYPE](state,obj){
		let needyanzhen=obj.param.toString()
		if(needyanzhen=='gsw'){
		  obj.rootState.isgsw=!obj.rootState.isgsw;
		}else{
		  obj.rootState.isgsw=obj.rootState.isgsw
		}
	}
}