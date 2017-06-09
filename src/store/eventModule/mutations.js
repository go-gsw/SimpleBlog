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
	}
}