import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

let plugins = []
if (!process.env.IS_WEB) {
  const { createPersistedState, createSharedMutations } = require('vuex-electron')
  plugins = [
    createPersistedState(),
    createSharedMutations()
  ]
}

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: plugins,
  strict: process.env.NODE_ENV !== 'production'
})
