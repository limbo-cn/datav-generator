<template>
  <div>
    <el-dialog class="dialog" fullscreen title="选择布局" :visible="dialogVisible" @close="closeDialog">
      <div class="flex_wrapper">
        <div class="flex_item" @click="addNewFunc">
          <div class="el-upload">
            新建布局
            <i class="el-icon-plus avatar-uploader-icon"></i>
          </div>
        </div>
        <div class="flex_item" @click="editProj([])">空白页</div>
        <div
          @contextmenu.prevent="$refs.layoutMenu.open($event,layout.id)"
          class="flex_item"
          v-for="layout in cusLayouts"
          :key="layout.id"
          @click="editProj(layout.data)"
        >
          <grid-layout
            :layout="layout.data"
            :col-num="24"
            :row-height="6"
            :is-draggable="false"
            :is-resizable="false"
            :verticalCompact="false"
            :use-css-transforms="true"
            :margin="[2, 2]"
          >
            <grid-item
              v-for="(item,idx) in layout.data"
              :x="item.x"
              :y="item.y"
              :w="item.w"
              :h="item.h"
              :i="item.i"
              :key="item.i"
            >{{idx+1}}</grid-item>
          </grid-layout>
          <div style="font-size:18px">{{layout.name}}</div>
        </div>
      </div>
    </el-dialog>
    <el-dialog class="dialog" fullscreen title="编辑布局" :visible="addNew" @close="closeDialogEdit">
      <div class="layout_edit">
        <div class="grid_wrapper">
          <grid-layout
            :layout="newLayout.data"
            :col-num="24"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :verticalCompact="true"
            :use-css-transforms="true"
            :margin="[0, 0]"
          >
            <grid-item
              v-for="(item,idx) in newLayout.data"
              @contextmenu.native.prevent="$refs.boxMenu.open($event,item.i)"
              :x="item.x"
              :y="item.y"
              :w="item.w"
              :h="item.h"
              :i="item.i"
              :key="item.i"
            >{{idx+1}}</grid-item>
          </grid-layout>
        </div>
      </div>
      <div class="tool_area">
        <el-button type="primary" @click="addBox">增加组件</el-button>
        <el-button type="primary" @click="returnToLayouts">返回</el-button>
        <el-input placeholder="请输入预案名称" v-model="newLayout.name" clearable></el-input>
        <el-button type="primary" @click="saveAndRetrun">保存并返回</el-button>
        <el-button type="primary" @click="saveAndUse">保存并直接使用</el-button>
      </div>
    </el-dialog>
    <context-menu ref="layoutMenu" @ctx-open="contextmenuLayouts">
      <li class="ctx-item" @click="editLayout">编辑</li>
      <li class="ctx-item" @click="deleteLayout">删除</li>
    </context-menu>
    <context-menu ref="boxMenu" @ctx-open="contextmenuBox">
      <li class="ctx-item" @click="deleteBox">删除</li>
      <li class="ctx-item disabled">固定</li>
    </context-menu>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
import contextMenu from 'vue-context-menu'

import { GenNonDuplicateID } from '../../helper'

