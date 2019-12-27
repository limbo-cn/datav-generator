<template>
  <grid-layout
    :layout="layout"
    :col-num="24"
    :row-height="rowHeight"
    :is-draggable="false"
    :is-resizable="false"
    :verticalCompact="false"
    :use-css-transforms="true"
    :margin="[0, 0]"
    ref="layout"
  >
    <grid-item
      v-for="item in layout"
      :ref="`item${item.i}`"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :key="item.i"
    >{{item.i}}</grid-item>
  </grid-layout>
</template>

<script>
import echarts from 'echarts'
import VueGridLayout from 'vue-grid-layout'

export default {
  name: 'showcase',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data() {
    return {
      rowHeight: 0,
      charts: {}
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.computHeight()
    })
    window.onresize = () => {
      this.computHeight()
    }
    //hack方法，监听layout dom mounted生命周期
    var times = 0
    let observer = new MutationObserver((e) => {
      times++
      if (times === 2) {
        this.init()
        observer.disconnect()
      }
    })
    observer.observe(document.querySelector('.vue-grid-layout'), { attributes: true, attributeFilter: ['style'], attributeOldValue: true })
  },
  computed: {
    options: function () {
      return this.$store.getters['common/options']
    },
    layout: function () {
      return JSON.parse(JSON.stringify(this.$store.getters['common/layout']))
    }
  },
  methods: {
    computHeight() {
      this.rowHeight = window.innerHeight / 18
    },
    resizeChart() {
      for (let index in this.charts) {
        this.charts[index].resize()
      }
    },
    init() {
      for (let index in this.options) {
        let chart = echarts.init(this.$refs[`item${index}`][0].$el
          , 'dark')
        chart.setOption(this.options[index])
        this.charts[index] = chart
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