// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import $ from 'jquery'
import '../static/bootstrap/css/bootstrap.min.css'
import '../static/bootstrap/js/bootstrap.min.js'
import '../static/bootstrap/fonts/glyphicons-halflings-regular.eot'
// require('bootstrap')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  template: '<App/>',
  components: { App }
})
