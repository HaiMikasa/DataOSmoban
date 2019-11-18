import Vue from 'vue'
import router from '@/router/index'
import store from './store/index'
// import '@babel/polyfill'
import ElementUI from 'element-ui'
import App from './App.vue'
import _ from 'lodash'
import moment from 'moment'

import 'js/common/axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'css/common/reset.css'
import 'css/common/element-variables.sass'
import 'css/common/btn.less'

Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
})
Vue.prototype._ = _
Vue.config.productionTip = false

Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
