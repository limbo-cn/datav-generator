<template>
  <el-dialog class="dialog" title="选择布局" :visible="dialogVisible" @close="closeDialog" width="80%">
    <div class="flex_wrapper">
      <div class="flex_item" @click="editLayout([])">空白页</div>
      <div
        class="flex_item"
        v-for="(layout,index) in layouts"
        :key="index"
        @click="editLayout(layout)"
      >
        <grid-layout
          :layout="layout"
          :col-num="24"
          :row-height="10"
          :is-draggable="false"
          :is-resizable="false"
          :verticalCompact="false"
          :margin="[1, 1]"
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
      </div>
    </div>
  </el-dialog>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'

export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  props: ['dialogVisible'],
  data() {
    return {
      layouts: [
        [
          { 'x': 0, 'y': 0, 'w': 24, 'h': 18, 'i': '1' }
        ],
        [
          { 'x': 0, 'y': 0, 'w': 12, 'h': 18, 'i': '1' },
          { 'x': 12, 'y': 0, 'w': 12, 'h': 18, 'i': '2' }
        ],
        [
          { 'x': 0, 'y': 0, 'w': 8, 'h': 18, 'i': '1' },
          { 'x': 8, 'y': 0, 'w': 8, 'h': 18, 'i': '2' },
          { 'x': 16, 'y': 0, 'w': 8, 'h': 18, 'i': '3' }
        ],
        [
          { 'x': 0, 'y': 0, 'w': 12, 'h': 9, 'i': '1' },
          { 'x': 12, 'y': 0, 'w': 12, 'h': 9, 'i': '2' },
          { 'x': 0, 'y': 9, 'w': 12, 'h': 9, 'i': '3' },
          { 'x': 12, 'y': 9, 'w': 12, 'h': 9, 'i': '4' }
        ],
        [
          { 'x': 0, 'y': 0, 'w': 8, 'h': 9, 'i': '1' },
          { 'x': 8, 'y': 0, 'w': 8, 'h': 9, 'i': '2' },
          { 'x': 16, 'y': 0, 'w': 8, 'h': 9, 'i': '3' },
          { 'x': 0, 'y': 9, 'w': 8, 'h': 9, 'i': '4' },
          { 'x': 8, 'y': 9, 'w': 8, 'h': 9, 'i': '5' },
          { 'x': 16, 'y': 9, 'w': 8, 'h': 9, 'i': '6' }
        ]
      ]
    }
  },
  methods: {
    closeDialog() {
      this.$emit('update:dialogVisible', false)
    },
    editLayout(layout) {
      this.$store.dispatch('common/setTemplate', layout)
      this.$router.push({ path: 'layout' })
    }
  }
}
</script>

<style  scoped>
.flex_wrapper {
  display: flex;
  flex-wrap: wrap;
  height: 500px;
  overflow: auto;
}

.flex_item {
  border: 1px dashed grey;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  height: 200px;
  width: 250px;
  cursor: pointer;
}

.flex_item:hover {
  box-shadow: 8px 8px 8px 0 #aaa;
  border: 1px dashed #1989fa;
}

.vue-grid-item {
  background: #dddddd;
  text-align: center;
}
</style>