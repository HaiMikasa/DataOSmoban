<template>
  <el-container class="main" direction="vertical">
    <router-view/>
  </el-container>
</template>

<script>
export default {
  name: 'noAuthorityLayout',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
  .main {
    background-color: #dfe6eb;
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>
