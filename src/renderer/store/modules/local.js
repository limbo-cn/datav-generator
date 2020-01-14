const state = {
    layouts: [],
    projects: [], // id,name,image,layout,options
    events: []
}

const mutations = {
    ADD_LAYOUT: (state, layout) => {
        let index = state.layouts.findIndex(o => o.id === layout.id)
        if (index >= 0) {
            state.layouts.splice(index, 1, layout) // splice来触发vue computed
        } else {
            state.layouts.push(layout)
        }
    },
    REMOVE_LAYOUT: (state, id) => {
        state.layouts.splice(state.layouts.findIndex(item => item.id === id), 1)
    },
    CLEAR_LAYOUTS: (state) => {
        state.layouts = []
    },
    ADD_PROJECT: (state, project) => {
        let index = state.projects.findIndex(o => o.id === project.id)
        if (index >= 0) {
            state.projects.splice(index, 1, project) // splice来触发vue computed
        } else {
            state.projects.push(project)
        }
    },
    REMOVE_PROJECT: (state, id) => {
        state.projects.splice(state.projects.findIndex(item => item.id === id), 1)
    },
    CLEAR_PROJECTS: (state) => {
        state.projects = []
    },
    ADD_EVENT: (state, event) => {
        let index = state.events.findIndex(o => o.id === event.id)
        if (index >= 0) {
            state.events.splice(index, 1, event) // splice来触发vue computed
        } else {
            state.events.push(event)
        }
    },
    REMOVE_EVENT: (state, id) => {
        state.events.splice(state.events.findIndex(item => item.id === id), 1)
    }
}

const actions = {
    addLayout({ commit }, layout) {
        commit('ADD_LAYOUT', layout)
    },
    removeLayout({ commit }, id) {
        commit('REMOVE_LAYOUT', id)
    },
    clearLayouts({ commit }) {
        commit('CLEAR_LAYOUTS')
    },
    addProject({ commit }, project) {
        commit('ADD_PROJECT', project)
    },
    removeProject({ commit }, id) {
        commit('REMOVE_PROJECT', id)
    },
    clearProjects({ commit }) {
        commit('CLEAR_PROJECTS')
    },
    addEvent({ commit }, event) {
        commit('ADD_EVENT', event)
    },
    removeEvent({ commit }, id) {
        commit('REMOVE_EVENT', id)
    }
}

const getters = {
    layouts: state => state.layouts,
    projects: state => state.projects,
    events: state => state.events
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
