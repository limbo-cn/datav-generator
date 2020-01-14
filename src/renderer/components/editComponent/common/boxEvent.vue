<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="添加事件">
        <el-button v-if="clickEvent" type="primary" @click="addEvent('click')" size="medium">点击事件</el-button>
      </el-form-item>
      <el-form-item style="float:right">
        <EventTable></EventTable>
      </el-form-item>
    </el-form>
    <el-form :inline="true">
      <el-form-item label="事件列表">
        <el-tag
          @close="removeEvent(event)"
          v-for="event in events"
          :key="event.id"
          closable
        >{{ event.name}}</el-tag>
      </el-form-item>
    </el-form>
    <AddBoxEvent @eventAdded="eventAdded" ref="addEvent"></AddBoxEvent>
  </div>
</template>

<script>
import AddBoxEvent from './addBoxEvent'
import EventTable from '../../../components/dialog/eventTable'
export default {
  props: ['clickEvent'],
  components: {
    AddBoxEvent,
    EventTable
  },
  data() {
    return {
      events: []
    }
  },
  watch: {
    events:
    {
      handler: function () {
        this.$emit('changeEvents', this.events)
      },
      deep: true
    }
  },
  methods: {
    addEvent(type) {
      this.$refs.addEvent.dialogVisible = true
    },
    removeEvent(event) {
      this.events.splice(event, 1)
    },
    eventAdded(event) {
      this.events.push(event)
    },
    setEvents(events) {
      this.events = events
    }
  }
}
</script>

<style lang="scss" scoped>
</style>