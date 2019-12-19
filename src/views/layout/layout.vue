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
import { mapActions } from 'vuex'
import { authPermissons } from '../../assets/js/api/home'
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
  mounted () {
    authPermissons({
      projectId: '666662b023124106b2ffbfc5eac66666'
    }).then((res) => {
      if (res.code === 200) {
        this.menuList = []
        _.forEach(res.result.data.menuResourceList, (res) => {
          // 给对应的模块添加路由跳转地址
          if (res.code === 'A034') {
            // 应用清单
            res.pageName = 'appListPage'
          } else if (res.code === 'A030') {
            // 外链管理
            res.pageName = 'linksManager'
          }
          // 把有权限的过滤出来传给顶部组件
          if (res.checked === '1') {
            this.menuList.push(res)
          }
        })
        this.changeMenuList(this.menuList)
      } else {
        this.$message.error(res.message)
      }
    })
      .catch((err) => {
        console.log(err)
      })
  },
  filters: {

  },
  watch: {

  },
  methods: {
    ...mapActions(['changeMenuList'])
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
