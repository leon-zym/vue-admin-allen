<template>
  <div class="table">
    <el-table :data="tableData" height="90%" :stripe="true">
      <el-table-column
        :show-overflow-tooltip="true"
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 125"
      >
        <template slot-scope="scope">
          <span> {{ scope.row[item.prop] }} </span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager"
      layout="prev, pager, next"
      :total="config.total"
      :current-page.sync="config.page"
      @current-change="handleChange"
      :page-size="20"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'CommonTable',
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  data() {
    return {}
  },
  methods: {
    // 用自定义事件实现给父组件传递数据
    handleEdit(row) {
      this.$emit('edit', row)
    },
    handleDelete(row) {
      this.$emit('del', row)
    },
    handleChange(page) {
      this.$emit('change', page)
    },
  },
}
</script>

<style lang="less" scoped>
.table {
  height: calc(100% - 62px);
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
}
</style>
