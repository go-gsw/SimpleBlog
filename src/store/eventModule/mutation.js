/*
 *Created by gongsw  on 2017/6/3
 */
//在这里引用所有mutation类型
import * as type from './mutations_types'
// import 

export default {
	[type.ADDEVENT](state,obj){
		state.count++
		obj.item.id=state.count
	},
	[type.CHANGETOOLS](state){
		state.isShow=!state.isShow
	}
}