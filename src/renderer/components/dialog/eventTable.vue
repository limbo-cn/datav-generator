<template>
  <div>
    <el-tooltip effect="dark" content="创建自定义事件用于添加到特定组件" placement="right">
      <el-button type="text" @click="showDialog " size="small">事件编辑?⃝</el-button>
    </el-tooltip>
    <el-dialog
      class="dialog"
      title="事件列表"
      append-to-body
      :visible.sync="dialogVisible"
      @close="closeDialog"
    >
      <el-table :data="tableData" height="400" style="width: 100%">
        <el-table-column label="名称" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete( scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer">
        <el-button type="primary" @click="addEvent">添加事件</el-button>
      </span>
    </el-dialog>
    <EventEdit ref="eventEdit"></EventEdit>
  </div>
</template>

<script>
import EventEdit from './eventEdit'
import cloneDeep from 'lodash/cloneDeep'
export default {
  components: {
    EventEdit
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  computed: {
    tableData: function () {
      return this.$store.getters['local/events']
    }
  },
  methods: {
    showDialog() {
      this.dialogVisible = true
      this.$emit('show')
    },
    closeDialog() {
      this.dialogVisible = false
    },
    handleEdit(event) {
      this.$refs.eventEdit.curEvent = cloneDeep(event)
      this.$refs.eventEdit.showDialog()
    },
    handleDelete(id) {
      this.$store.dispatch('local/removeEvent', id)
    },
    addEvent() {
      this.$refs.eventEdit.curEvent = this.$refs.eventEdit.getDefault()
      this.$refs.eventEdit.showDialog()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>