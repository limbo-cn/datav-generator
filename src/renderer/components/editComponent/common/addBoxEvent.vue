<template>
  <div>
    <el-dialog class="dialog" title="添加事件" :visible="dialogVisible" @close="closeDialog">
      <el-form label-width="120px">
        <el-form-item label="选择事件">
          <el-select v-model="eventId">
            <el-option
              v-for="event in events"
              :key="event.id"
              :label="event.name"
              :value="event.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="成功后处理">
          <!-- <el-select>
            <el-option label="无" value="0"></el-option>
            <el-option label="发送消息" value="1"></el-option>
          </el-select>-->
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" @click="ok">确定</el-button>
      </span>
      <EventTable></EventTable>
    </el-dialog>
  </div>
</template>

<script>
import EventTable from '../../../components/dialog/eventTable'
import { GenNonDuplicateID } from '../../../helper'
export default {
  components: {
    EventTable
  },
  data() {
    return {
      dialogVisible: false,
      eventId: '',
      event: {
        eventId: 0,
        name: ''
      }
    }
  },
  computed: {
    events: function () {
      return this.$store.getters['local/events']
    }
  },
  methods: {
    closeDialog() {
      this.dialogVisible = false
    },
    ok() {
      this.events.id = GenNonDuplicateID()
      this.event.eventId = this.eventId
      this.event.name = this.events.find(o => o.id === this.eventId).name
      this.$emit('eventAdded', this.event)
      this.id = ''
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 100%;
}
</style>