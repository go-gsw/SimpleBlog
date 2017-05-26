<template>
  <div id="app">
    <div>
      <blog-header></blog-header>
        <div class="container bs-docs-container col-lg-10 col-lg-offset-1 col-xs-12 col-xs-offset-0" style="text-align:left;padding:0;">
          <div class="col-lg-9" id="mainContext">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
          <div class="col-lg-3" id="navbarside">
            <side-part></side-part>
          </div>
      </div>
      <blog-footer></blog-footer>
    </div>
    <div></div>
  </div>
</template>

<script>
import BlogFooter from './components/common/BlogFooter'
import BlogHeader from './components/common/BlogHeader'
import sidePart from './components/content/sidePart'
export default {
  name: 'app',
  components:{
    BlogFooter,
    BlogHeader,
    sidePart
  }
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
  transform: translateX(-300px);
}
.fade-enter{
  opacity: .3;
  transform: translateX(200px);
}
</style>
