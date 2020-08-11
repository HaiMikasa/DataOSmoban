import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  breadcrumb: [], // 面包屑
  searchObject: {
    visible: false, // 是否显示搜索框
    placeholder: '',
    searchContent: '', // 搜索关键字
    searchPageName: '', // 搜索跳转页面
    isSearch: false // 是否进行搜索
  } // 搜索组件对象
}
