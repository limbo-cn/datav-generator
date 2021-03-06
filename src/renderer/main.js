import Vue from 'vue'
import VueBus from 'vue-bus'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import {
  Button, Select, Dialog, Container, Header, Main, Aside, Menu, MenuItem, MenuItemGroup, Submenu, Tooltip,
  Input, Form, FormItem, Image, Loading, Notification, Option, Slider, Footer, Tabs, TabPane, InputNumber,
  ColorPicker, Radio, RadioGroup, Upload, Checkbox, Table, TableColumn, Tag, Row, Col
} from 'element-ui'

import './assets/iconfont'
// import { borderBox1 } from 'data-view'

//theme
require('./echarts/theme/vintage')
require('./echarts/theme/chalk')
require('./echarts/theme/halloween')
require('./echarts/theme/westeros')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueBus)

//element
Vue.use(Button)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Main)
Vue.use(Tooltip)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Image)
Vue.use(Loading)
Vue.use(Option)
Vue.use(Slider)
Vue.use(Footer)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(InputNumber)
Vue.use(ColorPicker)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Upload)
Vue.use(Checkbox)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Row)
Vue.use(Col)
Vue.use(Loading.directive)

//dataV
// Vue.use(borderBox1)

Vue.prototype.$loading = Loading.service
Vue.prototype.$notify = Notification

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
