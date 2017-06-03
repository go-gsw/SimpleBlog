<template>
	<div class="event-tools" :class="isShow">
		<span @click="showTools">哈哈</span>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
// import { ischangeTools } from '../store/getters.js'
export default {
	data(){
		return {
			// isShow:false
		}
	},
	computed:{
		isShow(){console.log(this.$store);
			return {
				'show-out':this.$store.getters.ischangeTools
			}
		}
		// isShow(){
			// return this.$store.getters.ischangeTools
			// return this.$store.state.isShow
		// }
		// ...mapGetters(['ischangeTools'])
	},
	methods:{
		showTools(){
			// this.isShow=!this.isShow
			this.$store.dispatch('changeTools')
		}
	}

}
</script>

<style scoped lang="scss">	
	.event-tools{
		display: block;
		position: fixed;
		top:0;
		right:0;
		bottom: 0;
		width:300px;
		height: 100%;
		padding: 100px 50px 50px;
		box-sizing: border-box;
		transform: translateX(300px);
		transition: all .3s;
		background-color: #ccc;
		&.show-out{
			transform: translateX(0)
		}
	}
</style>