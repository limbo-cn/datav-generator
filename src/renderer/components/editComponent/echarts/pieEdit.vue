<template>
  <div>
    <el-tabs tab-position="left" style="height: 238px;">
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
export default {
  props: ['option'],
  components: {
    Title,
    Other
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