<template>
  <div class="page">
    <el-form
      :model="form"
      status-icon=""
      :rules="rules"
      label-width="100px"
      class="login-container"
      ref="form"
    >
      <h3 class="login-title">系统登录</h3>
      <el-form-item
        label="用户名"
        label-width="80px"
        prop="username"
        class="username"
      >
        <el-input
          type="input"
          v-model="form.username"
          autocomplete="off"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="80px" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          autocomplete="off"
          placeholder="请输入密码"
          :show-password="true"
        ></el-input>
      </el-form-item>
      <el-form-item class="login-submit">
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import Mock from 'mockjs'
import { getToken } from '@/../api/data'

export default {
  name: 'Login',
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            message: '用户名不能小于3位',
            trigger: 'blur',
          },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
  methods: {
    handleLogin() {
      getToken(this.form).then((res) => {
        if (res.data.code === 20000) {
          this.$store.commit('SET_TOKEN', res.data.data.token)
          this.$router.push('/')
        } else {
          this.$message.warning('用户名或密码错误！')
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login-container {
  position: absolute;
  top: 150px;
  left: calc(50% - 210px);
  width: 350px;
  padding: 35px 35px 15px 35px;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  .login-title {
    margin: 0 auto 40px auto;
    text-align: center;
    color: #505458;
    font-weight: 400;
  }
  .login-submit {
    margin: 30px 0 0 40px;
  }
}
</style>
