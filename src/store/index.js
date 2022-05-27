import Vue from 'vue'
import Vuex from 'vuex'
import nav from './nav'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    nav,
    user,
  },
})
