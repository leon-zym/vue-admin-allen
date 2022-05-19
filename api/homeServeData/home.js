import Mock from 'mockjs'

// 图标数据
let List = []
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          Apple: Mock.Random.float(20, 500, 0, 0),
          Vivo: Mock.Random.float(20, 500, 0, 0),
          Oppo: Mock.Random.float(20, 500, 0, 0),
          Huawei: Mock.Random.float(20, 500, 0, 0),
          Sumsang: Mock.Random.float(20, 500, 0, 0),
          Xiaomi: Mock.Random.float(20, 500, 0, 0),
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: 'Apple',
            value: 550,
          },
          {
            name: 'Vivo',
            value: 250,
          },
          {
            name: 'Oppo',
            value: 360,
          },
          {
            name: 'Huawei',
            value: 620,
          },
          {
            name: 'Sumsang',
            value: 120,
          },
          {
            name: 'Xiaomi',
            value: 480,
          },
        ],
        // 柱状图
        userData: [
          {
            date: 'Mon',
            new: 12,
            active: 120,
          },
          {
            date: 'Tue',
            new: 32,
            active: 320,
          },
          {
            date: 'Wed',
            new: 45,
            active: 450,
          },
          {
            date: 'Thu',
            new: 21,
            active: 180,
          },
          {
            date: 'Fri',
            new: 39,
            active: 250,
          },
          {
            date: 'Sat',
            new: 21,
            active: 220,
          },
          {
            date: 'Sun',
            new: 38,
            active: 430,
          },
        ],
        // 折线图
        orderData: {
          date: [
            '2022101',
            '20220102',
            '20220103',
            '20220104',
            '20220105',
            '20220106',
            '20220107',
          ],
          data: List,
        },
        // 表格数据
        tableData: [
          {
            name: 'Oppo',
            todayBuy: 10,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: 'Vivo',
            todayBuy: 100,
            monthBuy: 400,
            totalBuy: 1200,
          },
          {
            name: 'Apple',
            todayBuy: 320,
            monthBuy: 600,
            totalBuy: 2300,
          },
          {
            name: 'Xiaomi',
            todayBuy: 500,
            monthBuy: 3200,
            totalBuy: 9000,
          },
          {
            name: 'Sumsang',
            todayBuy: 4,
            monthBuy: 78,
            totalBuy: 290,
          },
          {
            name: 'Huawei',
            todayBuy: 700,
            monthBuy: 3200,
            totalBuy: 6700,
          },
        ],
      },
    }
  },
}
