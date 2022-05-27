<template>
  <div class="manage">
    <el-dialog
      :title="operationType === 'add' ? '新增用户' : '编辑用户'"
      :visible="isShow"
    >
      <CommonForm
        :formLabel="operationFormLabel"
        :form="operationForm"
        :inline="true"
        ref="form"
      ></CommonForm>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+ 新增</el-button>
      <CommonForm
        :formLabel="searchFormLabel"
        :form="searchForm"
        :inline="true"
        ref="form"
      >
        <el-button type="primary" @click="getList(searchForm.keyword)"
          >搜索</el-button
        >
        <el-button @click="handleReset">复原</el-button>
      </CommonForm>
    </div>
    <CommonTable
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @change="getList()"
      @edit="editUser"
      @del="delUser"
    ></CommonTable>
  </div>
</template>

<script>
import CommonForm from '@/components/CommonForm.vue'
import CommonTable from '@/components/CommonTable.vue'
import { getUser } from '@/../api/data'

export default {
  name: 'Users',
  components: {
    CommonForm,
    CommonTable,
  },
  data() {
    return {
      operationType: 'add',
      isShow: false,
      operationFormLabel: [
        {
          model: 'name',
          label: '姓名',
          type: 'input',
        },
        {
          model: 'age',
          label: '年龄',
          type: 'input',
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: 1,
            },
            {
              label: '女',
              value: 0,
            },
          ],
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date',
        },
        {
          model: 'addr',
          label: '地址',
          type: 'input',
        },
      ],
      operationForm: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: '',
      },
      searchFormLabel: [
        {
          model: 'keyword',
          label: '',
          type: 'input',
        },
      ],
      searchForm: {
        keyword: '',
      },
      tableData: [],
      tableLabel: [
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'sex',
          label: '性别',
        },
        {
          prop: 'age',
          label: '年龄',
        },
        {
          prop: 'birth',
          label: '出生日期',
          width: 200,
        },
        {
          prop: 'addr',
          label: '地址',
          width: 320,
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: null,
      },
    }
  },
  methods: {
    confirm() {
      if (this.operationType === 'edit') {
        this.$http.post('/user/edit', this.operationForm).then((res) => {
          this.getList(this.searchForm.keyword)
          this.isShow = false
        })
      } else {
        this.$http.post('/user/add', this.operationForm).then((res) => {
          this.getList()
          this.searchForm.keyword = ''
          this.isShow = false
        })
      }
    },
    addUser() {
      this.isShow = true
      this.operationType = 'add'
      this.operationForm = {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: '',
      }
    },
    getList(name = '') {
      this.config.loading = true
      name ? (this.config.page = 1) : ''
      getUser({
        page: this.config.page,
        name,
      }).then((res) => {
        this.tableData = res.data.list.map((item) => {
          // 将数据中1、0转变为男和女
          item.sex = item.sex === 0 ? '女' : '男'
          return item
        })
        this.config.total = res.data.count
        this.config.loading = false
      })
    },
    editUser(row) {
      this.operationType = 'edit'
      this.isShow = true
      // 默认为浅拷贝，只拷贝对象的地址。修改operationForm的同时row也会被修改
      // this.operationForm = row
      // 这里应改为深拷贝，避免修改信息的过程中operationForm的改变引起row的改变。或者调用getList()解决
      this.operationForm = { ...row }
    },
    delUser(row) {
      this.$confirm('此操作将删除该用户，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        const id = row.id
        this.$http.post('user/del', id).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功',
          })
          this.getList(this.searchForm.keyword)
        })
      })
    },
    handleReset() {
      this.getList()
      this.searchForm.keyword = ''
    },
  },
  mounted() {
    this.getList()
  },
}
</script>

<style lang="less" scoped>
.manage {
  height: 100%;
  .manage-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
