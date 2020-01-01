<template>
  <div>
    <el-container>
      <el-aside class="aside" :style="{ height: windowHeight + 'px' }">
        <el-menu class="menu">
          <el-submenu index="1">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jibenzhexiantu" />
              </svg>
              <span slot="title">折线图</span>
            </template>
            <el-menu-item index="1-1" @click="basicLine">基本折线图</el-menu-item>
            <el-menu-item index="1-2" @click="cArea">层叠面积图</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jibenzhuzhuangtu" />
              </svg>
              <span slot="title">柱状图</span>
            </template>
            <el-menu-item index="2-1" @click="basicBar">基本柱状图</el-menu-item>
            <el-menu-item index="2-2">堆叠柱状图</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bingtu" />
              </svg>
              <span slot="title">饼图</span>
            </template>
            <el-menu-item index="3-1" @click="basicPie">基本饼图</el-menu-item>
            <el-menu-item index="3-2" @click="vPie">可视化饼图</el-menu-item>
          </el-submenu>
          <el-submenu index="10">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bingtu" />
              </svg>
              <span slot="title">gallery</span>
            </template>
            <el-menu-item index="10-2" @click="messageMap">message map</el-menu-item>
          </el-submenu>
        </el-menu>
        <el-tooltip effect="dark" content="拖拽组件布局" placement="top">
          <div id="preview" @click="addChart" draggable></div>
        </el-tooltip>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-button class="nav_button" type="primary" size="medium" @click="returnToIndex">返回主页</el-button>
          <el-button class="nav_button" type="primary" size="medium" @click="generate">直接使用</el-button>
          <el-button class="nav_button" type="primary" size="medium" @click="showSave">保存</el-button>
        </el-header>
        <el-main class="main">
          <div class="layout_wrapper" :style="{ height: canvasHeight + 'px' }">
            <div class="layout" id="main_layout">
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
                  @resize="resizedChart(item.i)"
                  @resized="resizedChart(item.i)"
                >
                  <div
                    class="box"
                    :ref="`box${item.i}`"
                    @dragover="dragover"
                    @drop="dropChart($event,item.i)"
                  >{{idx+1}}</div>
                </grid-item>
              </grid-layout>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <el-dialog
      title="保存"
      :visible.sync="dialogSaveVisible"
      :close-on-click-modal="false"
      width="60%"
    >
      <el-image style="margin:0 0 10px 0" v-loading="loadingImage" :src="project.image"></el-image>
      <el-form label-width="80px">
        <el-form-item label="项目名称">
          <el-input v-model="project.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogSaveVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import echarts from 'echarts'
import VueGridLayout from 'vue-grid-layout'
import { GenNonDuplicateID } from '../../helper'
import html2canvas from 'html2canvas'

import Bar from '../../echarts/bar'
import Line from '../../echarts/line'
import Pie from '../../echarts/pie'
import Gallery from '../../echarts/gallery'

export default {
  name: 'edit-layout',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data() {
    return {
      dialogSaveVisible: false,
      loadingImage: false,
      project: {
        id: 0,
        name: '',
        layout: [],
        options: {},
        image: ''
      },
      windowHeight: 0,
      previewChart: null,
      option: null,
      charts: {}
    }
  },
  computed: {
    canvasHeight: function () {
      return this.windowHeight + 188
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
          this.charts[id] = echarts.init(this.$refs[`box${id}`][0], 'dark')
          this.charts[id].setOption(this.project.options[id])
        }
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.windowHeight = window.innerHeight - 250
    })
    window.onresize = () => {
      this.windowHeight = window.innerHeight - 250
    }
    this.previewChart = echarts.init(document.getElementById('preview'), 'dark')
  },
  methods: {
    returnToIndex() {
      this.$router.push({ path: '/' })
    },
    basicLine() {
      this.previewChart.clear()
      this.option = Line.getMockBasicLine()
      this.previewChart.setOption(this.option)
    },
    cArea() {
      this.previewChart.clear()
      this.option = Line.getMockCArea()
      this.previewChart.setOption(this.option)
    },
    basicBar() {
      this.previewChart.clear()
      this.option = Bar.getMockBasicBar()
      this.previewChart.setOption(this.option)
    },
    basicPie() {
      this.previewChart.clear()
      this.option = Pie.getMockBasicPie()
      this.previewChart.setOption(this.option)
    },
    vPie() {
      this.previewChart.clear()
      this.option = Pie.getMockVPie()
      this.previewChart.setOption(this.option)
    },
    messageMap() {
      this.previewChart.clear()
      this.option = Gallery.getMessageMap()
      this.previewChart.setOption(this.option)
    },
    dragover(e) {
      e.preventDefault()
    },
    dropChart(e, id) {
      if (!this.option) {
        return
      }
      this.project.options[id] = this.option
      if (this.charts[id]) {
        this.charts[id].clear()
      }
      this.charts[id] = echarts.init(e.target, 'dark')
      this.charts[id].setOption(this.option)
    },
    addChart() {
      if (!this.option) {
        return
      }
      const id = GenNonDuplicateID()
      this.project.layout.push({ 'x': 0, 'y': 0, 'w': 8, 'h': 9, 'i': id })
      this.$nextTick(() => {
        this.project.options[id] = this.option
        this.charts[id] = echarts.init(this.$refs[`box${id}`][0], 'dark')
        this.charts[id].setOption(this.option)
      })
    },
    resizedChart(id) {
      if (!this.charts[id]) {
        return
      }
      this.$nextTick(() => {
        this.charts[id].resize()
      })
    },
    editComponent(id) {
      alert(id)
    },
    showSave() {
      this.dialogSaveVisible = true
      this.loadingImage = true
      html2canvas(document.querySelector('#main_layout')).then(canvas => {
        this.loadingImage = false
        this.project.image = canvas.toDataURL('image/jpg')
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
      const { BrowserWindow } = require('electron').remote
      let win = new BrowserWindow({ frame: false, fullscreen: true })
      win.on('closed', () => {
        win = null
      })
      const winURL = process.env.NODE_ENV === 'development'
        ? `http://localhost:9080#showcase`
        : `file://${__dirname}/index.html#showcase`
      win.loadURL(winURL)
    }
  }
}
</script>

<style  scoped>
.header {
  padding: 0;
  border-bottom: 1px solid #e6e6e6;
}

.nav_button {
  margin: 10px 10px 10px 0;
  float: right;
}

.icon {
  margin: 0 5px;
}

.aside {
  width: 250px;
  height: 100%;
}

.menu {
  height: 100%;
}

.main {
  padding: 0;
}

#main_layout {
  margin: auto;
  overflow: visible;
  width: 960px;
  height: 540px;
  background: rgba(174, 213, 247, 1);
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 30px 0;
}

.layout_wrapper {
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
}

#preview {
  width: 300px;
  height: 250px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #e6e6e6;
  box-sizing: border-box;
  border-right: 1px solid #e6e6e6;
  padding: 5px;
}

#preview:hover {
  box-shadow: 0px 0px 15px rgba(199, 199, 199, 0.8);
}

.vue-grid-item {
  background: rgba(13, 42, 67, 0.2);
  text-align: center;
  font-size: 2em;
}
.vue-grid-item:hover {
  background: rgba(13, 42, 67, 0.4);
}

.box {
  width: 100%;
  height: 100%;
}
</style>