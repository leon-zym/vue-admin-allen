<template>
  <!-- 整体通用界面布局 -->
  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="auto">
      <SideBar></SideBar>
    </el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <Header></Header>
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
import SideBar from "./SideBar.vue";
import Header from "./Header.vue";

export default {
  name: "Layout",
  components: {
    SideBar,
    Header,
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
</style>
