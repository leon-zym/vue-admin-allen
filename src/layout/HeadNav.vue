<template>
  <header>
    <div class="l-content">
      <el-button
        size="mini"
        icon="el-icon-menu"
        @click="handleCollapseSideNav"
      ></el-button>
      <h3 class="header-breadcrumb">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img :src="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人主页</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeadNav',
  data() {
    return {
      userImg: require('../assets/images/user.jpg'),
    }
  },
  methods: {
    handleCollapseSideNav() {
      this.$store.commit('COLLAPSESIDENAV')
    },
  },
}
</script>

<style lang="less" scoped>
.header-breadcrumb {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  .r-content {
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
}
</style>
