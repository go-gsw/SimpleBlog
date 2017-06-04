const getters ={
	// getDone(){
	// 	return state.event.filter(function(d){
	// 		return{}
	// 	})
	// },
	ischangeTools:state=>{
		// console.log(state.isShow+'3')
		// let isShownow=this.state.isShow
		// return isShownow
		// return false
		return state.isShow
	},
	//通过 rootState，模块中的 getters 就可以引用别的模块中的 state
	xxx:(state,getters,rootState)=>{
		return{}
	}
}
export default getters;

