<template>
	<div class="export_excel">
		<h4>安装依赖</h4>
		<p> npm install -S file-saver xlsx</p>
		<p> npm install -D script-loader</p>
		<p> 项目中新建一个文件夹：（vendor—名字任取）里面放置两个文件Blob.js和 Export2Excel.js。</p>
		<br>
		<el-button @click="export2Excel">导出excel</el-button>
		<el-table
				ref="singleTable"
				:data="tableData"
				highlight-current-row
				@current-change="handleCurrentChange"
				style="width: 100%">
			<el-table-column
					type="index"
					width="50">
			</el-table-column>
			<el-table-column
					property="ID"
					label="ID"
					width="60">
			</el-table-column>
			<el-table-column
					property="imsi"
					label="IMSI"
					width="120">
			</el-table-column>
			<el-table-column
					property="address"
					label="地址">
			</el-table-column>
			<el-table-column
					property="name"
					label="姓名"
					width="120">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data () {
			return {
				tableData: [{
					ID: 12,
					imsi: 'aaa',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					ID: 322,
					imsi: 'aaa',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					ID: 33,
					imsi: 'aaa',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					ID: 34,
					imsi: 'aaa',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					ID: 523,
					imsi: 'aaa',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				SelectList:[]
			}
		},
		methods: {
			handleCurrentChange(val) {
				this.SelectList = val;
			},
			export2Excel() {
				require.ensure([], () => {
					const {export_json_to_excel} = require('../../vendor/Export2Excel');
					const tHeader = ['ID', 'IMSI', '地址', '姓名'];
					const filterVal = ['ID', 'imsi', 'address', 'name'];
					const list = this.tableData;
					const data = this.formatJson(filterVal, list);
					export_json_to_excel(tHeader, data, '列表excel');
				})
			},
			formatJson(filterVal, jsonData) {
				return jsonData.map(v => filterVal.map(j => v[j]))
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
	.export_excel {
		padding: 10px 10px 0;
	}
</style>
