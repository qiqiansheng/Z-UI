import Vue from 'vue'
import App from './App.vue'
import router from './router'
import zui from '../package/index'
Vue.prototype.$message = zui.Message
Vue.use(zui)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
