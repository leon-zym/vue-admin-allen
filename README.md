# 项目介绍

该项目作为⼀款电商后台管理系统，拥有商品数据可视化看板⻚，⽤户增删改查管理⻚，管理员登录⻚等。

# 技术栈

• 使⽤的技术栈有：Vue2 + ElementUI + Echarts + VueRouter + Vuex + Axios + Mock.js 等。
• 使⽤ ElementUI 快速搭建⻚⾯结构，同时配合 Less 调整组件的默认样式。
• 对 Axios ⼆次封装，添加上 baseURL 和请求响应拦截器，对请求 API 也统⼀管理，⽅便后续迭代维护。
• 开发⽤户登录模块时，使⽤ Cookie 存储 Token。同时根据⽤户的权限动态路由跳转，并获取不同⻚⾯。