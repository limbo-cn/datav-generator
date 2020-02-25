<template>
  <div>
    <el-table height="238" stripe :data="data" style="width: 100%" @row-dblclick="editRow">
      <el-table-column style="width: 50%" prop="name" label="名称">
        <template slot-scope="scope">
          <template v-if="scope.row === rowToEdit">
            <el-input v-model="scope.row.name"></el-input>
          </template>
          <span v-else>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column style="width: 50%" prop="value" label="值">
        <template slot-scope="scope">
          <template v-if="scope.row === rowToEdit">
            <el-input v-model.number="scope.row.value"></el-input>
          </template>
          <span v-else>{{scope.row.value}}</span>
        </template>
      </el-table-column>
      <el-table-column width="250">
        <template slot="header">
          <IntervalApi :data.sync="userdata.intervalAPI"></IntervalApi>
          <el-button size="mini" type="primary" @click="add">添加一项</el-button>
        </template>
        <template slot-scope="scope" v-if="scope.row === rowToEdit">
          <el-button size="mini" @click="handleEdit( scope.row)">确定</el-button>
          <el-button size="mini" type="danger" @click="handleDelete( scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import IntervalApi from '../../common/intervalApi'
export default {
  props: ['data', 'userdata'],
  components: {
    IntervalApi
  },
  data() {
    return {
      dialogAPIVisible: false,
      rowToEdit: null
    }
  },
  watch: {
    data:
    {
      handler: function () {
        this.$emit('update:data', this.data)
      },
      deep: true
    },
    userdata:
    {
      handler: function () {
        this.$emit('update:userdata', this.userdata)
      },
      deep: true
    }
  },
  methods: {
    add() {
      this.data.unshift({ name: '默认数据', value: 400 })
    },
    editRow(row) {
      this.rowToEdit = row
    },
    handleEdit(row) {
      this.rowToEdit = null
    },
    handleDelete(index) {
      this.data.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  margin-top: 0.5em;
}
.el-form-item {
  margin-bottom: 10px;
}
</style>