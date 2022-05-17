<template>
  <el-row gutter="20" class="home">
    <el-col :span="8" style="margin-top: 20">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      userImg: require("@/assets/images/user.jpg"),
    };
  },
};
</script>

<style>
</style>