import * as state from './state'
import * as getters from './getters'
import * as actions from './action'
import * as mutation from './mutation'
//把模块分开组成模型module
//* as 的意思是引入所有export
export default {
	state,
	getters,
	actions,
	mutation
}