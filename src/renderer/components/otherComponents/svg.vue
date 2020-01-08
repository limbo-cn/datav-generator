<template>
  <div
    :style="{
       'margin-left':`${optionData.marginLeft}px`,
       'margin-top':`${optionData.marginTop}px`
    }"
    v-html="optionData.svg"
  />
</template>

 <script>
import merge from 'lodash/merge'
import Com from '../otherComponents/index.js'
export default {
  props: ['option'],
  data() {
    return {
      optionData: Com.getDefaultOptionSVG()
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
svg {
  width: 100%;
  height: 100%;
}
</style>