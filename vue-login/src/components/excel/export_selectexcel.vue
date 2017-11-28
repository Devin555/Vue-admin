<template>
	<div class="select_list">
		<h4>导出已选择项</h4>
		<el-button @click="export2Excel">导出选中为excel</el-button>
		<el-table
				ref="multipleTable"
				:data="tableData"
				border
				tooltip-effect="dark"
				style="width: 100%"
				@selection-change="handleSelectionChange">
			<el-table-column
					type="selection"
					width="55">
			</el-table-column>
			<el-table-column
					prop="ID"
					label="ID"
					width="100">
			</el-table-column>
			<el-table-column
					prop="imsi"
					label="IMSI"
					width="100">
			</el-table-column>
			<el-table-column
					prop="name"
					label="姓名"
					width="120">
			</el-table-column>
			<el-table-column
					prop="address"
					label="地址"
					show-overflow-tooltip>
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
				SelectList: []
			}
		},
		methods:{
			handleSelectionChange(val) {
				this.SelectList = val;
			},
			export2Excel() {
				require.ensure([], () => {
					const {export_json_to_excel} = require('../../vendor/Export2Excel');
					const tHeader = ['ID', 'IMSI', '地址', '姓名'];
					const filterVal = ['ID', 'imsi', 'address', 'name'];
					const list = this.SelectList;
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
	.select_list{
		padding: 10px 10px 0;
	}
</style>
