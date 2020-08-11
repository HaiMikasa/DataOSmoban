<template>
  <el-container class="main" direction="vertical">
    <header-menu
      :menuList="menuList"
    ></header-menu>
    <breadcrumb></breadcrumb>
    <el-main>
      <el-container style="height: 100%" direction="vertical">
        <el-container>
          <el-main style="padding: 0;">
            <router-view :key="$route.fullPath"/>
          </el-main>
        </el-container>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import headerMenu from '../../components/windowConponents/header'
import breadcrumb from '../../components/windowConponents/breadcrumb'
export default {
  name: 'layout',
  components: {
    headerMenu,
    breadcrumb
  },
  provide () {
    return {
      // 子组件可通过此方法刷新左侧树
      reload: this.reload
    }
  },
  data () {
    return {
      menuList: [],
      isAccessManager: false
    }
  },
  filters: {

  },
  watch: {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">
  .main {
    background-color: #f2f6f7;
    position: absolute;
    // height: 100%;
    height: 100vh;
    width: 100%;
  }
</style>
