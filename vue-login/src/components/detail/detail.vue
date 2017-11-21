<template>
  <div class="detail" v-show="detailShow">
    xiangqingye
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'HelloWorld',
    data () {
      return {
      }
    },
    computed:{
      ...mapGetters([
        'detailShow'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  .detail {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 666;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
  }
</style>
