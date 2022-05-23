<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <h3 class="side-nav-header">
      {{ isCollapse ? '后台' : '后台通用管理系统' }}
    </h3>
    <el-menu-item
      v-for="item in noChildren"
      :key="item.path"
      :index="item.path"
      @click="handleNavClick(item)"
    >
      <i :class="'el-icon-' + item.meta.icon"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :key="item.path" :index="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <el-menu-item
        v-for="subitem in item.children"
        :index="subitem.path"
        :key="subitem.path"
        @click="handleNavClick(subitem)"
      >
        <i :class="'el-icon-' + subitem.meta.icon"></i>
        <span>{{ subitem.meta.title }}</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'SideNav',
  computed: {
    // FIXME 狗屎逻辑，以后修复
    // 返回需要在页面上展示的导航项
    navItems() {
      return this.$router.options.routes.filter((item) => item.path === '/')
    },
    noChildren() {
      // 返回没有二级菜单的
      return this.navItems[0].children.filter((item) => !item.children)
    },
    hasChildren() {
      // 过滤出有二级菜单的
      return this.navItems[0].children.filter((item) => item.children)
    },
    isCollapse() {
      return this.$store.state.nav.isCollapse
    },
  },
  methods: {
    handleNavClick(item) {
      this.$router.push({
        name: item.name,
      })
      this.$store.commit('NAVCLICK', item)
    },
  },
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu {
  height: 100%;
  .side-nav-header {
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    white-space: nowrap;
    color: #fff;
    padding: 15px 0 15px;
    cursor: default;
  }
}
</style>
