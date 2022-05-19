<template>
  <el-row :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover" :body-style="{ padding: '10px' }">
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
      <el-card
        :style="{ marginTop: '20px', height: '355px' }"
        :body-style="{ paddingTop: 0 }"
        shadow="hover"
      >
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
            justifyContent: 'space-between',
          }"
          v-for="(item, index) in countData"
          :key="index"
        >
          <i
            :class="`el-icon-${item.icon}`"
            :style="{ backgroundColor: item.color }"
          ></i>
          <p class="value">￥{{ item.value }}</p>
          <p class="name">{{ item.name }}</p>
        </el-card>
      </div>
      <el-card
        shadow="hover"
        :style="{ height: '230px', marginTop: '20px' }"
        :body-style="{ padding: '10px' }"
      >
        <Echarts
          :chartData="chartData.order"
          :isAxisChart="true"
          style="height: 260px"
        ></Echarts>
      </el-card>
      <div class="graph">
        <el-card
          shadow="hover"
          :style="{
            height: '170px',
            width: '50%',
            marginTop: '20px',
            marginRight: '20px',
          }"
          :body-style="{ padding: '10px' }"
        >
          <Echarts
            :chartData="chartData.user"
            :isAxisChart="true"
            style="height: 200px"
          ></Echarts>
        </el-card>
        <el-card
          shadow="hover"
          :style="{ height: '170px', width: '50%', marginTop: '20px' }"
          :body-style="{ padding: '10px' }"
        >
          <Echarts
            :chartData="chartData.video"
            :isAxisChart="false"
            style="height: 150px"
          ></Echarts>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from '@/../api/data'
import Echarts from '@/components/Echarts'

export default {
  name: 'Dashboard',
  components: {
    Echarts,
  },

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
      chartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    }
  },

  mounted() {
    // 发送请求并处理数据，生成echarts图表
    getData().then((res) => {
      const { code, data } = res.data
      if (code === 20000) {
        // 表格数据
        this.tableData = data.tableData

        // 折线图数据
        // es6新语法，传入一个对象，返回该对象所有可枚举属性的字符串数组
        const keyArray = Object.keys(data.orderData.data[0])
        const series = []
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: data.orderData.data.map((item) => item[key]),
            type: 'line',
          })
        })
        this.chartData.order.xData = data.orderData.date
        this.chartData.order.series = series

        // 柱状图数据
        this.chartData.user.xData = data.userData.map((item) => item.date)
        this.chartData.user.series = [
          {
            name: '新增用户',
            data: data.userData.map((item) => item.new),
            type: 'bar',
          },
          {
            name: '活跃用户',
            data: data.userData.map((item) => item.active),
            type: 'bar',
          },
        ]

        // 饼状图数据
        this.chartData.video.series = [
          {
            data: data.videoData,
            type: 'pie',
          },
        ]
      }
    })
  },
}
</script>

<style lang="less" scoped>
.user {
  display: flex;
  margin-left: 30px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .userinfo {
    margin-left: 70px;
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
  margin-top: 20px;
  p {
    margin-left: 40px;
    font-size: 12px;
    color: #ccc;
  }
  span {
    margin-left: 75px;
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
      font-size: 24px;
      color: #fff;
      text-align: center;
      width: 60px;
      line-height: 60px;
    }
    .value {
      font-size: 22px;
      margin: 0;
      line-height: 60px;
    }
    .name {
      font-size: 14px;
      color: #ccc;
      line-height: 60px;
      margin: 0;
      margin-right: 10px;
    }
  }
}
.graph {
  display: flex;
  justify-content: space-between;
}
</style>
