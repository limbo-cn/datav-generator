<template>
  <div>
    <el-dialog
      class="dialog"
      title="事件编辑"
      append-to-body
      :visible.sync="dialogVisible"
      @close="closeDialog"
    >
      <el-form ref="form" :model="event" label-width="180px">
        <el-form-item label="事件名称">
          <el-input v-model="event.name"></el-input>
        </el-form-item>
        <el-form-item label="调用接口（只支持http）">
          <el-input v-model="event.api"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" @click="ok">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { GenNonDuplicateID } from '../../helper'
export default {
  data() {
    return {
      dialogVisible: false,
      curEvent: null,
      event: this.getDefault()
    }
  },
  watch: {
    curEvent: function () {
      this.event = this.curEvent
    }
  },
  methods: {
    getDefault() {
      return {
        id: 0,
        name: '',
        api: ''
      }
    },
    showDialog() {
      this.dialogVisible = true
    },
    closeDialog() {
      this.dialogVisible = false
    },
    ok() {
      if (!this.event.id) {
        this.event.id = GenNonDuplicateID()
      }
      this.$store.dispatch('local/addEvent', this.event)
      this.closeDialog()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>