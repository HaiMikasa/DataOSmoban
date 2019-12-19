<template>
  <el-header style="height: 132px;">
    <div class="header-menu">
     <!--  <div class="menu-item" v-for="(item,index) in menuList" @mouseenter="menuHover(index)" @mouseleave="menuOut(index)" @click="menuClick(index,item)"
      :class="clickArray[index] && !item.handleDisabled ? 'active' : ''">
        <img v-if="clickArray[index] || hoverArray[index]" :src="item.hovericon" alt="">
        <img v-else-if="item.handleDisabled" :src="item.hovericon">
        <img v-else :src="item.icon" alt="">
        <p :class="item.handleDisabled ? 'disabledText' : ''">{{item.name}}</p>
      </div> -->
      <div class="menu-item" v-for="(item,index) in menuList" @mouseenter="menuHover(index)" @mouseleave="menuOut(index)" @click="menuClick(index,item)"
      :class="[{active: clickArray[index] && !item.handleDisabled},{disabledItem:item.handleDisabled}]">
        <img v-if="clickArray[index] || hoverArray[index]" :src="item.hovericon" alt="">
        <img v-else-if="item.handleDisabled" :src="item.hovericon">
        <img v-else :src="item.icon" alt="">
        <p :class="item.handleDisabled ? 'disabledText' : ''">{{item.name}}</p>
      </div>
    </div>
  </el-header>
</template>

<script>
import { mapState } from 'vuex'
import baseUrl from '../../assets/js/common/env'
export default {
  name: 'headMenu',
  props: ['menuList'],
  computed: {
    ...mapState(['breadcrumb'])
  },
  data () {
    return {
      hoverArray: [], // hover状态数组
      clickArray: [], // click状态数组
      baseUrl: baseUrl
    }
  },
  methods: {
    menuHover (index) {
      // 菜单移入事件
      this.hoverArray[index] = true
      // 强制刷新解决数组不更新的问题
      this.$forceUpdate()
    },
    menuOut (index) {
      // 菜单移出事件
      this.hoverArray[index] = false
      // 强制刷新解决数组不更新的问题
      this.$forceUpdate()
    },
    menuClick (index, item) {
      // 菜单点击事件
      if (!item.handleDisabled) {
        _.forEach(this.menuList, (value, key) => {
          key === index ? this.clickArray[key] = true : this.clickArray[key] = false
        })
        this.$emit('changePageName', this.menuList[index].pageName)
      }
    }
  },
  mounted () {
    if (this.menuList.length > 0) {
      _.forEach(this.menuList, (value, index) => {
        this.hoverArray[index] = false
        if (index === 0) {
          // 将菜单第一个置为选中并跳转到其路由地址
          this.clickArray[index] = true
        } else {
          this.clickArray[index] = false
        }
        this.$forceUpdate()
      })
    }
  },
  watch: {
    breadcrumb: {
      handler (crumb) {
        const index = _.findIndex(this.menuList, { pageName: crumb[1].pageName })
        _.forEach(this.menuList, (value, key) => {
          key === index ? this.clickArray[key] = true : this.clickArray[key] = false
        })
        this.$forceUpdate()
      },
      deep: true
    },
    '$route.path': function (newVal, oldVal) {
      if (newVal.indexOf('appListPage') > -1) {
        // 如果当前路由在应用清单下
        const index = _.findIndex(this.menuList, { name: '应用清单' })
        this.clickArray[index] = true
      } else if (newVal.indexOf('linksManager') > -1) {
        // 如果当前路由在外链管理下
        const index = _.findIndex(this.menuList, { name: '外链管理' })
        this.clickArray[index] = true
      }
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped lang="less">
  .header-menu {
    padding-top: 20px;
    overflow: hidden;
    .menu-item {
      float: left;
      margin-right: 30px;
      width: 92px;
      height: 72px;
      border-radius: 6px;
      box-shadow: 0px 0px 17px 1px rgba(226,226,226,0.22);
      background-color: #ffffff;
      color: #354052;
      cursor: pointer;
      text-align: center;
      padding-top: 18px;
      img {
        // width: 30px;
        height:30px;
      }
      p {
        margin-top: 10px;
      }
      .disabledText{
        color:#AFB9C0
      }
      &:hover{
        background-color: #39A5BC;
        color: #ffffff;
      }
      &.active {
        background-color: #39A5BC;
        color: #ffffff;
      }
      &.disabledItem{
        background-color: #ffffff;
        color: #AFB9C0;
        cursor: default;
      }
      &.disabled {
        background: rgba(242, 246, 247, 1);
        box-shadow: 0 0 17px 1px rgba(226, 226, 226, .22);
        color: #AFB9C0;
      }
    }
  }
</style>
