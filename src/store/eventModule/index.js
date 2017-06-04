import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
//把模块分开组成模型module
//* as 的意思是引入所有export
//在 Vuex 模块化中，state 是唯一会根据组合时模块的别名来添加层级的，
//后面的 getters、mutations 以及 actions 都是直接合并在 store 下。
export default {
	state,
	getters,
	actions,
	mutations
}