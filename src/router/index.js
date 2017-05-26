import Vue from 'vue'
import Router from 'vue-router'
import PartOne from '@/components/content/PartOne'
import PartTwo from '@/components/content/PartTwo'
import PartThree from '@/components/content/PartThree'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      // redirect:'',
      name: 'PartOne',
      component: PartOne
    },
    {
    	path:'/PartTwo',
    	name:'PartTwo',
      component:PartTwo
    },
    {
      path:'/PartThree',
      name:'PartThree',
      component:PartThree
    }
  ]
})
