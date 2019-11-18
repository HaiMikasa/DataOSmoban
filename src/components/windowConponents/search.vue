<template>
  <div class="search-input" v-if="searchObjectTemp.visible">
    <el-input class="search-home-input" :placeholder="searchObjectTemp.placeholder"
              type="text" maxlength="50" v-model="query.content" @keyup.enter.native="search">
      <img src="../../assets/images/components/search-icon.png" style="margin: 6px 10px 0 0;" @click="search" slot="suffix" alt="">
    </el-input>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'search',
  props: ['windowFrom'],
  data () {
    return {
      query: {
        content: ''
      },
      placeholder: '',
      searchLog: [], // 搜索日志
      searchObjectTemp: {}
    }
  },
  mounted () {

  },
  methods: {
    search () {
      // 添加时间戳
      this.searchLog.push(new Date())
      if (this.searchLog.length >= 4) {
        this.searchLog.length > 4 ? this.searchLog = this.searchLog.splice(1, 4) : ''
        if (this.searchLog[3].getTime() - this.searchLog[0].getTime() < 3000) {
          // 如果第一个的时间戳和第四个相差在3秒内，则给出操作频发的提示
          this.$message.warning('操作过于频繁，请稍后～')
        } else {
          this.list()
        }
      } else {
        this.list()
      }
    },
    list () {
      this.changeSearchObject({
        visible: this.searchObject.visible, // 是否显示搜索框
        placeholder: this.searchObject.placeholder,
        searchContent: this.query.content, // 搜索关键字
        searchPageName: this.searchObject.searchPageName, // 搜索跳转页面
        isSearch: true
      })
    },
    ...mapActions(['changeSearchObject'])
  },
  computed: {
    ...mapState([
      'searchObject'
    ])
  },
  watch: {
    searchObject: {
      handler (obj) {
        this.query.content = obj.searchContent
        this.searchObjectTemp = obj
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="less">
  .search-input {
    width: 240px;
    height: 30px;
    .search-home-input {
      width: 100%;
    }
  }
</style>
