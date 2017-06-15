<template>
  <div class="">
   <!-- style="padding:100px 200px 400px 350px;border:.5px solid #ccc" -->
        <form class="form-signin" ref="logform" :model="logform">
          <h2 class="form-signin-heading">master or visitor </br><small>sign in for this part</small></h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" v-model="logform.useremail">
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="logform.userpassword" @keyup.enter="submitForm('logform')">
          <div class="checkbox">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit" @click="submitForm('logform')">Sign in</button>
      </form>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        logform:{
          useremail:'',
          userpassword:''
        }
      }
    },
    methods:{
      submitForm(logform){
        this.$store.dispatch('ishadlogin');
        this.$store.dispatch('hadlogin');
        // return false
        // const self = this;
        /*console.log(this.logform)
        this.$ref.logform.validate((valid) => {
            if (valid) {
                localStorage.setItem('ms_username',this.logform.useremail);
                // this.$router.push('/PartTwo');
            } else {
                console.log('error singin !!');
                return false;
            }
        });*/
        // this.$cookie.set('session','SignInfo',{expires:1,path:'/',domain:'baidu.com',secure:true})
        let SignInfo=this.logform.useremail
        this.$cookie.set('session','SignInfo',{expires:1})
        localStorage.setItem('ms_username',this.logform.useremail);
      }
    },
  }
</script>