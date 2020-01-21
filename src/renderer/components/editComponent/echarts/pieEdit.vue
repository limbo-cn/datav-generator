<template>
  <div>
    <el-tabs tab-position="left" style="height: 238px;">
      <el-tab-pane label="数据设置">
        <Data :userdata.sync="optionData.data" :data.sync="optionData.series[0].data"></Data>
      </el-tab-pane>
      <el-tab-pane label="图形设置">
        <el-form :inline="true">
          <el-form-item label="图表类型：">
            <el-radio v-model="optionData.series[0].roseType" label>基本扇形图</el-radio>
            <el-radio v-model="optionData.series[0].roseType" label="radius">圆形图</el-radio>
            <el-radio v-model="optionData.series[0].roseType" label="area">南丁格尔图</el-radio>
          </el-form-item>
          <el-form-item label="大小：">
            <el-input-number
              :value="parseInt(optionData.series[0].radius)"
              @change="val=>{optionData.series[0].radius = `${val}%`}"
              :min="0"
              :max="100"
            ></el-input-number>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="标题设置">
        <Title :title.sync="optionData.title"></Title>
      </el-tab-pane>
      <el-tab-pane label="其他设置">
        <Other :option.sync="optionData"></Other>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

 <script>
import merge from 'lodash/merge'
import Pie from '../../../echarts/pie'
import Title from '../common/chartTitle'
import Other from '../common/chartOther'
import Data from '../common/chartData'
export default {
  props: ['option'],
  components: {
    Title,
    Other,
    Data
  },
  data() {
    return {
      optionData: Pie.getMockBasicPie()
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