<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import BlogFooter from './components/common/BlogFooter'
import BlogHeader from './components/common/BlogHeader'
export default {
  name: 'app',
  components:{
    BlogFooter,
    BlogHeader
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
a{
  color: #666 !important;
  font-weight: bold;
}

</style>
