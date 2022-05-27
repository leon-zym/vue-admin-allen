import Cookie from 'js-cookie'

export default {
  state: {
    token: '',
  },
  mutations: {
    SET_TOKEN(state, value) {
      state.token = value
      Cookie.set('token', value)
    },
    // 如果state中有token，则不变。如果页面刷新后state被清空，则从cookie中获取token赋值
    GET_TOKEN(state) {
      state.token = state.token || Cookie.get('token')
    },
    CLEAR_TOKEN(state) {
      state.token = ''
      Cookie.remove('token')
    },
  },
}
