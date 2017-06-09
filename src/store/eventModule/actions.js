// 注册在vue里通过metdods里的方法通过store.dispatch方法触发的action.
// store.commit 可以提交载荷
export default {
	eventdone:({ commit }, param) =>commit('ADDEVENT',{item: param}),
	// changetools:({commit,rootState})=>commit('CHANGETOOLS'rootState.isShow),
	changetools({commit}){commit('CHANGETOOLS')},
	changelike({commit}){commit('CHANGELIKE')},
	incLikes({commit}){commit('INCLIKES')}
}


