import {
  bindContent,
  bindUserContent,
  detachContent,
  detachUserContent,
  storeContent,
  pushListContent
} from '../firebase'

// const labels = [
//   'Don\'t know it',
//   'Read about it in an article',
//   'Tried it out once / made a tutorial',
//   'Made a deeper investigation or tryout project',
//   'Used it once at work',
//   'Daily business',
//   'I\'m an expert'
// ]

const state = {
  template: 'frontend',
  templates: {},
  areas: {},
  items: {},
  values: {}
}

const getters = {
  areas: state => state.areas,
  items: state => state.items,
  values: state => state.values,
  template: state => state.template,
  templates: state => state.templates
}

const actions = {
  bindFirebase({commit, getters}) {
    const template = getters.template
    bindContent(`template-${template}-areas`, data => {
      commit('SET_AREAS', data)
    })
    bindContent(`template-${template}-items`, data => {
      commit('SET_ITEMS', data)
    })
    bindContent(`templates`, data => {
      commit('SET_TEMPLATES', data)
      if (!template) {
        commit('SET_TEMPLATES', data[data.keys[0]])
      }
    })
  },
  bindUserData({commit, getters, rootGetters}) {
    // const template = getters.template
    const uid = rootGetters.user.user.id
    bindUserContent(uid, `values`, data => {
      commit('SET_VALUES', data)
    })
    // bindUserContent(uid, 'template', data => {
    //   if (!template) {
    //     commit('SET_TEMPLATE', data)
    //   }
    // })
  },
  detachFirebase({commit, getters, rootGetters}) {
    const template = getters.template
    detachContent(`template-${template}-areas`)
    commit('SET_AREAS', {})
  },
  detachUserData({commit, rootGetters}) {
    const uid = rootGetters.user.user.id
    detachUserContent(uid, 'values')
    commit('SET_CONTENT', {})
  },
  selectTemplate({commit}, payload) {
    storeContent('template', payload)
  },
  addTemplate({commit}, payload) {
    pushListContent('templates', payload)
  },
  addArea({getters}, payload) {
    const template = getters.template
    // const area = {
    //   children: [],
    //   template: getters.template
    // }
    pushListContent(`${template}-areas`, payload)
  }
}

const mutations = {
  SET_AREAS(state, newAreas) {
    state.areas = newAreas
  },
  SET_ITEMS(state, newItems) {
    state.items = newItems
  },
  SET_VALUES(state, newValues) {
    state.values = newValues
  },
  SET_TEMPLATE(state, newTemplate) {
    state.template = newTemplate
  },
  SET_TEMPLATES(state, newTemplates) {
    state.templates = newTemplates
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
