<template>
  <div>
    <el-table height="238" stripe :data="data" style="width: 100%" @row-dblclick="editRow">
      <el-table-column style="width: 50%" prop="name" label="名称" @click="scope.row.status = 1">
        <template slot-scope="scope">
          <template v-if="scope.row.editable">
            <el-input v-model="scope.row.name"></el-input>
          </template>
          <span v-else>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column style="width: 50%" prop="value" label="值">
        <template slot-scope="scope">
          <template v-if="scope.row.editable">
            <el-input v-model.number="scope.row.value"></el-input>
          </template>
          <span v-else>{{scope.row.value}}</span>
        </template>
      </el-table-column>
      <el-table-column width="250">
        <template slot="header">
          <el-button size="mini" type="primary" @click="dialogAPIVisible = true">来自接口</el-button>
          <el-button size="mini" type="primary" @click="add">添加一项</el-button>
        </template>
        <template slot-scope="scope" v-if="scope.row.editable">
          <el-button size="mini" @click="handleEdit( scope.row)">确定</el-button>
          <el-button size="mini" type="danger" @click="handleDelete( scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="数据接口" :visible.sync="dialogAPIVisible">
      <el-form>
        <el-form-item label="数据接口：">
          <el-input style="width:80%" type="text" v-model="userdata.intervalAPI.url"></el-input>
        </el-form-item>
        <el-form-item label="获取数据间隔时间（秒）">
          <el-input-number v-model="userdata.intervalAPI.interval" :min="10"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="userdata.intervalAPI.use">从接口获取数据</el-checkbox>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogAPIVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['data', 'userdata'],
  data() {
    return {
      dialogAPIVisible: false
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
      this.data.unshift({ name: '默认数据', value: 400, editable: true })
    },
    editRow(row) {
      row.editable = true
      this.data.splice(this.data.length) // 因为editable是动态添加的属性，所以需要触发vue更新
    },
    handleEdit(row) {
      row.editable = false
      this.data.splice(this.data.length) // 因为editable是动态添加的属性，所以需要触发vue更新
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