/**
 * Created by xjc on 2019/11/15.
 */
export default {
  changeBreadcrumb (state, value) {
    state.breadcrumb = value
  },
  changeSearchObject (state, obj) {
    state.searchObject = obj
  },
  changeMenuList (state, obj) {
    state.menuList = obj
  },
  addSystemFrom (state, val) {
    state.systemFrom = val
  },
}
