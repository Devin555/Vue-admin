<template>
	<div class="getPicture">
		<a type="button" @click="printqq">截取图片并且下载</a>
		<div class="pic">
			<div class="table">
				<img src="../../../static/img/22f8af4b9fac4b9549fa42ccc041d89d.jpg">
			</div>
			<div class="table01"></div>
		</div>
	</div>
</template>

<script>
	import html2canvas from '../../../static/js/html2canvas.js'
	export default {
		name: 'page4',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted(){

		},
		methods: {
			printqq(){
				html2canvas($("div.pic"),
						{
							width: $("div.pic").outerWidth() + 500,
							height: $("div.pic").outerHeight() + 600,
							onrendered(canvas) {
								var url = canvas.toDataURL();
								//以下代码为下载此图片功能
								var triggerDownload = $("<a>").attr("href", url).attr("download","sadf.png").appendTo("body");
								triggerDownload[0].click();
								triggerDownload.remove();
							}
						});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
	.getPicture {
		padding: 10px 10px 0;
		a {
			text-decoration: none;
			border: 1px solid grey;
			background: grey;
			border-radius: 3px;
			height: 35px;
			line-height: 35px;
			color: #fff;
			padding: 5px;
			cursor: pointer;
			font-size: 13px;
		}
	}

	.pic {
		margin: 50px auto;
		width: 500px;
		height: 300px;
		overflow: scroll;
	}

	.table {
		width: 500px;
		height: 300px;
		background: red;
		border-radius: 20px;
		border: 1px solid black;
		img{
			width: 500px;
			height: 300px;
		}
	}

	.table01 {
		width: 500px;
		height: 300px;
		border: 1px solid black;
		background: greenyellow;
	}
</style>
