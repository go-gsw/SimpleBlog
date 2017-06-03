import Vue from 'vue'
import Vuex from 'vuex'
import eventModule from './eventModule'
Vue.use(Vuex)
Vue.config.debug = true
export default new Vuex.Store({
	modules:{
		eventModule
	},
	// state:{

	// },
	// mutations:{
		
	// }
	// getters:{
		// ischangeTools(){
		// let state.isShow=!state.isShow
		// return this.state.isShow
		// return false
	// }
	// }
})