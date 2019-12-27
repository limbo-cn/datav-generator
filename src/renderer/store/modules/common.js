const state = {
  template: '',
  layout: '',
  options: {}
}

const mutations = {
  SET_TEMP: (state, template) => {
    state.template = template
  },
  SET_LAYOUT: (state, layout) => {
    state.layout = layout
  },
  SET_OPTIONS: (state, options) => {
    state.options = options
  }
}

const actions = {
  setTemplate({ commit }, template) {
    commit('SET_TEMP', template)
  },
  setLayout({ commit }, layout) {
    commit('SET_LAYOUT', layout)
  },
  setOptions({ commit }, options) {
    commit('SET_OPTIONS', options)
  }
}

const getters = {
  template: state => state.template,
  layout: state => state.layout,
  options: state => state.options
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
