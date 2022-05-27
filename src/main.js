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

// 路由守卫
router.beforeEach((to, from, next) => {
  store.commit('GET_TOKEN')
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next('/login')
  } else if (token && to.name === 'login') {
    next('/')
  } else {
    next()
  }
})

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
