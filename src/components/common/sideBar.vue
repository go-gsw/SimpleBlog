<template>
	<div class="event-tools" :class="isShow">
		<!-- <span class="glyphicon glyphicon-align-justify" @click="showTools"></span> -->
		<div class="userImg">
			
		</div>
		<div class="h2" style="text-overflow: ellipsis;">{{Name}}</div>
		<!-- <span>{{userInfo.name}}</span> -->
		<div class="signout" @click="signout">Sign out</div>
	</div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
export default {
	data(){
		return {
			// isShow:false
		}
	},
	mounted(){
		this.getUserInfo()
	},
	methods:{
		getUserInfo(){
			this.userInfo={
				name:"gsw",
				age:"21",
				male:"male",
				icon:""
			};
			axios.get('',{'params':this.userInfo}).then((res)=>{

				
			}).catch(err=>{
				console.log(err)
			})
		},
		showTools(){
			this.$store.dispatch('changetools')
		},
		signout(){
			this.$store.dispatch('changetools')
			this.$store.dispatch('Signout')
			localStorage.removeItem('ms_username')
		}
	},
	computed:{
		isShow(){
			// console.log(this.$store.getters.ischangeTools+'2');
			// console.log(this.$store)
			return {
				'show-out': this.$store.getters.ischangeTools
			}
		},
		Name(){
			// return localStorage.getItem('ms_username')||'账号'
			let uname=localStorage.getItem('ms_username').toString();
			return uname.split('@')[0]||'账号'
		}
		
		// ...mapGetters(['ischangeTools'])
		// ...mapGetters({
		// 	isShow:'ischangeTools'
		// })
	}

}

</script>

<style scoped lang="scss">
	$width:300px;
	$minwidth:100px;
	$contentpadding:50px;
	$boxshadow:5px;
	@media (max-width:768px){
		$width:100px;
		$contentpadding:20px;
		$boxshadow:2px;
	}
	// @mixin 
	.event-tools{
		display: block;
		position: fixed;
		cursor:pointer;
		z-index: 11;
		top:0;
		right:0;
		bottom: 0;
		width:$width;
		// @media (max-width:768px){
		// 	width:$minwidth;
		// }
		height: 100%;
		padding:$contentpadding;
		box-sizing: border-box;
		transform: translateX($width);
		transition: all .3s;
		background-color: #ccc;
		&.show-out{
			transform: translateX(0);
			box-shadow: -$boxshadow 0 $boxshadow*2 #aaa;
		}
	}
	.userImg{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color:#aaa;
		display: inline-block;
	}

	.signout{
		width: 80px;
		height: 30px;
		line-height: 30px;
		margin: auto;
		left: 0;
		right: 0;
		background-color: #bbb;
		position:absolute;
		// display: block;
		bottom:50px;
	}
</style>