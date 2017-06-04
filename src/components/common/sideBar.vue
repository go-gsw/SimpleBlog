<template>
	<div class="event-tools" :class="isShow">
		<span class="glyphicon glyphicon-align-justify" @click="showTools"></span>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	data(){
		return {
			// isShow:false
		}
	},
	computed:{
		isShow(){
			console.log(this.$store.getters.ischangeTools+'2');
			console.log(this.$store)
			return {
				'show-out': this.$store.getters.ischangeTools
			}
		}
		
		// ...mapGetters(['ischangeTools'])
		// ...mapGetters({
		// 	isShow:'ischangeTools'
		// })
	},
	methods:{
		showTools(){
			// this.isShow=!this.isShow
			this.$store.dispatch('changetools')
		}
	}

}

</script>

<style scoped lang="scss">
	@media (max-width:768px){
		$width:calc(50vw);
	}
	$width:300px;
	$contentpadding:50px;
	.event-tools{
		display: block;
		position: fixed;
		z-index: 9;
		top:0;
		right:0;
		bottom: 0;
		width:$width;
		height: 100%;
		padding:$contentpadding;
		box-sizing: border-box;
		transform: translateX($width);
		transition: all .3s;
		background-color: #ccc;
		&.show-out{
			transform: translateX(0);
			box-shadow: -5px 0 10px #aaa;
		}
	}
</style>