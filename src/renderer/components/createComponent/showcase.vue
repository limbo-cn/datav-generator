<template>
  <grid-layout
    :layout="project.layout"
    :col-num="24"
    :row-height="rowHeight"
    :is-draggable="false"
    :is-resizable="false"
    :verticalCompact="false"
    :use-css-transforms="false"
    :margin="[0, 0]"
  >
    <grid-item
      v-for="item in project.layout"
      :ref="`item_${item.i}`"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :key="item.i"
    ></grid-item>
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
      charts: {},
      project: {
        id: 0,
        name: '',
        layout: [],
        options: {},
        image: ''
      }
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

    //获取project
    this.project = this.$store.getters['common/project']
  },
  methods: {
    computHeight() {
      this.rowHeight = window.innerHeight / 18
    },
    resizeChart() {
      for (let id in this.charts) {
        this.charts[id].resize()
      }
    },
    init() {
      for (let id in this.project.options) {
        let chart = echarts.init(this.$refs[`item_${id}`][0].$el, 'dark')
        chart.setOption(this.project.options[id])
        this.charts[id] = chart
      }
    }
  }
}
</script>

<style scoped>
.vue-grid-layout {
  overflow: hidden;
}
</style>