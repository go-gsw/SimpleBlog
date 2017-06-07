<template>
	<div class="sidePart">
		  <nav class="bs-docs-sidebar hidden-print hidden-xs hidden-sm">

		  <!-- tips:body body body!!!!!!滚动监听通常是监听的body -->
		  <!-- 当页面加载完毕时，JS插件会搜索页面上所有[data-spy="affix"]的元素，然后找其data-offset-top或data-offset-bottom属性，即离页面顶(底)部少于多少px，就放弃固定，平时你怎么滚动，被固定的元素都定在这个位置上不动。 -->
		            <ul class="nav nav-tabs nav-stacked bs-docs-sidenav" data-spy="affix" data-offset-top="90">
		                <!-- <li class="active">
			                <a href="#section-1">第一部分 
				                <span class="badge">3</span>
			                </a>
		                </li>
		                <li><a href="#section-2">第二部分</a></li>
		                <li><a href="#section-3">第三部分</br></a></li>
		                <li>
			                <a href="#section-4">第四部分 
				                <span class="badge">15</span>
			                </a>
		                </li>
		                <li><a href="#section-5">第五部分</a></li> -->
		                <li v-for="item in sideBarList" v-text="item.context"></li>
		            </ul>
		            
		            <!-- <a href="#" class="bs-docs-theme-toggle" role="button">
		              主题预览
		            </a> -->
		            
		  </nav>
	</div>
</template>

<script>
export default{
	data(){
		return{
			sideBarList:[
				{
					title:'one',
					context:'第一部分'
				},
				{
					titile:'two',
					context:'第二部分'
				},
				{
					titile:'three',
					context:'第三部分'
				},
				{
					titile:'four',
					context:'第四部分'
				}
			]
		}
	},
}
</script>
<style scoped>
ul.nav-tabs{
    /*width: inherit;*/
    /*margin-top: 20px;*/
    width: 200px;
    display: block;
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
    background: #ddd;
    border: 1px solid #ddd;
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
    display: block;
    top: 30px;
    /* Set the top position of pinned element */
}
</style>