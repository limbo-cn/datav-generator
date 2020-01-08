<template>
  <div
    :style="{
       'margin-left':`${optionData.marginLeft}px`,
       'margin-top':`${optionData.marginTop}px`
    }"
  >
    <el-slider
      id="slider"
      v-model="optionData.value"
      :min="optionData.min"
      :max="optionData.max"
      :show-stops="optionData.showStops"
      :step="optionData.showStops?optionData.step:1"
      :vertical="optionData.vertical"
      :height="`${optionData.height}px`"
      :marks="marks"
    ></el-slider>
  </div>
</template>

 <script>
import merge from 'lodash/merge'
import Com from '../otherComponents/index.js'
export default {
  props: ['option'],
  mounted() {
    merge(this.optionData, this.option)
  },
  data() {
    return {
      optionData: Com.getDefaultOptionSlider()
    }
  },

  computed: {
    marks: function () {
      return this.optionData.showMarks ? JSON.parse(this.optionData.marks) : {}
    }
  },
  watch: {
    option: {
      handler: function () {
        merge(this.optionData, this.option)
      },
      deep: true
    }
  }
}
</script>
<style lang="scss">
#slider .el-slider__marks-text {
  color: white;
  font-size: 20px;
}
</style>