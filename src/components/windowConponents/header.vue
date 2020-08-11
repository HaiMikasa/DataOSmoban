<template>
  <el-header style="background-color: #1890ff">
    <div class="header-menu">
      <div class="img-box">

      </div>
      <h3 class="title">
        管理后台
      </h3>
      <i class="el-icon-s-fold header-icon"></i>
      <p class="Slogan">欢迎使用培训考试管理系统</p>
      <div class="header-right">
        <i class="el-icon-user-solid user-icon"></i>
        <p class="desc">欢迎您， admin</p>
        <span class="logout">退出登录</span>
      </div>
    </div>
  </el-header>
</template>

<script>
import { mapState } from 'vuex'
import baseUrl from '../../assets/js/common/env'
export default {
  name: 'headMenu',
  data () {
    return {
      baseUrl: baseUrl
    }
  },
  methods: {

  },
  mounted () {

  },
  watch: {

  }
}
</script>

<style scoped lang="less">
.header-menu {
  height: 100%;
  width: 100%;
  line-height: 60px;
  color: #ffffff;
  overflow: hidden;
  .img-box {
    position: relative;
    top: 12px;
    width: 36px;
    height: 36px;
    background-color: #ffffff;
    border-radius: 3px;
    display: inline-block;
  }
  .title {
    display: inline-block;
    margin-left: 20px;
  }
  .header-icon {
    font-size: 28px;
    margin-left: 60px;
    position: relative;
    top: 5px;
  }
  .Slogan {
    display: inline-block;
    margin-left: 30px;
  }
  .header-right {
    overflow: hidden;
    float: right;
    .user-icon {
      font-size: 28px;
      position: relative;
      top: 5px;
    }
    .desc {
      display: inline-block;
      margin-left: 20px;
    }
    .logout {
      margin-left: 60px;
      cursor: pointer;
    }
  }
}
</style>
