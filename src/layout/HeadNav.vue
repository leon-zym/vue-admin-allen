<template>
  <header>
    <div class="l-content">
      <el-button
        size="mini"
        icon="el-icon-menu"
        @click="handleCollapseSideNav"
      ></el-button>
      <el-tag
        v-for="tag in tags"
        :key="tag.path"
        size="medium"
        :color="$route.name === tag.name ? '' : '#fff'"
        :closable="tag.name !== 'Dashboard'"
        @close="handleCloseTag(tag)"
        @click="handleClickTag(tag)"
      >
        {{ tag.meta.title }}
      </el-tag>
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
import { mapState } from 'vuex'

export default {
  name: 'HeadNav',
  data() {
    return {
      userImg: require('../assets/images/user.jpg'),
    }
  },
  computed: {
    ...mapState({
      tags: (state) => state.nav.tagList,
    }),
  },
  methods: {
    handleCollapseSideNav() {
      this.$store.commit('COLLAPSESIDENAV')
    },
    handleCloseTag(tag) {
      // 关闭当前tag后自动跳转到上一个tag
      if (tag.name === this.$route.name) {
        this.$router.push({
          name: this.tags[this.tags.indexOf(tag) - 1].name,
        })
      }
      this.tags.splice(this.tags.indexOf(tag), 1)
    },
    handleClickTag(tag) {
      this.$router.push({
        name: tag.name,
      })
    },
  },
}
</script>

<style lang="less" scoped>
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
    .el-tag {
      color: #606266;
      margin-right: 10px;
      cursor: pointer;
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
