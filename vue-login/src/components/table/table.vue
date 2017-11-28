<template>
   <div class="page1">
      <el-table
         ref="multipleTable"
         :data="tableData3.slice((currentPage-1)*pagesize,currentPage*pagesize)"
         border
         tooltip-effect="dark"
         style="width: 100%"
         @selection-change="handleSelectionChange">
         <el-table-column
            type="selection"
            width="55">
         </el-table-column>
         <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
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
      <div align="center">
         <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 50]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData3.length">
         </el-pagination>
      </div>
      <div style="margin-top: 10px">
         <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
         <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
   </div>
</template>

<script>
   import {mapGetters} from 'vuex'
   export default {
      name: 'page1',
      data () {
         return {
            tableData3: [{
               date: '2016-05-03',
               name: '王小虎',
               address: '上海市普陀区金沙江路 1518 弄'
            }, {
               date: '2016-05-02',
               name: '王小虎',
               address: '上海市普陀区金沙江路 1518 弄'
            }, {
               date: '2016-05-04',
               name: '王小虎',
               address: '上海市普陀区金沙江路 1518 弄'
            }, {
               date: '2016-05-01',
               name: '王小虎',
               address: '上海市普陀区金沙江路 1518 弄'
            }, {
               date: '2016-05-08',
               name: '王小虎',
               address: '上海市普陀区金沙江路 1518 弄'
            }, {
               date: '2016-05-06',
               name: '王小虎',
               address: '上海市普陀区金沙江路 1518 弄'
            }, {
               date: '2016-05-07',
               name: '王小虎',
               address: '上海市普陀区金沙江路 1518 弄'
            }, {
               date: '2016-05-07',
               name: '王小虎',
               address: '上海市普陀区金沙江路 1518 弄'
            }],
            multipleSelection: [],
            currentPage:1 ,
            pagesize: 10
         }
      },
      mounted(){

      },
      computed: {
         ...mapGetters([
            'count'
         ]),
         msg(){
            return 'welcome to itany';
         }
      },
      methods: {
         toggleSelection(rows) {
            if (rows) {
               rows.forEach(row => {
                  this.$refs.multipleTable.toggleRowSelection(row);
               });
            } else {
               this.$refs.multipleTable.clearSelection();
            }
         },
         handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(val)
         },
         handleSizeChange: function(val) {
            this.pagesize = val;
            this.loadData(this.criteria, this.currentPage, this.pagesize);
         },
         handleCurrentChange: function(val) {
            this.currentPage = val;
            this.loadData(this.criteria, this.currentPage, this.pagesize);
         },
      }
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
   .page1 {
      padding: 10px 10px 0;

   }
</style>
