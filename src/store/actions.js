/**
 * Created by xjc on 2019/11/15.
 */
export default {
  changeBreadcrumb (context, crumb) {
    context.commit('changeBreadcrumb', crumb)
  },
  changeSearchObject (context, obj) {
    context.commit('changeSearchObject', obj)
  },
  changeMenuList (context, obj) {
    context.commit('changeMenuList', obj)
  },
  getSystemFrom ({ commit }, from) {
    // 获取系统来源（用作确认跳转来源为应用管理或无数据页面）
    commit('addSystemFrom', from)
  }
}
