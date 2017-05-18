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


      <div class="container col-lg-8 col-lg-offset-1 col-xs-12 col-xs-offset-0" data-spy="scroll" data-target="#navbar-example" style="positoin:relative;">
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
