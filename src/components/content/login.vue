<template>
  <div class="">
   <!-- style="padding:100px 200px 400px 350px;border:.5px solid #ccc" -->
        <form class="form-signin" ref="logform" :model="logform">
          <h2 class="form-signin-heading">master or visitor </br><small>sign in for this part</small></h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="输入gsw是管理员" required="" autofocus="" v-model="logform.useremail">
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
import axios from 'axios'
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
        // const self = this;
        // console.log(this.logform)
        let SignInfoNmae=this.logform.useremail
        let SignInfoPassword=this.logform.userpassword
        /*this.$ref.logform.validate((valid) => {
            if (valid) {
                localStorage.setItem('ms_username',this.logform.useremail);
                // this.$router.push('/PartTwo');
            } else {
                console.log('error singin !!');
                return false;
            }
        });*/

        axios.get('/static/resource/user.json').then((res)=>{
        
          this.$store.dispatch('saveUserInfo',res.data.userList)
        }).catch(err=>{
          console.log(err)
        })
        console.log(SignInfoNmae)
        if(SignInfoNmae!=''&&SignInfoPassword!=''){
          // axios.post('/static/resource/user.json',{param:this.logform}).then((res)=>{
            // console.log(res)
            
            console.log(this.$store.state.isgsw)
            this.$store.dispatch('signInType',this.logform.useremail);
          // })
        }
        // this.$cookie.set('session','SignInfo',{expires:1,path:'/',domain:'baidu.com',secure:true})
        this.$cookie.set('session','name=SignInfoNmae;password=SignInfoPassword',{expires:1})
        localStorage.setItem('ms_username',this.logform.useremail);
        return false
      }
    },
  }
</script>