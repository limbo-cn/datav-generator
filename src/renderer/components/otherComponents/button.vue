<template>
  <div
    :style="{
       'text-align':optionData.textAlign,
       'margin-left':`${optionData.marginLeft}px`,
       'margin-top':`${optionData.marginTop}px`,
    }"
  >
    <el-button :size="optionData.size" type="primary">{{optionData.text}}</el-button>
  </div>
</template>

 <script>
import Com from '../otherComponents/index.js'
import merge from 'lodash/merge'

export default {
  props: ['option'],
  data() {
    return {
      optionData: Com.getDefaultOptionButton()
    }
  },
  mounted() {
    merge(this.optionData, this.option)
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
<style lang="scss" scoped>
</style>