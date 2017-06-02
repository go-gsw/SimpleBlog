// 注册在vue里通过metdods里的方法通过store.dispatch方法触发的action.
// store.commit 可以提交载荷
export default {
	eventdone = ({ commit }, param) =>{ 
		commit('EVENTDONE',{id: param}); 
	}
}