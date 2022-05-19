<template>
  <el-row :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <hr />
        <div class="login-info">
          <p>上次登录时间：<span>2022-05-17</span></p>
          <p>上次登录地点：<span>湖北 武汉</span></p>
        </div>
      </el-card>
      <el-card :style="{ marginTop: '20px', height: '465px' }" shadow="hover">
        <el-table :data="tableData">
          <el-table-column
            prop="name"
            label="品牌"
            width="90"
          ></el-table-column>
          <el-table-column prop="todayBuy" label="当天销量"> </el-table-column>
          <el-table-column prop="monthBuy" label="当月销量"> </el-table-column>
          <el-table-column prop="totalBuy" label="总销量"> </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          shadow="hover"
          :body-style="{
            padding: 0,
            display: 'flex',
          }"
          v-for="(item, index) in countData"
          :key="index"
        >
          <i
            :class="`el-icon-${item.icon}`"
            :style="{ backgroundColor: item.color }"
          ></i>
          <div>
            <p class="value">￥{{ item.value }}</p>
            <p class="name">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card
        shadow="hover"
        :style="{ height: '280px', marginTop: '20px' }"
      ></el-card>
      <div class="graph">
        <el-card
          shadow="hover"
          :style="{
            height: '265px',
            width: '50%',
            marginTop: '20px',
            marginRight: '20px',
          }"
        ></el-card>
        <el-card
          shadow="hover"
          :style="{ height: '265px', width: '50%', marginTop: '20px' }"
        ></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from '@/../api/data'

export default {
  name: 'Dashboard',
  data() {
    return {
      userImg: require('@/assets/images/user.jpg'),
      tableData: [],
      countData: [
        {
          name: '当天支付订单',
          value: 320,
          icon: 'success',
          color: '#00C0CF',
        },
        {
          name: '当天收藏订单',
          value: 540,
          icon: 'star-on',
          color: '#ffb980',
        },
        {
          name: '当天未支付订单',
          value: 79,
          icon: 'error',
          color: '#5ab1ef',
        },
        {
          name: '当月支付订单',
          value: 5400,
          icon: 'success',
          color: '#00C0CF',
        },
        {
          name: '当月收藏订单',
          value: 8900,
          icon: 'star-on',
          color: '#ffb980',
        },
        {
          name: '当月未支付订单',
          value: 540,
          icon: 'error',
          color: '#5ab1ef',
        },
      ],
    }
  },
  mounted() {
    getData().then((res) => {
      console.log(res)
      const { code, data } = res.data
      if (code === 20000) {
        this.tableData = data.tableData
      }
    })
  },
}
</script>

<style lang="less" scoped>
.user {
  display: flex;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  .userinfo {
    margin-left: 30px;
    .name {
      font-size: 24px;
      font-weight: 400;
    }
    .access {
      font-size: 14px;
      color: #ccc;
    }
  }
}
hr {
  border: 0;
  height: 1px;
  background-color: #ccc;
}
.login-info {
  margin-top: 25px;
  p {
    margin-left: 25px;
    font-size: 12px;
    color: #ccc;
  }
  span {
    margin-left: 45px;
  }
}

.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .el-card {
    height: 60px;
    width: 240px;
    margin-top: 20px;
    i {
      font-size: 26px;
      color: #fff;
      text-align: center;
      width: 60px;
      line-height: 60px;
    }
    .value {
      font-size: 24px;
      padding-left: 24px;
      margin: 0;
      line-height: 38px;
    }
    .name {
      font-size: 14px;
      color: #ccc;
      margin: 0;
      padding-left: 24px;
    }
  }
}
.graph {
  display: flex;
  justify-content: space-between;
}
</style>
