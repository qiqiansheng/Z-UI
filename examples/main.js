import Vue from 'vue'
import App from './App.vue'
import router from './router'
import zealui from '../package/index'
import 'prismjs/prism.js'
import 'prismjs/themes/prism.css'

// 引入 zeal
Vue.use(zealui)
Vue.prototype.$message = zealui.Message

// 使用eventBus在组件之间传递数据
var eventBus = new Vue()
eventBus.isMenuShow = false
Vue.prototype.$eventBus = eventBus

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
