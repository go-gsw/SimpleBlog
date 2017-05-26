<template>
  <div class="footer">
    <div class="fixed-more-btn">
      <div id="ToTop">
        <a>
        <span class="glyphicon glyphicon-chevron-up"></span>
        </a>
      </div>
      <div id="back-top" class="sc-only">
          <a data-toggle="popover" title="Example popover" date-placement="right">联系
          </a>
      </div>
    </div>

    <div class="container col-lg-10 col-lg-offset-1 col-xs-12 col-xs-offset-0" style="display:inline-block;">
        <nav aria-label="pagers">
          <ul class="pager">
            <li class="previous disabled"><a href="#"><span aria-hidden="true">&laquo;</span> Pervious</a></li>
            <li class="next"><a href="/PartTwo">Newer <span aria-hidden="true">&raquo;</span></a></li>
          </ul>
        </nav>
    </div>


    <div id="bottomFooter">
     Copyright &copy;<a href="https://github.com/go-gsw">{{ msg }}&#x1F47b</a>
    </div>
  </div>
</template>

<script>
import Emoji from 'node-emoji'
export default {
  data () {
    return {
      copyright: ' 2017 front end programmer--gsw'
    }
  },
  computed:{
    msg(){
      return this.copyright+Emoji.get('joy')+Emoji.get('alien');
    }
  }
}

$(document).ready(function() {
  $('.fixed-more-btn').hide();
  $(function(){
    $(window).scroll(function(){
      if($(this).scrollTop() >100){
         $('.fixed-more-btn').fadeIn();
      }else{
         $('.fixed-more-btn').fadeOut();
      }
    });
    $('#ToTop a').click(function(){
       $('body,html').animate({
        scrollTop:0
       },300);
       return false;
    })
  }
  );
});
</script>

<style scoped>
#bottomFooter {
  width: 100%;
  height: 80px;
  margin-top: 20px;
  display: inline-block;
  line-height: 80px;
  border-top: 1px solid #ddd;
  text-align: center;
  background-color: #eee;
}

.fixed-more-btn{
  display: block;
  position: fixed;
  z-index: 10;
  width: 40px;
  height: 80px;
  bottom:100px;
  right: 15px;
}
#back-top{
  display: block;
  background-color: #bbb;
  width: inherit;
  height: 40px;
  cursor: pointer;
}
#ToTop{
  display: block;
  background-color: #aaa;
  width: inherit;
  height: 40px;
  cursor: pointer;
}
#back-top>a,#ToTop>a{
  display: block;
  width: inherit;
  height: inherit;
  padding: 10px 0;
  text-decoration: none;
}
</style>