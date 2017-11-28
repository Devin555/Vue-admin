<template>
	<div class="exportZip">
		<el-button style='margin-bottom:20px;' type="primary" icon="document" @click="handleDownload"
		           :loading="downloadLoading">导出zip
		</el-button>
		<el-table
				ref="singleTable"
				:data="list"
				border
				highlight-current-row
				@current-change="handleCurrentChange"
				style="width: 100%">
			<el-table-column type="index" width="50" align="center"></el-table-column>
			<el-table-column property="name" label="姓名" width="120" align="center"></el-table-column>
			<el-table-column property="ID" label="ID" width="80" align="center"></el-table-column>
			<el-table-column property="imsi" label="IMSI" width="150" align="center"></el-table-column>
			<el-table-column property="address" label="地址"></el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data () {
			return {
				downloadLoading: false,
				list: [{
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
				}]
			}
		},
		methods: {
			handleCurrentChange(val) {
				this.SelectList = val;
			},
			handleDownload() {
				this.downloadLoading = true;
				require.ensure([], () => {
					const {export_txt_to_zip} = require('../../vendor/Export2Zip');
					const tHeader = ['ID', 'imsi', '姓名', '地址'];
					const filterVal = ['ID', 'imsi', 'name', 'address'];
					const list = this.list;
					const data = this.formatJson(filterVal, list);
					export_txt_to_zip(tHeader, data, '列表文本', '压缩文本');
					this.downloadLoading = false
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
	.exportZip {
		padding: 10px 10px 0;
	}
</style>
