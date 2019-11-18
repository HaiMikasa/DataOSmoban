<template>
  <div style="position: relative;overflow: hidden">
    <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
      <p class="app-breadcrumb-p">您的位置：</p>
      <transition-group name="breadcrumb">
        <el-breadcrumb-item
          v-for="(item,index) in levelList"
          :key="item.title"
        >
          <span
            v-if="item.redirect==='noRedirect'|| index==levelList.length-1"
            class="no-redirect"
          >{{ item.title }}</span>
          <a v-else @click.prevent="handleLink(item)">{{ item.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
    <div class="search-box">
      <searchBox :windowFrom="windowFrom"></searchBox>
    </div>
  </div>
</template>

<script>
import searchBox from './search'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'breadcrumb',
  props: ['windowFrom'],
  data () {
    return {
      levelList: []
    }
  },
  components: {
    searchBox
  },
  computed: {
    ...mapState(['breadcrumb'])
  },
  mounted () {
    this.levelList = this.breadcrumb
  },
  methods: {
    handleLink (item) {
      this.$route.push(item.pageName)
    },
    breadNameFormat (arr) {
      let tempName = ''
      _.forEach(arr, (value, index) => {
        if (index < arr.length - 1) {
          tempName += (value.title + '>')
        } else {
          tempName += value.title
        }
      })
      return tempName
    }
  },
  watch: {
    breadcrumb: {
      handler (arr) {
        this.levelList = arr
        const breadName = []
        _.forEach(this.levelList, function (value, key) {
          breadName.push(value.meta.title)
        })
        window.parent.postMessage({ type: 'windowName', newData: { windowName: breadName.join('>'), systemName: 'appManager' } }, '*')
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    font-size: 14px;
    line-height: 50px;
    color: #354052;
    font-weight: 400;
    font-family: MicrosoftYaHei;
    background-color: #fff;
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;
    border-bottom:1px solid #CADBDF;
    .app-breadcrumb-p {
      margin-right: 20px;
    }
  }
  /deep/.el-breadcrumb__inner a, /deep/.el-breadcrumb__inner.is-link {
    font-weight: normal;
    color: #7F8FA4;
  }
  .app-breadcrumb.el-breadcrumb .no-redirect {
    color: #303133;
    cursor: text;
  }

  /* breadcrumb transition */
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all 0.5s;
  }

  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .breadcrumb-move {
    transition: all 0.5s;
  }

  .breadcrumb-leave-active {
    position: absolute;
  }
  .search-box {
    position: absolute;
    right: 30px;
    top: 9px;
  }
</style>
