<template>
  <div>
    <el-container>
      <el-aside class="aside" :style="{ height: windowHeight + 'px' }">
        <el-menu class="menu">
          <el-submenu :index="item.type" v-for="item in chartList" :key="item.type">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon" />
              </svg>
              <span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item
              v-for="(o,index) in item.categorys"
              :key="index"
              @dragstart.native="dragChart(o.option)"
              draggable
            >
              <div class="category">
                <div class="category_name">{{o.title}}</div>
                <el-image :src="o.image"></el-image>
              </div>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="other">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bingtu" />
              </svg>
              <span slot="title">其他组件</span>
            </template>

            <el-menu-item
              v-for="item in compList"
              :key="item.type"
              @dragstart.native="dragComponent(item.type,item.defaultLayout)"
              draggable
            >
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="item.icon" />
                </svg>
                <span slot="title">{{item.title}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-form :inline="true">
            <el-form-item label="主题">
              <el-select v-model="project.theme" @change="changeTheme" placeholder="主题">
                <el-option label="default" value="default"></el-option>
                <el-option label="dark" value="dark"></el-option>
                <el-option label="chalk" value="chalk"></el-option>
                <el-option label="halloween" value="halloween"></el-option>
                <el-option label="macarons" value="macarons"></el-option>
                <el-option label="purple-passion" value="purple-passion"></el-option>
                <el-option label="vintage" value="vintage"></el-option>
                <el-option label="westeros" value="westeros"></el-option>
                <el-option label="wonderland" value="wonderland"></el-option>
              </el-select>
            </el-form-item>
            <el-button class="nav_button" type="primary" size="medium" @click="returnToIndex">返回主页</el-button>
            <el-button class="nav_button" type="primary" size="medium" @click="generate">直接使用</el-button>
            <el-button class="nav_button" type="primary" size="medium" @click="showSave">保存</el-button>
          </el-form>
        </el-header>
        <el-main class="main">
          <div
            id="layout_wrapper"
            @dragover="dragover"
            @drop="dropArea"
            @click="cancelSelected"
            :style="{ height: canvasHeight + 'px' }"
          >
            <div class="layout" id="main_layout" @click="cancelSelected">
              <grid-layout
                :layout="project.layout"
                :col-num="24"
                :row-height="30"
                :is-draggable="true"
                :is-resizable="true"
                :verticalCompact="true"
                :use-css-transforms="false"
                :margin="[0, 0]"
              >
                <grid-item
                  v-for="(item,idx) in project.layout"
                  :x="item.x"
                  :y="item.y"
                  :w="item.w"
                  :h="item.h"
                  :i="item.i"
                  :key="item.i"
                  :class="{ selected: selectedId === item.i}"
                  @click.native.stop="editBox($event,item.i)"
                  @resize="resizedChart(item.i)"
                  @resized="resizedChart(item.i)"
                  @dragover.native="dragover"
                  @drop.native.stop="dropBox(item.i)"
                  @contextmenu.native.prevent="$refs.boxMenu.open($event,item.i)"
                >
                  <CusComp :editor="true" :options="project.options[item.i]"></CusComp>
                  <div
                    class="box"
                    v-if=" !project.options[item.i] || project.options[item.i] .type==='chart'"
                    :ref="`box${item.i}`"
                  >{{idx+1}}</div>
                  <!-- <dv-border-box-1 class="box"></dv-border-box-1> -->
                </grid-item>
              </grid-layout>
            </div>
          </div>
        </el-main>
        <el-footer class="footer" height="auto">
          <compEditor @changeOptions="changeOptions" :options="project.options[selectedId]"></compEditor>
        </el-footer>
      </el-container>
    </el-container>
    <el-dialog title="保存" :visible="dialogSaveVisible" :close-on-click-modal="false" width="60%">
      <el-image
        style="width:430px;height:270px;left: 50%;margin-left: -215px;"
        fit="scale-down"
        v-loading="loadingImage"
        :src="project.image"
      ></el-image>
      <el-form label-width="80px">
        <el-form-item label="项目名称">
          <el-input v-model="project.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="dialogSaveVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </el-dialog>
    <context-menu ref="boxMenu" @ctx-open="contextmenuBox">
      <li class="ctx-item" @click="editBox">编辑</li>
      <li class="ctx-item" @click="deleteBox">删除</li>
    </context-menu>
  </div>
</template>

<script>
import echarts from 'echarts'
import VueGridLayout from 'vue-grid-layout'
import domtoimage from 'dom-to-image'
import contextMenu from 'vue-context-menu'
import cloneDeep from 'lodash/cloneDeep'

import { GenNonDuplicateID } from '../../helper'
import chartList from '../../echarts/index'
import compList from '../otherComponents/index.js'
import CusComp from '../otherComponents/index.vue'
import compEditor from '../editComponent/indexEdit'

export default {
  name: 'edit-layout',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    CusComp,
    contextMenu,
    compEditor
  },
  mounted() {
    this.$nextTick(() => {
      this.windowHeight = window.innerHeight
    })
    window.onresize = () => {
      this.windowHeight = window.innerHeight
    }
  },
  data() {
    return {
      chartList: chartList.getListData(),
      compList: compList.getListData(),
      dialogSaveVisible: false,
      loadingImage: false,
      boxId: 0,
      selectedId: 0,
      project: {
        id: 0,
        theme: 'default',
        name: '',
        layout: [],
        options: {},
        image: ''
      },
      windowHeight: 0,
      options: { type: 0 },
      charts: {}
    }
  },
  computed: {
    canvasHeight: function () {
      return this.windowHeight - 300
    },
    projectToEdit: function () {
      return JSON.parse(JSON.stringify(this.$store.getters['common/project']))
    }
  },
  watch: {
    projectToEdit: function (val) {
      this.project = val
      //还原组件
      this.$nextTick(() => {
        for (let id in this.project.options) {
          if (this.project.options[id].type === 'chart') {
            this.charts[id] = echarts.init(this.$refs[`box${id}`][0], this.project.theme)
            this.charts[id].setOption(this.project.options[id].chart)
          }
        }
      })
    }
  },
  methods: {
    dragover(e) {
      e.preventDefault()
    },
    returnToIndex() {
      this.$router.push({ path: '/' })
    },
    contextmenuBox(id) {
      this.boxId = id
    },
    dragChart(option) {
      this.options.type = 'chart'
      this.options.chart = option.apply(this)
    },
    dragComponent(type, layout) {
      this.options.type = type
      this.options[`${type}`] = { layout: layout }
    },
    dropBox(id) {
      if (!this.options.type) {
        return
      }
      if (this.options.type === 'chart') {
        this.renderChart(id)
      }
      this.$set(this.project.options, id, cloneDeep(this.options))
    },
    renderChart(id) {
      if (this.charts[id]) { //chart
        this.charts[id].clear()
      }
      this.charts[id] = echarts.init(this.$refs[`box${id}`][0], this.project.theme)
      this.charts[id].setOption(this.options.chart)
    },
    dropArea() {
      if (!this.options.type) {
        return
      }
      if (this.options.type === 'chart') {
        this.addChart()
      } else {
        this.addComponent()
      }
    },
    addChart() {
      const id = GenNonDuplicateID()
      this.project.layout.push({ 'x': 16, 'y': 18, 'w': 8, 'h': 9, 'i': id })
      this.$nextTick(() => {
        this.$set(this.project.options, id, cloneDeep(this.options))
        this.charts[id] = echarts.init(this.$refs[`box${id}`][0], this.project.theme)
        this.charts[id].setOption(this.options.chart)
      })
    },
    addComponent() {
      const id = GenNonDuplicateID()
      let layout = cloneDeep(this.options[`${this.options.type}`].layout)
      layout.i = id
      this.project.layout.push(layout)
      this.$set(this.project.options, id, cloneDeep(this.options))
    },
    resizedChart(id) {
      if (!this.charts[id]) {
        return
      }
      this.$nextTick(() => {
        this.charts[id].resize()
      })
    },
    editBox(e, selected) {
      if (selected) {
        this.selectedId = selected
      } else {
        this.selectedId = this.boxId
      }
    },
    deleteBox() {
      const id = this.boxId
      let index = this.project.layout.findIndex(o => o.i === id)
      if (index >= 0) {
        if (this.charts[id]) { //chart
          this.charts[id].dispose()
          delete this.charts[id]
        }
        if (this.project.options[id]) {
          delete this.project.options[id]
        }
        this.project.layout.splice(index, 1)
      }
    },
    cancelSelected() {
      this.selectedId = 0
    },
    changeOptions(val) {
      this.project.options[this.selectedId] = val
    },
    changeTheme(val) {
      for (let id in this.charts) {
        const dom = this.charts[id].getDom()
        this.charts[id].dispose()
        this.charts[id] = echarts.init(dom, val)
        this.charts[id].setOption(this.project.options[id].chart)
      }
    },
    showSave() {
      this.selectedId = 0
      this.dialogSaveVisible = true
      this.loadingImage = true
      domtoimage.toPng(document.getElementById('main_layout'), {
        style: { margin: 'auto' },
        imagePlaceholder: '/static/images/empty_image.png'
      }).then(dataUrl => {
        this.loadingImage = false
        this.project.image = dataUrl
      })
    },
    save() {
      this.$store.dispatch('local/addProject', this.project)
      this.dialogSaveVisible = false
      this.$notify({
        title: '成功',
        message: '保存成功',
        type: 'success'
      })
    },
    generate() {
      this.$store.dispatch('common/setProject', this.project)
      this.$bus.emit('showcase')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
  .nav_button {
    margin-left: 10px;
    float: right;
  }
}

.aside {
  width: 250px;
  height: 100%;
  .menu {
    height: 100%;
    .el-menu-item {
      display: table;
      width: 100%;
      .category {
        display: flex;
        flex-flow: column;
        .category_name {
          text-align: center;
          color: #5f5d5d;
          font-size: 14px;
          line-height: 32px;
          display: inline;
        }
        .el-image {
          margin-bottom: 10px;
        }
      }
    }
  }
  .icon {
    margin: 0 5px;
  }
}

.main {
  padding: 0;
  #layout_wrapper {
    display: flex;
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
    .layout {
      margin: auto;
      overflow: visible;
      width: 960px;
      height: 540px;
      background: #414548;
      box-shadow: rgba(0, 0, 0, 0.5) 0 0 30px 0;
      .vue-grid-item {
        background: rgba(13, 42, 67, 0.2);
        text-align: center;
        &:hover {
          background: rgba(55, 110, 210, 0.4);
        }
        .box {
          font-size: 2em;
          color: white;
          width: 100%;
          height: 100%;
          position: absolute;
        }
      }
      .selected {
        background: rgba(13, 42, 67, 0.5);
        border: 2px dashed white;
        box-sizing: border-box;
      }
    }
  }
}

.footer {
  padding: 0;
}
</style>