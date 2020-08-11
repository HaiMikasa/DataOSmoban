<template>
  <el-aside width="200px" style="background-color: #ffffff">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-folder"></i>
          <span>培训课程</span>
        </template>
        <el-menu-item index="courseClassify">课程分类</el-menu-item>
        <el-menu-item index="courseManage">课程管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'asideMenu',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      this.$router.push({ name: key })
    }
  }
}
</script>

<style scoped>

</style>
