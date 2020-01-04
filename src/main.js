import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//  导入按需加载 vant 组件
import '../plugins/vant'
// 导入axios
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
