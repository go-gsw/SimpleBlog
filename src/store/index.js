import Vue from 'vue'
import Vuex from 'vuex'
import eventModule from './eventModule/index'
import * as type from './eventModule/mutations_types.js'
Vue.use(Vuex)
Vue.config.debug = true
//在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到
export default new Vuex.Store({
	modules:{
		eM:eventModule
	},
	// state:{
	// 	event:[],
	// 	count:0,
	// 	isShow:false
	// },
	// mutations:{
	// 	[type.CHANGETOOLS](state){
	// 		state.isShow=!state.isShow
	// 		console.log(state.isShow+'1')
	// 	}
	// },
	// getters:{
	// 	ischangeTools:state=>{
	// 	// return state.eventModule.isShow
	// 	// return this.$store.state.isShow
	// 	// return false
	// 	return state.isShow
	// 	}
	// },
	// actions:{
	// 	changetools({commit}){commit('CHANGETOOLS')}
	// }
})