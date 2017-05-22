import Vue from 'vue'
import Router from 'vue-router'
import Mainleft from '@/components/Mainleft'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mainleft',
      component: Mainleft
    },
    {
    	path:'',
    	name:''
    }
  ]
})
