const state = {
  templateId: 1,
  layout: '',
  options: {}
}

const mutations = {
  SET_TEMP_ID: (state, id) => {
    state.templateId = id
  },
  SET_LAYOUT: (state, layout) => {
    state.layout = layout
  },
  SET_OPTIONS: (state, options) => {
    state.options = options
  }
}

const actions = {
  setTemplateId({ commit }, id) {
    commit('SET_TEMP_ID', id)
  },
  setLayout({ commit }, layout) {
    commit('SET_LAYOUT', layout)
  },
  setOptions({ commit }, options) {
    commit('SET_OPTIONS', options)
  }
}

const getters = {
  templateId: state => state.templateId,
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
