import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
//把模块分开组成模型module
//* as 的意思是引入所有export
export default {
	state,
	getters,
	actions,
	mutations
}