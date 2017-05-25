<template>
  <div id="app">
    <blog-header></blog-header>
      <div class="container bs-docs-container col-lg-10 col-lg-offset-1 col-xs-12 col-xs-offset-0" style="text-align:left;padding:0;">
        <div class="col-lg-9" id="mainContext">
          <router-view></router-view>
        </div>
        <div class="col-lg-3" id="navbarside">
          <side-part></side-part>
        </div>
    </div>
    <blog-footer></blog-footer>
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

</style>
