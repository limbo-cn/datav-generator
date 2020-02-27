<template>
  <video
    src="https://www.w3school.com.cn/i/movie.ogg"
    autoplay
    :loop="optionData.loop"
    :muted="optionData.muted"
  ></video>
</template>

 <script>
import merge from 'lodash/merge'
import Com from '../otherComponents/index.js'
export default {
  props: ['option'],
  data() {
    return {
      optionData: Com.getDefaultOptionVideo()
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
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>