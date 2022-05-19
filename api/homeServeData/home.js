import Mock from 'mockjs'

// 图标数据
let List = []
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          Apple: Mock.Random.float(100, 8000, 0, 0),
          Vivo: Mock.Random.float(100, 8000, 0, 0),
          Oppo: Mock.Random.float(100, 8000, 0, 0),
          Huawei: Mock.Random.float(100, 8000, 0, 0),
          Sumsang: Mock.Random.float(100, 8000, 0, 0),
          Xiaomi: Mock.Random.float(100, 8000, 0, 0),
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
            value: 5999,
          },
          {
            name: 'Vivo',
            value: 1999,
          },
          {
            name: 'Oppo',
            value: 2599,
          },
          {
            name: 'Huawei',
            value: 6999,
          },
          {
            name: 'Sumsang',
            value: 7999,
          },
          {
            name: 'Xiaomi',
            value: 2899,
          },
        ],
        // 柱状图
        userData: [
          {
            date: 'Monday',
            new: 5,
            active: 200,
          },
          {
            date: 'Tuesday',
            new: 5,
            active: 200,
          },
          {
            date: 'Wednesday',
            new: 5,
            active: 200,
          },
          {
            date: 'Thusday',
            new: 5,
            active: 200,
          },
          {
            date: 'Friday',
            new: 5,
            active: 200,
          },
          {
            date: 'Saturday',
            new: 5,
            active: 200,
          },
          {
            date: 'Sunday',
            new: 5,
            active: 200,
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
          {
            name: 'Meizu',
            todayBuy: 130,
            monthBuy: 870,
            totalBuy: 3100,
          },
          {
            name: 'Oneplus',
            todayBuy: 300,
            monthBuy: 760,
            totalBuy: 4500,
          },
        ],
      },
    }
  },
}
