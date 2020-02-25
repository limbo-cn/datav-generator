<template>
  <div>
    <el-tabs tab-position="left" style="height: 238px;">
      <el-tab-pane label="数据设置">
        <Data :userdata.sync="optionData.data" :data.sync="optionData.series"></Data>
      </el-tab-pane>
      <el-tab-pane label="标题设置">
        <Title :title.sync="optionData.title"></Title>
      </el-tab-pane>
      <el-tab-pane label="横坐标设置">
        <AxisX :xAxis.sync="optionData.xAxis" :series.sync="optionData.series"></AxisX>
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
import isEqual from 'lodash/isEqual'
import Scatter from '../../../../echarts/scatter'
import Title from '../../common/chartTitle'
import Other from '../../common/chartOther'
import AxisX from '../../common/chartAxisX'
import AxisY from '../../common/chartAxisY'
import Data from './chartDataScatter'
export default {
  props: ['option'],
  components: {
    Title,
    Other,
    AxisX,
    AxisY,
    Data
  },
  data() {
    return {
      optionData: Scatter.getMockBasicScatter()
    }
  },
  mounted() {
    if (this.option) {
      this.optionData = this.option
    }
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
      if (!isEqual(this.optionData, val)) {
        this.optionData = val
      }
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