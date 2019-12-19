<template>
  <div style="width: 100%;height: 100%">
    <img style="width: 100%;height: 100%" src="../../assets/images/home/jurisdiction.png" alt="">
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  mounted () {
    this.getSystemFrom('noAuthority')
  },
  methods: {
    ...mapActions([
      'getSystemFrom'
    ])
  }
}
</script>
<style scoped>
  /deep/ .el-main {
    padding: 0;
  }
</style>
