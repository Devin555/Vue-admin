<template>
   <div class="logintmpl">
      <div class="login">
         <el-form ref="form" label-width="60px">
            <el-form-item label="姓名">
               <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
               <el-input v-model="password"></el-input>
            </el-form-item>
            <el-form-item>
               <el-button type="primary" @click="confirm" size="medium">登 录</el-button>
            </el-form-item>
         </el-form>
      </div>
   </div>
</template>

<script>
   let Base64 = require('js-base64').Base64;
   import {mapGetters} from 'vuex'
   export default {
      name: 'HelloWorld',
      data () {
         return {
            username: '',
            password: '',
            keyPassword: '',
            token: ''
         }
      },
      computed: {},
      methods: {
         getUserInfo(){
            this.$http.get('http://10.129.4.97:9001/api/ac/check_token',
               {
                  headers: {"X-CSRFToken": this.token}
               }
            ).then((res)=> {
               window.localStorage.setItem('TOKEN', this.token);
               this.$router.push({path: '/'})
            }).catch((err)=> {
               alert(err.data)
            });
         },
         confirm(){
            this.keyPassword = Base64.encode(this.password);
            this.$http.post('http://10.129.4.97:9001/api/ac/login',
               {
                  'username': this.username,
                  'password': this.keyPassword,
                  'PID': 17072501
               },
            ).then((res)=> {
               this.token = "TOKEN=" + res.data.TOKEN + ";PID=17072501";
               this.getUserInfo();
            }).catch((err)=> {
               alert(err.data)
            });
         }
      },
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
   .logintmpl {
      height: 500px;
      background-size: 100%;
      background: url("../../../static/img/login01.jpg") repeat;
   }

   .login {
      border: 1px solid grey;
      border-radius: 4px;
      position: absolute;
      width: 356px;
      height: 200px;
      top: 45%;
      left: 35%;
      margin-top: -150px;
      margin-left: -174px;
      padding: 50px 15px 0;
      .el-form-item__label {
         text-align: center;
         font-weight: 600;
         font-size: 15px;
      }
   }
</style>
