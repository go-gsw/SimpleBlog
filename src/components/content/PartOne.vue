<template>
  <div class="PartOne">
          
          <!-- <div class="container col-lg-9" data-spy="scroll" data-target="#navbarexample" style="positoin:relative;overflow:auto;text-align:left;height:200px"> -->
          <!-- <div class="col-lg-9" id="mainContext"> -->

            <div id="section-1">
              <div class="jumbotron col-lg-12">
                <h1>Hello, GSW! 最新博客 :)&#x1F47b &#x1f64f</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A harum atque eaque natus consequatur exercitationem, consequuntur veritatis in cumque magnam velit distinctio libero voluptate culpa ipsam accusantium. Non, ipsa, amet.</p>
                <p><a class="btn btn-info btn-lg" href="#" role="button">Learn more</a></p>
              </div>
              
              <h1>OnePart</h1>
              <div class="panel panel-default" style="background-color:#ccc;">
                <div class="panel-heading">Title of the panel.
                </div>
                <div class="panel-body" style="box-sizing:border-box;padding:0">
                  <img src="../../assets/14.jpg" alt="图片集" style="width:100%;height:100%">
                </div>
              </div>
            </div>
            
            <div id="section-2">
              <h1>TwoPart</h1>
              <div>
                <div class="" style="height: 500px;background-color:#ddd;">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aut adipisci a dolore reiciendis fuga facere delectus velit totam minima, laboriosam atque nulla inventore, consequuntur amet quidem in ullam ipsa.</p>
                </div>
              </div>
            </div>
            
            <div id="section-3">
              <h1>ThreePart</h1>
              <div>
                <div class="" style="height: 500px;background-color:#eee;">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eum sit, doloremque voluptatem repellat mollitia! Aliquam incidunt quas quam provident doloremque distinctio, quibusdam consectetur ex ab dolor laudantium. Ducimus, quia.</p>
                </div>
              </div>
            </div>
            
            <div id="section-4" style="">
              <h1>FourPart</h1>
              <div>
                <div class="four" style="height: 500px;background-color:#fef;">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quam delectus distinctio, deserunt perspiciatis? Officiis accusamus illum assumenda quo sed, magnam, ut atque ex iusto a accusantium quibusdam non porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque laborum minus ea similique accusamus consectetur atque laboriosam, culpa, repellat dignissimos alias, debitis cupiditate iusto aliquam quam in incidunt. Expedita, necessitatibus.</p>
                </div>
              </div>
            </div>
          
            <div id="section-5">
              <h1>FivePart</h1>
              <div>
                <div class="" style="height: 500px;background-color:#fef;">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, temporibus voluptas natus recusandae, quo laudantium labore, assumenda quis culpa numquam molestiae expedita quam eius iure repellendus alias inventore quod, eum!</p>
                </div>
              </div>
            </div>

  </div>
</template>


<script>
import Emoji from 'node-emoji'
export default {
  name: 'PartOne',
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
<style>
h1{
  margin:0 !important;
  padding:10px 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  /*margin: 0 10px;*/
  text-decoration: none;
}
.four{
  color: #fff;
  font-weight: normal;
  background-size: cover;
  background-image:url('../../assets/11.jpg');
}
</style>
