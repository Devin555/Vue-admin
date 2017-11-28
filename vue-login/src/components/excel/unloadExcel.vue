<template>
	<div class="unloadExcel">
		<h4>选择excel，将其渲染为页面表格</h4>
		<upload-excel @on-selected-file='selected'></upload-excel>
		<el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
			<el-table-column v-for='item of tableHeader' :prop="item" :label="item" :key='item'>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import uploadExcel from './index.vue'
	export default {
		name: 'HelloWorld',
		data () {
			return {
				tableData: [],
				tableHeader: []
			}
		},
		methods: {
			selected(data) {
				this.tableData = data.results;
				this.tableHeader = data.header
			}
		},
		components: {uploadExcel}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
	.unloadExcel{
		padding: 10px 10px 0;
	}
</style>
