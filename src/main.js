import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import http from 'axios'

import App from './App.vue'

import router from './router'
import store from './store'
import '../api/mock'

Vue.use(ElementUI)
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
