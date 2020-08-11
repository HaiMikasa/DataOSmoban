<template>
  <el-container class="main" direction="vertical">
    <header-nav></header-nav>
    <el-container>
      <aside-menu></aside-menu>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import headerNav from '../../components/windowConponents/header'
import asideMenu from '../../components/windowConponents/asideMenu'
import { mapActions } from 'vuex'
export default {
  name: 'layout',
  components: {
    headerNav,
    asideMenu
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
  mounted () {

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
