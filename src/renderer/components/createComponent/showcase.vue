<template>
  <div style="-webkit-app-region: drag" v-html="layout"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'showcase',
  data() {
    return {
      windowHeight: 0,
      charts: {}
    }
  },
  mounted() {
    for (let index in this.options) {
      let chart = echarts.init(document.querySelector(`.box[data-index='${index}'`), 'dark')
      chart.setOption(this.options[index])
      this.charts[index] = chart
    }
    this.$nextTick(() => {
      this.computHeight()
    })
    window.onresize = () => {
      this.computHeight()
    }
  },
  computed: {
    layout: function () {
      return this.$store.getters['common/layout']
    },
    options: function () {
      return this.$store.getters['common/options']
    }
  },
  methods: {
    computHeight() {
      this.windowHeight = window.innerHeight
      document.querySelector('#main_layout').style.height = `${this.windowHeight}px`
      for (let index in this.charts) {
        this.charts[index].resize()
      }
    }
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  width: 100%;
  flex: 1;
}

.box {
  background: rgba(199, 199, 199, 0.5);
  display: flex;
  flex: 1;
  margin: 0 !important;
}

.column_flex {
  flex-direction: column;
}
</style>