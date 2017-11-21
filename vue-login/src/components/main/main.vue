<template>
   <div>
      <vheader></vheader>
      <div class="tab" ref="tab">
         <div class="bar" @click="show($event)">
            <span>系统管理</span>
            <i class="el-icon-arrow-right" v-show="iShow"></i><i class="el-icon-arrow-down" v-show="!iShow"></i>
         </div>
         <div v-show="slide">
            <router-link class="link" to="//page1" @click.native="link($event)">页面一</router-link>
            <router-link class="link" to="//page2" @click.native="link($event)">页面二</router-link>
            <router-link class="link" to="//page3" @click.native="link($event)">系统注册</router-link>
            <router-link class="link" to="//page4" @click.native="link($event)">页面三</router-link>
         </div>
      </div>
      <div class="bread">
         <el-breadcrumb separator="/">
            <!--<el-breadcrumb-item :to="{ path: '/main/page1' }">{{title}}</el-breadcrumb-item>-->
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{title1}}</el-breadcrumb-item>
         </el-breadcrumb>
      </div>
      <div class="main" ref="main">
         <keep-alive>
            <router-view></router-view>
         </keep-alive>
      </div>
   </div>
</template>

<script>
   import vheader from '../header/header.vue'
   import {mapGetters} from 'vuex'
   export default {
      name: 'HelloWorld',
      data () {
         return {
            title: '系统管理',
            title1: '',
            slide: false,
            iShow: true
         }
      },
      computed: {},
      mounted(){
         this.$refs.tab.style.height = window.innerHeight - 60 + 'px';
         this.$refs.main.style.height = window.innerHeight - 95 + 'px';
      },
      methods: {
         show(e){
            this.slide = !this.slide;
            this.title = e.target.innerHTML;
            this.iShow = !this.iShow
         },
         link(e){
            this.title1 = e.target.innerHTML;
         }
      },
      components: {
         vheader
      }
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
   .tab {
      width: 180px;
      background: #2a3542;
      position: fixed;
      top: 60px;
      left: 0;
      padding-top: 35px;
      .bar {
         background: #35404d;
         margin-bottom: 1px;
         span {
            display: inline-block;
            width: 155px;
            height: 35px;
            line-height: 35px;
            color: #fff;
            text-align: center;
            text-decoration: none;
            cursor: default;
            user-select: none;
         }
         i {
            color: #fff;
         }
      }
      a {
         display: inline-block;
         width: 180px;
         height: 35px;
         line-height: 35px;
         font-size: 14px;
         background: #35404d;
         color: #fff;
         margin-bottom: 1px;
         text-align: center;
         text-decoration: none;
         user-select: none;
      }
      a:focus {
         background: #13a1ee;
         text-decoration: none;
      }
   }

   .bread {
      margin-top: 60px;
      margin-left: 180px;
      height: 35px;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      padding-left: 10px;
      div {
         line-height: 35px;
      }
   }

   .main {
      margin-left: 180px;
   }
</style>
