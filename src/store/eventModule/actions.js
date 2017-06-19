// 注册在vue里通过metdods里的方法通过store.dispatch方法触发的action.
// store.commit 可以提交载荷
export default {
	eventdone:({ commit }, param) =>commit('ADDEVENT',{item: param}),
	// changetools:({commit,rootState})=>commit('CHANGETOOLS'rootState.isShow),
	changetools({commit}){commit('CHANGETOOLS')},
	changelike({commit}){commit('CHANGELIKE')},
	incLikes({commit}){commit('INCLIKES')},
	ishadlogin({commit,rootState}){commit('CHANGELOG',rootState)},
	cancellogin({commit,rootState}){commit('CANCELLOGIN',rootState)},
	Signout({commit,rootState}){commit('SIGNOUT',rootState)},
	hadlogin({commit,rootState}){commit('HADCHANGELOG',rootState)},
	signInType({commit,rootState},param){commit('CHANGESIGNINTYPE',{rootState,param})},
	// saveUserInfo:({commit,rootState},param)=>commit('SAVEUSERINFO',{rootState,param})
	saveUserInfo({dispatch,commit,rootState},param){
		return dispatch('signInType',{rootState,param}).then((res)=>{
			commit('SAVEUSERINFO',{rootState,param})
		})
	}
}


