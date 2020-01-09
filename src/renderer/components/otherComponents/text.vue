<template>
  <div
    :style="{
       'color':optionData.color ,
       'text-align':optionData.textAlign,
       'margin-left':`${optionData.marginLeft}px`,
       'margin-top':`${optionData.marginTop}px`,
       'font-size':`${optionData.fontSize}px`
    }"
  >
    <p :class="{animate:optionData.animate}">{{ optionData.text || 'default' }}</p>
  </div>
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
div {
  overflow: hidden;
  p {
    margin: 0;
  }
}
.animate {
  animation: 10s wordsLoop linear infinite normal;
}

@keyframes wordsLoop {
  0% {
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}

@-webkit-keyframes wordsLoop {
  0% {
    transform: translateX(200px);
    -webkit-transform: translateX(200px);
  }
  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}
</style>