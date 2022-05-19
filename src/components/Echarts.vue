<template>
  <div ref="chart"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'Echarts',

  props: {
    // 控制图表是否有横坐标
    isAxisChart: {
      type: Boolean,
      default: true,
    },
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
        }
      },
    },
  },

  data() {
    return {
      // 默认配置模板
      axisOption: {
        legend: {
          textcolor: {
            color: '#333',
          },
        },
        grid: {
          left: '20%',
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3',
            },
          },
          axisLabel: {
            interval: 0,
            color: '#333',
          },
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3',
              },
            },
          },
        ],
        color: [
          '#2ec7c9',
          '#b6a2de',
          '#5ab1ef',
          '#ffb980',
          '#d87a80',
          '8d98b3',
        ],
        series: [],
      },
      normalOption: {
        tooltip: {
          trigger: 'item',
        },
        color: [
          '#0f78f4',
          '#dd536b',
          '#9462e5',
          '#a6a6a6',
          '#e1bb22',
          '#39c362',
          '#3ed1cf',
        ],
        series: [],
      },
      // 用于存储echarts生成的图表
      chart: null,
    }
  },

  computed: {
    option() {
      return this.isAxisChart ? this.axisOption : this.normalOption
    },
  },

  methods: {
    // 合并配置项
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
      } else {
        this.normalOption.series = this.chartData.series
      }
    },
    // 生成echarts图表实例
    initChart() {
      this.initChartData()
      // 判断是否已经有图表存在。若已存在则仅修改配置项
      if (this.chart) {
        this.chart.setOption(this.option)
      } else {
        this.chart = echarts.init(this.$refs.chart)
        this.chart.setOption(this.option)
      }
    },
  },

  watch: {
    // 深度监视传入数据，若数据发生变化则重新生成echarts图表实例
    chartData: {
      handler: function () {
        this.initChart()
      },
      deep: true,
    },
  },
}
</script>

<style></style>
