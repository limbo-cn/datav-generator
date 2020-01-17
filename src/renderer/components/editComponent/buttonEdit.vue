<template>
  <div>
    <el-tabs tab-position="left" style="height: 238px;">
      <el-tab-pane label="基本设置">
        <el-form :inline="true">
          <el-form-item label="位置：">
            <el-form-item label="左右位置：">
              <el-radio-group v-model="optionData.textAlign" @change="optionData.marginLeft = 0">
                <el-radio label="left">左对齐</el-radio>
                <el-radio label="right">右对齐</el-radio>
                <el-radio label="center">居中</el-radio>
                <el-radio label="initial">自定义</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-show="optionData.textAlign === 'initial'" label="距离左边：">
              <el-input-number v-model="optionData.marginLeft"></el-input-number>
            </el-form-item>
            <el-form-item label="距离上边：">
              <el-input-number v-model="optionData.marginTop"></el-input-number>
            </el-form-item>
          </el-form-item>
        </el-form>
        <el-form :inline="true">
          <el-form-item label="样式：">
            <el-form-item label="文本内容：">
              <el-input v-model="optionData.text"></el-input>
            </el-form-item>
            <el-form-item label="尺寸：">
              <el-radio-group v-model="optionData.size">
                <el-radio label="default">大</el-radio>
                <el-radio label="medium">中</el-radio>
                <el-radio label="small">小</el-radio>
                <el-radio label="mini">迷你</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="事件设置">
        <BoxEvent ref="event" :clickEvent="true" @changeEvents="changeEvents"></BoxEvent>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

 <script>
import merge from 'lodash/merge'
import Com from '../otherComponents/index.js'
import BoxEvent from './common/boxEvent'

export default {
  props: ['option', 'events'],
  components: {
    BoxEvent
  },
  data() {
    return {
      optionData: Com.getDefaultOptionButton()
    }
  },
  mounted() {
    merge(this.optionData, this.option)
    this.$refs.event.setEvents(this.events || [])
  },
  watch: {
    optionData:
    {
      handler: function () {
        this.$emit('changeOption', this.optionData)
      },
      deep: true
    },
    option: function (val) {
      let option = merge(Com.getDefaultOptionButton(), val)
      merge(this.optionData, option)
    }
  },
  methods: {
    changeEvents(events) {
      this.$emit('changeEvents', events)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form {
  margin-top: 0.5em;
}
.el-form-item {
  margin-bottom: 0;
}
</style>