export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    contextMenu
  },
  props: ['dialogVisible'],
  data() {
    return {
      addNew: false,
      layoutId: 0,
      boxId: 0,
      newLayout: {
        id: 0,
        name: '',
        data: [
          { 'x': 0, 'y': 0, 'w': 12, 'h': 9, 'i': GenNonDuplicateID() },
          { 'x': 12, 'y': 0, 'w': 12, 'h': 9, 'i': GenNonDuplicateID() },
          { 'x': 0, 'y': 9, 'w': 12, 'h': 9, 'i': GenNonDuplicateID() },
          { 'x': 12, 'y': 9, 'w': 12, 'h': 9, 'i': GenNonDuplicateID() }
        ]
      }
    }
  },
  computed: {
    cusLayouts: function () {
      return this.$store.getters['local/layouts']
    }
  },
  methods: {
    addNewFunc() {
      this.newLayout.id = new Date().getTime()
      this.addNew = true
    },
    contextmenuLayouts(id) {
      this.layoutId = id
    },
    contextmenuBox(id) {
      this.boxId = id
    },
    editLayout() {
      const id = this.layoutId
      this.newLayout = JSON.parse(JSON.stringify(this.cusLayouts.find(o => o.id === id))) //实现深拷贝，后续如果有其他属性，可能需要修改实现方式
      this.addNew = true
    },
    deleteLayout() {
      const id = this.layoutId
      this.$store.dispatch('local/removeLayout', id)
    },
    addBox() {
      this.newLayout.data.push({ 'x': 0, 'y': 0, 'w': 12, 'h': 9, 'i': GenNonDuplicateID() })
    },
    deleteBox() {
      const id = this.boxId
      let index = this.newLayout.data.findIndex(o => o.i === id)
      if (index >= 0) {
        this.newLayout.data.splice(index, 1)
      }
    },
    fixBox(id) {
      let index = this.newLayout.data.findIndex(o => o.i === id)
      if (index >= 0) {
        this.newLayout.data[index].static = true
      }
    },
    returnToLayouts() {
      this.addNew = false
      this.newLayout.data = [
        { 'x': 0, 'y': 0, 'w': 12, 'h': 9, 'i': GenNonDuplicateID() },
        { 'x': 12, 'y': 0, 'w': 12, 'h': 9, 'i': GenNonDuplicateID() },
        { 'x': 0, 'y': 9, 'w': 12, 'h': 9, 'i': GenNonDuplicateID() },
        { 'x': 12, 'y': 9, 'w': 12, 'h': 9, 'i': GenNonDuplicateID() }
      ]
    },
    saveAndRetrun() {
      this.$store.dispatch('local/addLayout', this.newLayout)
      this.returnToLayouts()
    },
    saveAndUse() {
      this.$store.dispatch('local/addLayout', this.newLayout)
      this.$store.dispatch('common/setProject', {
        id: GenNonDuplicateID(),
        name: '',
        layout: this.newLayout.data,
        options: {},
        image: ''
      })
      this.$router.push({ path: 'project' })
    },
    closeDialog() {
      this.$emit('update:dialogVisible', false)
    },
    closeDialogEdit() {
      this.returnToLayouts()
    },
    editProj(layout) {
      this.$store.dispatch('common/setProject', {
        id: GenNonDuplicateID(),
        name: '',
        layout: layout,
        options: {},
        image: ''
      })
      this.$router.push({ path: 'project' })
    }
  }
}
</script>

<style lang="scss" scoped>
.flex_wrapper {
  display: flex;
  flex-wrap: wrap;
}

.layout_edit {
  display: flex;
  height: 650px;
  overflow: auto;
  background-image: linear-gradient(
      45deg,
      #f5f5f5 25%,
      transparent 0,
      transparent 75%,
      #f5f5f5 0
    ),
    linear-gradient(
      45deg,
      #f5f5f5 25%,
      transparent 0,
      transparent 75%,
      #f5f5f5 0
    );
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  .grid_wrapper {
    background: rgba(174, 213, 247, 1);
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 30px 0;
    height: 540px;
    width: 80%;
    margin: auto;

    .vue-grid-item {
      background: rgba(13, 42, 67, 0.2);
      text-align: center;
      font-size: 2em;
    }
    .vue-grid-item:hover {
      background: rgba(13, 42, 67, 0.4);
    }
  }
}

.tool_area {
  margin: 20px 10px;
  display: flex;
  justify-content: flex-end;
  .el-input {
    width: 300px;
    margin: 0 10px;
  }
}

.flex_item {
  border: 1px dashed grey;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  height: 170px;
  width: 250px;
  cursor: pointer;
  text-align: center;
}

.flex_item:hover {
  box-shadow: 8px 8px 8px 0 #aaa;
  border: 1px dashed #1989fa;
}

.vue-grid-item {
  background: #dddddd;
  text-align: center;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100%;
  height: 200px;
  line-height: 200px;
}
</style>