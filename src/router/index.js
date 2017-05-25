import Vue from 'vue'
import Router from 'vue-router'
import PartOne from '@/components/content/PartOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect:'',
      name: 'PartOne',
      component: PartOne
    },
    {
    	path:'',
    	name:''
    }
  ]
})
