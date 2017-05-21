<template>
  <div class="hello">
      <div class="container col-lg-12 col-xs-12 " style="padding:0;">
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
                    <li class="active"><a href="">首页<!-- 添加aria-hidden="true"为了避免 屏幕识读设备抓取非故意的和可能产生混淆的输出内容 -->
                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                    </a></li>
                  </router-link>
                </li>
                <li>
                  <router-link to="">
                    <li class=""><a href="">GSW
                    <span class="badge">12</span>
                    </a></li>
                  </router-link>
                </li>
                <li>
                  <router-link to="">
                    <li class=""><a href="">ME
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                    </a></li>
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


      <div class="container col-lg-10 col-lg-offset-1 col-xs-12 col-xs-offset-0" style="text-align:left;">
          <!-- tips:body body body!!!!!!通常是监听的body -->
          <!-- <div class="container col-lg-9" data-spy="scroll" data-target="#navbarexample" style="positoin:relative;overflow:auto;text-align:left;height:200px"> -->
          <div class="container col-lg-9">

            <div class="jumbotron col-lg-12">
              <h1>Hello, GSW!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A harum atque eaque natus consequatur exercitationem, consequuntur veritatis in cumque magnam velit distinctio libero voluptate culpa ipsam accusantium. Non, ipsa, amet.</p>
              <p><a class="btn btn-info btn-lg" href="#" role="button">Learn more</a></p>
            </div>

            <h1 id="section-1">OnePart</h1>
            <div class="panel panel-default" style="height: 500px;background-color:#ccc;">
              <div class="panel-heading">Title of the panel
              </div>
              <div class="panel-body">
              </div>
            </div>
            
            <h1 id="section-2">TwoPart</h1>
            <div>
              <div class="" style="height: 500px;background-color:#ddd;">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aut adipisci a dolore reiciendis fuga facere delectus velit totam minima, laboriosam atque nulla inventore, consequuntur amet quidem in ullam ipsa.</p>
              </div>
            </div>
            
            <h1 id="section-3">ThreePart</h1>
            <div>
              <div class="" style="height: 500px;background-color:#eee;">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eum sit, doloremque voluptatem repellat mollitia! Aliquam incidunt quas quam provident doloremque distinctio, quibusdam consectetur ex ab dolor laudantium. Ducimus, quia.</p>
              </div>
            </div>
            
            <h1 id="section-4">FourPart</h1>
            <div>
              <div class="" style="height: 500px;background-color:#fee;">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quam delectus distinctio, deserunt perspiciatis? Officiis accusamus illum assumenda quo sed, magnam, ut atque ex iusto a accusantium quibusdam non porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque laborum minus ea similique accusamus consectetur atque laboriosam, culpa, repellat dignissimos alias, debitis cupiditate iusto aliquam quam in incidunt. Expedita, necessitatibus.</p>
              </div>
            </div>
          
            <h1 id="section-5">FivePart</h1>
            <div>
              <div class="" style="height: 500px;background-color:#fef;">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, temporibus voluptas natus recusandae, quo laudantium labore, assumenda quis culpa numquam molestiae expedita quam eius iure repellendus alias inventore quod, eum!</p>
              </div>
            </div>
              
          </div>
          
          <div class="col-lg-3" id="navbarexample">
            <nav class="bs-docs-sidebar hidden-print hidden-xs hidden-sm">
          <!-- <ul class="nav bs-docs-sidenav" style="height: 2000px;text-align:left;">
                        
                <li>
                  <a href="#js-overview">概览</a>
                  <ul class="nav">
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
                    
                  </ul>
                </li>
                
                <li>
                  <a href="#popovers">弹出框</a>
                  <ul class="nav">
                    
                  </ul>
                </li>
                
                <li>
                  <a href="#buttons">按钮</a>
                  <ul class="nav">
                  </ul>
                </li>
            </ul> -->
            <!-- 当页面加载完毕时，JS插件会搜索页面上所有[data-spy="affix"]的元素，然后找其data-offset-top或data-offset-bottom属性，即离页面顶(底)部少于多少px，就放弃固定，平时你怎么滚动，被固定的元素都定在这个位置上不动。 -->
                      <ul class="nav nav-tabs nav-stacked" data-spy="affix" data-offset-top="90">
                          <li class="active"><a href="#section-1">第一部分</a></li>
                          <li><a href="#section-2">第二部分</a></li>
                          <li><a href="#section-3">第三部分</a></li>
                          <li><a href="#section-4">第四部分</a></li>
                          <li><a href="#section-5">第五部分</a></li>
                          <li>
                            <a class="back-to-top" href="#">
                              返回顶部
                            </a>
                          </li>
                      </ul>
                      
                      <!-- <a href="#" class="bs-docs-theme-toggle" role="button">
                        主题预览
                      </a> -->
                      
            </nav>
          </div>
      </div>


      <div class="container col-lg-12 col-lg-offset-0 col-xs-12 col-xs-offset-0" style="padding:20px 0 0;">
        <nav class="navbar navbar-default navbar-staric navbar-inverse" role="navigation" style="margin:0;">
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
                  <li class=""><a href="#">Link</a></li>
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
// $(function(){
//   $('#Mainspy').scrollspy({target:'#navbarexample'})
// })

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
  padding:0;
}
h1, h2 {
  font-weight: normal;
  /*padding-top: 10px;*/
  margin-top: 10px;
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


ul.nav-tabs{
    /*width: inherit;*/
    /*margin-top: 20px;*/
    width: 200px;
    background-color: #eee;
    border-radius: 4px;
    border: 1px solid #ddd;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}
ul.nav-tabs li:not(first-child){
    margin: 0;
    border-top: 1px solid #ddd;
}
ul.nav-tabs li a{
    margin: 0;
    padding: 8px 16px;
    border-radius: 0;
}
ul.nav-tabs li.active a,ul.nav-tabs li a:hover{
    color: #fff;
    background: #bbb;
    border: 1px solid #ccc;
}
ul.nav-tabs li:first-child a{
    border-radius: 4px 4px 0 0;
}
ul.nav-tabs li:last-child a{
    border-radius: 0 0 4px 4px;
}
ul.nav-tabs.affix{
    /*width: inherit;*/
    width: 200px;
    top: 30px; /* Set the top position of pinned element */
}
</style>
