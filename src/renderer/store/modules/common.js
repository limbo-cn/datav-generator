const state = {
  project: {}
}

const mutations = {
  SET_PROJECT: (state, project) => {
    state.project = project
  }
}

const actions = {
  setProject({ commit }, project) {
    commit('SET_PROJECT', project)
  }
}

const getters = {
  project: state => state.project
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
