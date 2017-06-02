import Vue from 'vue'
import Vuex from 'vuex'
import evnetModule from './evnetModule/index'
Vue.use(Vuex)

export default new Vuex.Store({
	// state:{

	// },
	// mutations:{
		
	// }
	modules:{
		evnetModule
	}
})