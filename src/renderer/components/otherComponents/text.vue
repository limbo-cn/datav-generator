<template>
  <div
    :style="{
       'color':optionData.color ,
       'text-align':optionData.textAlign,
       'margin-left':`${optionData.marginLeft}px`,
       'margin-top':`${optionData.marginTop}px`,
       'font-size':`${optionData.fontSize}px`
    }"
  >{{ optionData.text || 'default' }}</div>
</template>

 <script>
import Com from '../otherComponents/index.js'
import merge from 'lodash/merge'

export default {
  props: ['option'],
  data() {
    return {
      optionData: Com.getDefaultOptionText()
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