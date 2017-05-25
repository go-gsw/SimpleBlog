<template>
	<div class="header">
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
		          <li class="active">
		            <router-link to="/">
		              <a href="">Search<!-- 添加aria-hidden="true"为了避免 屏幕识读设备抓取非故意的和可能产生混淆的输出内容 -->
		              <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
		              </a>
		            </router-link>
		          </li>
		          <li class="">
		            <router-link to="/PartTwo">
		              <a href="">GSW
		              <!-- <span class="badge">12</span> -->
		              </a>
		            </router-link>
		          </li>
		          <li class="">
		            <router-link to="">
		              <a href="">ME
		              <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
		              </a>
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
	</div>
</template>

<script>
export default{

}
</script>

<style>
	
</style>