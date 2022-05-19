<template>
  <!-- 整体通用界面布局 -->
  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="auto">
      <SideNav></SideNav>
    </el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <HeadNav></HeadNav>
      </el-header>
      <!-- 主体区域 -->
      <el-main>
        <!-- 路由展示区 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideNav from './SideNav.vue'
import HeadNav from './HeadNav.vue'

export default {
  name: 'Layout',
  components: {
    SideNav,
    HeadNav,
  },
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-header {
    background-color: #333;
    height: 50px !important;
  }
  .el-aside::-webkit-scrollbar {
    display: none;
  }
}
</style>
