// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import VueCookie from 'vue-cookie'
import Mock from 'mockjs'
import $ from 'jquery'
import '../static/bootstrap/css/bootstrap.min.css'
import '../static/bootstrap/js/bootstrap.min.js'
import '../static/bootstrap/fonts/glyphicons-halflings-regular.eot'
// require('bootstrap')
Vue.use(VueCookie)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created(){
  	this.checkSignin()
  },
  watch:{
  	"$router":'checkSignin'
  },
  methods:{
  	checkSignin(){
  		if(!this.$cookie.get('session')){
  			this.$router.push('/')
  		}else{
  			this.$router.push('/')
  		}
  	}
  },

})
Mock.mock('/static/resource/user.json',{
	"code":0,
	"userList":[
		{
			"name":"gsw",
			"age":"21",
			"male":"male",
			"icon":"../../static/img/user1.jpg"
		},
		{
			"name":"user",
			"age":"21",
			"male":"female",
			"icon":"../../static/img/user2.jpg"
		},
		{
			"name":"normal",
			"age":"xx",
			"male":"male",
			"icon":"../../static/img/usernormal.jpg"
		}]
})
/*//在全局注册设置Cookie,方便调用
Vue.prototype.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();　　　　
  exdate.setDate(exdate.getDate() + expiredays);　　　　
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//获取cookie、
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}
Vue.prototype.getCookie = getCookie;

//删除cookie
Vue.prototype.delCookie =(name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}*/
