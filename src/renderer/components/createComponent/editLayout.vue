<template>
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
      </el-menu>
      <el-tooltip effect="dark" content="拖拽组件布局" placement="top">
        <div id="preview" draggable></div>
      </el-tooltip>
    </el-aside>
    <el-container>
      <el-header class="header">
        <el-button class="nav_button" type="primary" size="medium" @click="returnToIndex">返回主页</el-button>
        <el-button class="nav_button" type="primary" size="medium" @click="generate">直接使用</el-button>
      </el-header>
      <el-main>
        <div class="layout" id="main_layout" :style="{ height: canvasHeight + 'px' }" ref="layout">
          <template1 v-if="templateId===1" @dropBox="dropChart"></template1>
          <template2 v-if="templateId===2" @dropBox="dropChart"></template2>
          <template3 v-if="templateId===3" @dropBox="dropChart"></template3>
          <template4 v-if="templateId===4" @dropBox="dropChart"></template4>
          <template5 v-if="templateId===5" @dropBox="dropChart"></template5>
          <template6 v-if="templateId===6" @dropBox="dropChart"></template6>
          <template7 v-if="templateId===7" @dropBox="dropChart"></template7>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import echarts from 'echarts'

import Bar from '../../echarts/bar'
import Line from '../../echarts/line'
import Pie from '../../echarts/pie'

import template1 from '../templates/template1'
import template2 from '../templates/template2'
import template3 from '../templates/template3'
import template4 from '../templates/template4'
import template5 from '../templates/template5'
import template6 from '../templates/template6'
import template7 from '../templates/template7'

export default {
  name: 'edit-layout',
  components: {
    'template1': template1,
    'template2': template2,
    'template3': template3,
    'template4': template4,
    'template5': template5,
    'template6': template6,
    'template7': template7
  },
  data() {
    return {
      windowHeight: 0,
      previewChart: null,
      option: null,
      optionList: {}
    }
  },
  computed: {
    templateId: function () {
      return this.$store.getters['common/templateId']
    },
    canvasHeight: function () {
      return this.windowHeight + 150
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
    dropChart(e, index) {
      if (!this.option) {
        return
      }
      this.optionList[index] = this.option
      var chart = echarts.init(e.target, 'dark')
      chart.setOption(this.option)
    },
    generate() {
      this.PreDeal()

      this.$store.dispatch('common/setLayout', this.$refs.layout.outerHTML)
      this.$store.dispatch('common/setOptions', this.optionList)
      const { BrowserWindow } = require('electron').remote
      let win = new BrowserWindow({ width: 800, height: 600, frame: false, fullscreen: true })
      win.on('closed', () => {
        win = null
      })
      win.loadURL('http://localhost:9080#showcase')
      this.NextDeal()
    },
    PreDeal() {
      for (let dom of document.getElementsByClassName('box')) {
        dom.style.margin = '0px'
      }
    },
    NextDeal() {
      for (let dom of document.getElementsByClassName('box')) {
        dom.style.margin = '1px'
      }
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

.layout {
  display: flex;
  width: 100%;
  flex: 1;
}

#preview {
  width: 300px;
  height: 250px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #e6e6e6;
  box-sizing: border-box;
  border-right: 1px solid #e6e6e6;
}

#preview:hover {
  box-shadow: 0px 0px 15px rgba(199, 199, 199, 0.8);
}
</style>