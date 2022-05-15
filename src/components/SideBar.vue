<template>
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3 class="sidebar-header">通用后台管理系统</h3>
    <el-menu-item
      v-for="item in noChildren"
      :key="item.path"
      :index="item.path"
      @click="handleMenuClick(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in hasChildren"
      :key="item.path"
      :index="item.path"
      @click="handleMenuClick(item)"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item
        v-for="subitem in item.children"
        :index="subitem.path"
        :key="subitem.path"
        @click="handleMenuClick(subitem)"
        >{{ subitem.label }}</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    noChildren() {
      return this.$router.options.routes.filter(
        // 过滤出没有子路由的，以及”/“根路由
        (item) => !item.children && item.path !== "/"
      );
    },
    hasChildren() {
      // 过滤出有子路由的
      return this.$router.options.routes.filter((item) => item.children);
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleMenuClick(item) {
      this.$router.push({
        name: item.name,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  border: 0;
  .sidebar-header {
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #fff;
    padding: 15px 0 15px;
  }
}
</style>