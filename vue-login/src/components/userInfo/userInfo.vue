<template>
	<div class="userInfo">
		<h3>个人信息中心</h3>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
	.userInfo {
		height: 100%;
		width: 50%;
		background: #ccc;
		margin: 0 auto;
		text-align: center;
		h3 {
			margin: 0;
			padding: 0;
		}
	}

</style>
