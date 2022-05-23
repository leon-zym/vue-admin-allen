export default {
  state: {
    isCollapse: false,
    tagList: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard'),
        meta: {
          title: '看板',
          icon: 's-data',
        },
      },
    ],
  },
  mutations: {
    COLLAPSESIDENAV(state) {
      state.isCollapse = !state.isCollapse
    },
    NAVCLICK(state, value) {
      const result = state.tagList.findIndex((item) => item.name === value.name)
      if (result === -1) {
        state.tagList.push(value)
      }
    },
  },
}
