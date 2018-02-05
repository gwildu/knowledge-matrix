import Vue from 'vue'
import Vuex from 'vuex'
import knowledgeMatrix from './knowledge-matrix'
import user from './user'

const modules = {
  knowledgeMatrix,
  user
}

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  state: {},
  getters: {},
  actions: {},
  mutations: {}
})

export default store
