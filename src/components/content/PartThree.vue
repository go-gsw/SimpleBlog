<template>
	<div class="PartThree">
		<div id="section_1">
			<video class="playmovie" width="100%" autoplay controls>
				<source src="../../../static/video/hhah.mp4">
			</video>
		</div>
		<div id="section-2"></div>
	</div>
</template>

<script>
export default {
	name:'PartThree',
	date(){

	}
}
</script>
<style scoped>
	#section_1{
		height: 2000px;
		background-color: #333;
		display: flex;
	}
	#section_1 .palymovie{
		position: relative;
		z-index: 10;
	}
	#section-2{
		height: 400px;
		background-color: #444;
	}
</style>