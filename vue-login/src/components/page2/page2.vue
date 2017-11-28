<template>
	<div class="page2">
		<vue-html5-editor :height="300" :content="content" @change="updateData" ref="editor"></vue-html5-editor>
	</div>
</template>

<script>
	export default {
		name: 'page2',
		data () {
			return {
				content: "<h3>this is vue-html5-editor</h3>"
			}
		},
		computed: {},
		mounted(){

		},
		methods: {
			updateData(){

			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
	.page2 {
		padding: 10px 10px 0;
	}
</style>
