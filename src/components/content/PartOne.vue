<template>
  <div class="PartOne">
          
          <!-- <div class="container col-lg-9" data-spy="scroll" data-target="#navbarexample" style="positoin:relative;overflow:auto;text-align:left;height:200px"> -->
          <!-- <div class="col-lg-9" id="mainContext"> -->

            <div class="jumbotron col-lg-12" id="section-1">
              <h1>Hello, GSW!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A harum atque eaque natus consequatur exercitationem, consequuntur veritatis in cumque magnam velit distinctio libero voluptate culpa ipsam accusantium. Non, ipsa, amet.</p>
              <p><a class="btn btn-info btn-lg" href="#" role="button">Learn more</a></p>
            </div>

            <h1>OnePart</h1>
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
</template>


<script>

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
div{
  margin:0;
  padding:0;
}
h1, h2 {
  font-weight: normal;
  /*padding-top: 10px;*/
  /*margin-top: 10px;*/
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
    /*width: 200px;*/
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
    /*width: 200px;*/
    display: block;
    top: 30px; /* Set the top position of pinned element */
}
</style>
