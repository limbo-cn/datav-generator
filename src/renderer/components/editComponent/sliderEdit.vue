<template>
  <el-tabs tab-position="left" style="height: 238px;">
    <el-tab-pane label="基本设置">
      <el-form :inline="true">
        <el-form-item label="数值：">
          <el-form-item label="显示值：">
            <el-input-number v-model="optionData.value" :min="optionData.min" :max="optionData.max"></el-input-number>
          </el-form-item>
          <el-form-item label="最小值：">
            <el-input-number v-model="optionData.min" :max="optionData.max"></el-input-number>
          </el-form-item>
          <el-form-item label="最大值：">
            <el-input-number v-model="optionData.max" :min="optionData.min"></el-input-number>
          </el-form-item>
        </el-form-item>
      </el-form>
      <el-form :inline="true">
        <el-form-item label="样式：">
          <el-checkbox v-model="optionData.vertical">竖向模式</el-checkbox>
          <el-form-item v-show="optionData.vertical" label="竖向高度：">
            <el-input-number v-model="optionData.height"></el-input-number>
          </el-form-item>
          <el-checkbox v-model="optionData.showStops">显示间断点</el-checkbox>
          <el-form-item v-show="optionData.showStops" label="步长：">
            <el-input-number v-model="optionData.step"></el-input-number>
          </el-form-item>
          <el-checkbox v-model="optionData.showMarks">显示标记</el-checkbox>
        </el-form-item>
      </el-form>
      <el-form :inline="true">
        <el-form-item label="标记数据源：" v-show="optionData.showMarks">
          <el-input style="width: 600px;" type="textarea" v-model="optionData.marks"></el-input>
        </el-form-item>
      </el-form>
      <el-form :inline="true">
        <el-form-item label="位置：">
          <el-form-item label="距离左边：">
            <el-input-number v-model="optionData.marginLeft"></el-input-number>
          </el-form-item>
          <el-form-item label="距离上边：">
            <el-input-number v-model="optionData.marginTop"></el-input-number>
          </el-form-item>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="事件设置">
      <el-form></el-form>
    </el-tab-pane>
  </el-tabs>
</template>

 <script>
import merge from 'lodash/merge'
import Com from '../otherComponents/index.js'

export default {
  props: ['option'],
  data() {
    return {
      optionData: Com.getDefaultOptionSlider(),
      imageUrl: ''
    }
  },
  mounted() {
    merge(this.optionData, this.option)
  },
  watch: {
    optionData:
    {
      handler: function () {
        this.$emit('changeOption', this.optionData)
      },
      deep: true
    }
  },
  methods: {

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