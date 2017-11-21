<template>
   <div class="header">
      <span class="logo">Google</span>
      <el-dropdown @command="handleCommand" class="signout">
      <span class="el-dropdown-link">
        个人中心<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
         <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">个人信息</el-dropdown-item>
            <el-dropdown-item command="2">退出</el-dropdown-item>
         </el-dropdown-menu>
      </el-dropdown>
   </div>
</template>

<script>
   export default {
      name: 'header',
      data () {
         return {}
      },
      created(){
      },
      computed: {},
      components: {},
      methods: {
         handleCommand(command) {
            if (command == 1) {
               alert(111)
            } else if (command == 2) {
               window.localStorage.setItem('TOKEN', "");
               this.$router.push({path: 'login'})
            }
         }
      }
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
   .header {
      width: 100%;
      height: 60px;
      background: #3399cc;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      .signout {
         color: #fff;
         cursor: pointer;
         float: right;
         margin-top: 20px;
         margin-right: 15px;
      }
      .logo {
         display: inline-block;
         width: 180px;
         height: 60px;
         line-height: 60px;
         text-align: center;
         font-size: 25px;
         color: #fff;
         font-weight: 600;
         user-select: none;
      }
   }
</style>
