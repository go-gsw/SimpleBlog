const getters ={
	// getDone(){
	// 	return state.event.filter(function(d){
	// 		return{}
	// 	})
	// },
	
	numOflikes:state=>{
		return state.likes
	},
	islike:state=>{
		return state.thisIslike
	},
	ischangeTools:state=>{
		// console.log(state.isShow+'3')
		// return false
		return state.isShow
	},
	getsidebar:state=>{
		return state.sideBarList
	},
	//通过 rootState，模块中的 getters 就可以引用别的模块中的 state
	xxx:(state,getters,rootState)=>{
		return{}
	}
}
export default getters;

