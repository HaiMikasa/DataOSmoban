/**
 * Created by xjc on 2019/11/15.
 */
export default {
  changeBreadcrumb (context, crumb) {
    context.commit('changeBreadcrumb', crumb)
  },
  changeSearchObject (context, obj) {
    context.commit('changeSearchObject', obj)
  }
}
