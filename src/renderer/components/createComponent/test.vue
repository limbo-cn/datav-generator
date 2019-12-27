<template>
  <grid-layout
    :layout.sync="layout"
    :col-num="24"
    :row-height="30"
    :is-draggable="true"
    :is-resizable="true"
    :verticalCompact="false"
    :margin="[5, 5]"
    :use-css-transforms="true"
  >
    <grid-item
      v-for="item in layout"
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
import VueGridLayout from 'vue-grid-layout'

var testLayout = [
  { 'x': 0, 'y': 0, 'w': 2, 'h': 2, 'i': '0' },
  { 'x': 2, 'y': 0, 'w': 2, 'h': 4, 'i': '1' },
  { 'x': 4, 'y': 0, 'w': 2, 'h': 5, 'i': '2' },
  { 'x': 6, 'y': 0, 'w': 2, 'h': 3, 'i': '3' },
  { 'x': 8, 'y': 0, 'w': 2, 'h': 3, 'i': '4' }
]

export default {
  data() {
    return {
      layout: testLayout
    }
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  }
}
</script>
<style scoped>
.vue-grid-item {
  background: #dddddd;
}
</style>>