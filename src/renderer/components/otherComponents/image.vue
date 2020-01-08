<template>
  <el-image :src="optionData.url" :fit="optionData.fit"></el-image>
</template>

 <script>
import merge from 'lodash/merge'
import Com from '../otherComponents/index.js'
export default {
  props: ['option'],
  data() {
    return {
      optionData: Com.getDefaultOptionImage()
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
.el-image {
  height: 100%;
  width: 100%;
}
</style>