import Vue from 'vue'
import Router from 'vue-router'
import KnowledgeMatrix from '../components/KnowledgeMatrix.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'KnowledgeMatrix',
      component: KnowledgeMatrix
    }
  ]
})
