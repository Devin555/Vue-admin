<template>
   <div id="app">
      <router-view></router-view>
   </div>
</template>

<script>
   export default {
      name: 'app',
      data () {
         return {
            msg: 'Welcome to Your Vue.js App'
         }
      },
      mounted() {
      },
      watch: {},
      components: {}
   }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
