<template>
  <div class="hello">
      <div class="container col-lg-12 col-xs-12 " style="margin:0;">
        <nav class="navbar navbar-default navbar-staric" style="background-color:#bbb;">
          <div class="container-fluid">
            <div class="navbar-header">
              <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".bs-navbar-scrollspy">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">G SW</a>
            </div>
            <div class="collapse navbar-collapse navbar-right bs-navbar-scrollspy">
              <ul class="nav navbar-nav navbar-right" style="">
                <li>
                  <router-link to="/">
                    <li class="active"><a href="">首页</a></li>
                    <!-- 添加aria-hidden="true"为了避免 屏幕识读设备抓取非故意的和可能产生混淆的输出内容 -->
                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </router-link>
                </li>
                <li>
                  <router-link to="">
                    <li class=""><a href="">GSW</a></li>
                      <span class="badge">12</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="">
                    <li class=""><a href="">ME</a></li>
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                  </router-link>
                </li>

                  <li class="dropdown">
                    <a href="#" id="navbarDrop1" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">MORE  
                    <!-- <span class="caret"></span> -->
                    <span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                    </a>
                   <ul class="dropdown-menu" aria-labelledby="navbarDrop1">
                        <li class=""><a href="">one</a></li>
                        <li class=""><a href="">two</a></li>
                        <li role="separator" class="divider"></li>
                        <li class=""><a href="">three</a></li>
                    </ul>
                   </li>
                  
              </ul>
            </div>
          </div>
        </nav>
      </div>


      <div class="container col-lg-10 col-lg-offset-1 col-xs-12 col-xs-offset-0" data-spy="scroll" data-target="#navbar-example" style="positoin:relative;">
        <div class="col-lg-9" role="main">
          <div class="panel panel-default" style="height: 500px;background-color:#ccc;">
            <div class="panel-heading">Title of the panel
            </div>
            <div class="panel-body">
              
            </div>
          </div>
          
          <div>
            <div class="" style="height: 500px;background-color:#ddd;">
            </div>
          </div>
          
          <div>
            <div class="" style="height: 500px;background-color:#eee;">
            </div>
          </div>
          
          <div>
            <div class="" style="height: 500px;background-color:#ffe;">
            </div>
          </div>
        </div>

        <div class="col-md-3" role="complementary">
        <nav class="bs-docs-sidebar hidden-print hidden-xs hidden-sm affix">
        <ul class="nav bs-docs-sidenav">
                      
        <li>
          <a href="#js-overview">概览</a>
          <ul class="nav">
            <li><a href="#js-individual-compiled">单个还是全部引入</a></li>
            <li><a href="#js-data-attrs">data 属性</a></li>
            <li><a href="#js-programmatic-api">编程方式的 API</a></li>
            <li><a href="#js-noconflict">避免命名空间冲突</a></li>
            <li><a href="#js-events">事件</a></li>
            <li><a href="#js-version-nums">Version numbers</a></li>
            <li><a href="#js-disabled">浏览器的 JavaScript 被禁用的情况</a></li>
            <li><a href="#callout-third-party-libs">第三方工具库</a></li>
          </ul>
        </li>
        <li><a href="#transitions">过渡效果</a></li>
        <li class="">
          <a href="#modals">模态框</a>
          <ul class="nav">
            <li><a href="#modals-examples">实例</a></li>
            <li><a href="#modals-sizes">Sizes</a></li>
            <li><a href="#modals-remove-animation">Remove animation</a></li>
            <li class=""><a href="#modals-related-target">Varying content based on trigger button</a></li>
            <li class=""><a href="#modals-usage">用法</a></li>
            <li class=""><a href="#modals-options">参数</a></li>
            <li class=""><a href="#modals-methods">方法</a></li>
            <li class=""><a href="#modals-events">事件</a></li>
          </ul>
        </li>
        <li class="">
          <a href="#dropdowns">下拉菜单</a>
          <ul class="nav">
            <li class=""><a href="#dropdowns-examples">实例</a></li>
            <li><a href="#dropdowns-usage">用法</a></li>
            <li><a href="#dropdowns-methods">方法</a></li>
            <li class=""><a href="#dropdowns-events">事件</a></li>
          </ul>
        </li>
        <li class="active">
          <a href="#scrollspy">滚动监听</a>
          <ul class="nav">
            <li class=""><a href="#scrollspy-examples">实例</a></li>
            <li class="active"><a href="#scrollspy-usage">用法</a></li>
            <li><a href="#scrollspy-methods">方法</a></li>
            <li><a href="#scrollspy-options">参数</a></li>
            <li><a href="#scrollspy-events">事件</a></li>
          </ul>
        </li>
        <li>
          <a href="#tabs">标签页</a>
          <ul class="nav">
            <li><a href="#tabs-examples">实例</a></li>
            <li><a href="#tabs-usage">用法</a></li>
            <li><a href="#tabs-methods">方法</a></li>
            <li><a href="#tabs-events">事件</a></li>
          </ul>
        </li>
        <li>
          <a href="#tooltips">工具提示</a>
          <ul class="nav">
            <li><a href="#tooltips-examples">实例</a></li>
            <li><a href="#tooltips-usage">用法</a></li>
            <li><a href="#tooltips-options">参数</a></li>
            <li><a href="#tooltips-methods">方法</a></li>
            <li><a href="#tooltips-events">事件</a></li>
          </ul>
        </li>
        <li>
          <a href="#popovers">弹出框</a>
          <ul class="nav">
            <li><a href="#popovers-examples">实例</a></li>
            <li><a href="#popovers-usage">用法</a></li>
            <li><a href="#popovers-options">参数</a></li>
            <li><a href="#popovers-methods">方法</a></li>
            <li><a href="#popovers-events">事件</a></li>
          </ul>
        </li>
        <li>
          <a href="#alerts">警告框</a>
          <ul class="nav">
            <li><a href="#alerts-examples">警告框实例</a></li>
            <li><a href="#alerts-usage">用法</a></li>
            <li><a href="#alerts-methods">方法</a></li>
            <li><a href="#alerts-events">事件</a></li>
          </ul>
        </li>
        <li>
          <a href="#buttons">按钮</a>
          <ul class="nav">
            <li><a href="#buttons-stateful">Stateful</a></li>
            <li><a href="#buttons-single-toggle">Single toggle</a></li>
            <li><a href="#buttons-checkbox-radio">Checkbox / Radio</a></li>
            <li><a href="#buttons-methods">方法</a></li>
          </ul>
        </li>
        <li>
          <a href="#collapse">Collapse</a>
          <ul class="nav">
            <li><a href="#collapse-example">实例</a></li>
            <li><a href="#collapse-example-accordion">Accordion example</a></li>
            <li><a href="#collapse-usage">用法</a></li>
            <li><a href="#collapse-options">参数</a></li>
            <li><a href="#collapse-methods">方法</a></li>
            <li><a href="#collapse-events">事件</a></li>
          </ul>
        </li>
        <li>
          <a href="#carousel">Carousel</a>
          <ul class="nav">
            <li><a href="#carousel-examples">实例</a></li>
            <li><a href="#carousel-usage">用法</a></li>
            <li><a href="#carousel-options">参数</a></li>
            <li><a href="#carousel-methods">方法</a></li>
            <li><a href="#carousel-events">事件</a></li>
          </ul>
        </li>
        <li>
          <a href="#affix">Affix</a>
          <ul class="nav">
            <li><a href="#affix-examples">实例</a></li>
            <li><a href="#affix-usage">用法</a></li>
            <li><a href="#affix-options">参数</a></li>
            <li><a href="#affix-methods">方法</a></li>
            <li><a href="#affix-events">事件</a></li>
          </ul>
        </li>

                      
                    </ul>
                    <a class="back-to-top" href="#top">
                      返回顶部
                    </a>
                    
                    <a href="#" class="bs-docs-theme-toggle" role="button">
                      主题预览
                    </a>
                    
                  </nav>
                </div>
      </div>


      <div class="container col-lg-12 col-lg-offset-0 col-xs-12 col-xs-offset-0" style="padding-top:20px;">
        <nav class="navbar navbar-default navbar-staric navbar-inverse" role="navigation">
            <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Nice! GSW</a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li class="active"><a href="#">Link</a></li>
                  <li class="dropup">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider" role="separator"></li>
                      <li><a href="#">Separated link</a></li>
                      <li class="divider"></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
                <form class="navbar-form navbar-right" role="search">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                  </div>
                  <button type="submit" class="btn btn-default">Submit</button>
                </form>
                <ul class="nav navbar-nav navbar-right">
                  <li class="dropup">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
          </nav>
        </div>

  </div>
</template>


<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
  padding:0;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #666;
  font-weight: bold;
}
</style>
