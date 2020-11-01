import Vue from 'vue'
import App from './App.vue'
import router from './router'
import zealui from '../package/index'
import 'prismjs/prism.js'
import 'prismjs/themes/prism.css'


Vue.prototype.$message = zealui.Message
Vue.use(zealui)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
