import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import {
  Button, Select, Dialog, Container, Header, Main, Aside, Menu, MenuItem, MenuItemGroup, Submenu, Tooltip,
  Input, Form, FormItem, Image, Loading, Notification, Option
} from 'element-ui'
import { borderBox1 } from '@jiaminghi/data-view'

import './assets/iconfont'

require('./echarts/china')
//theme
require('./echarts/theme/vintage')
require('./echarts/theme/chalk')
require('./echarts/theme/halloween')
require('./echarts/theme/macarons')
require('./echarts/theme/purple-passion')
require('./echarts/theme/westeros')
require('./echarts/theme/wonderland')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

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
Vue.use(Loading.directive)

//dataV
Vue.use(borderBox1)

Vue.prototype.$loading = Loading.service
Vue.prototype.$notify = Notification

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
