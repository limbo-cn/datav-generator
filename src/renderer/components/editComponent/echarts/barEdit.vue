<template>
  <div>
    <el-tabs tab-position="left" style="height: 238px;">
      <el-tab-pane label="标题设置">
        <Title :title.sync="optionData.title"></Title>
      </el-tab-pane>
      <el-tab-pane label="横坐标设置">
        <AxisX :xAxis.sync="optionData.xAxis"></AxisX>
      </el-tab-pane>
      <el-tab-pane label="纵坐标设置">
        <AxisY :yAxis.sync="optionData.yAxis"></AxisY>
      </el-tab-pane>
      <el-tab-pane label="其他设置">
        <Other :option.sync="optionData"></Other>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

 <script>
import merge from 'lodash/merge'
import Bar from '../../../echarts/bar'
import Title from '../common/chartTitle'
import Other from '../common/chartOther'
import AxisX from '../common/chartAxisX'
import AxisY from '../common/chartAxisY'
export default {
  props: ['option'],
  components: {
    Title,
    Other,
    AxisX,
    AxisY
  },
  data() {
    return {
      optionData: Bar.getMockBasicBar()
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
    },
    option: function (val) {
      merge(this.optionData, this.option)
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