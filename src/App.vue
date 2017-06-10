<template>
  <div id="app">
      <blog-header></blog-header>
        <div class="container bs-docs-container col-lg-10 col-lg-offset-1 col-xs-12 col-xs-offset-0" style="text-align:left;padding:0;">
          <div class="col-lg-9" id="mainContext">
            <transition name="fade" mode="out-in">
              <router-view class="content"></router-view>
            </transition>
          </div>
          <div class="col-lg-3" id="navbarside">
            <side-part></side-part>
          </div>
      </div>
      <blog-footer></blog-footer>
    <side-bar></side-bar>
      <div class="signindialog" v-if="showsign" key="show">
        <div class="signin">
          <log-in></log-in>
        </div>
        <div class="signin-overlay" @click="notshowsign"></div>
      </div>
  </div>
</template>

<script>
import BlogFooter from './components/common/BlogFooter'
import BlogHeader from './components/common/BlogHeader'
import sidePart from './components/content/sidePart'
import sideBar from './components/common/sideBar'
import logIn from './components/content/login'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components:{
    BlogFooter,
    BlogHeader,
    sidePart,
    sideBar,
    logIn
  },
  data(){
    return{
    }
  },
  methods:{
    notshowsign(){
      this.$store.dispatch('ishadlogin')
    },
  },
  watch:{
    
  },
  computed:mapState({
    showsign(state){
        // return this.$store.getters.getshowsign
        return this.$store.state.showsignin
        // return  true
    },

  })
  
}
</script>

<style>
*{
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  text-align: center;
  /*margin-top: 60px;*/
}
/*#navbarside{
  padding-right: 100px;
}*/
.content{
  box-shadow: 3px 3px 10px #ccc;
}
@media (max-width:768px) {
  #mainContext,.container{
    padding:0 3px 0;
  }
}
a{
  color: #666 !important;
  font-weight: bold;
}
.fade-enter-active, .fade-leave-active {
  transition: .25s ease-out;
}
.fade-enter-to,.fade-leave{
  opacity: 1;
  visibility: visible;
}
.fade-leave-to{
  opacity: .75;
  transform: scale(.8,.9);
  transform: translateX(-300px);
}
.fade-enter{
  opacity: .3;
  transform: scale(.7,.8);
  transform: translateX(200px);
}
.signindialog{
  text-align: left;
  color: #fff;
}
.signin{
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  /*height: 200px;*/
  padding: 10px 20px;
  background-color: rgba(0,0,0,0.7);
  border-radius: 5px;
  -webkit-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  /*visibility: hidden;*/
  opacity: .95;
  z-index: 201;
}
.signin .showsign{
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  transition: all .4 ease-in;
}
.signin-overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 200;
}
</style>
