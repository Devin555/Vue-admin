<template>
   <div class="page1">
      <h3>页面一</h3>
      <!--<transition name="fade">-->
         <!--<div v-show="flag"></div>-->
      <!--</transition>-->

      <!--<transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">-->
         <!--<div v-show="flag"></div>-->
      <!--</transition>-->
      <button @click="flag=!flag">asdfasd</button>
      <div v-show="flag" class="animated shake">asdfasd</div>
   </div>
</template>

<script>
   import {mapGetters} from 'vuex'
   export default {
      name: 'page1',
      data () {
         return {
            flag: false,
            items: [
               {
                  name: 'jack',
                  id: 1
               },
               {
                  name: 'tom',
                  id: 2
               },
               {
                  name: 'lily',
                  id: 3
               }
            ]
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
      methods: {}
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
   .page1 {
      padding: 10px 10px 0;
      div {
         background: red;
         width: 300px;
         height: 300px;
      }
      .fade-enter-active, .fade-leave-active {
         transition: all 0.5s ease;

      }
      .fade-enter-active {
         opacity: 1;
         width: 300px;
         height: 300px;
      }
      .fade-leave-active{
         opacity: 0;
         width: 300px;
         height: 0;
      }
      .fade-enter{
         opacity: 0;
         width: 300px;
         height: 0;
      }
   }
</style>
