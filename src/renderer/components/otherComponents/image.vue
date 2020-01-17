<template>
  <el-image
    :class="{
      rotate:optionData.rotate,
      heartbeat:optionData.heartbeat
    }"
    :src="optionData.url"
    :fit="optionData.fit"
  ></el-image>
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
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.el-image {
  height: 100%;
  width: 100%;
}

.rotate {
  animation: rotateFrame 2.5s linear infinite;
}
.heartbeat {
  animation: heartbeatFrame 2s linear infinite;
}

@keyframes rotateFrame {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes heartbeatFrame {
  0% {
    transform: scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: scale(0.8, 0.8);
    opacity: 1;
  }
}
</style>