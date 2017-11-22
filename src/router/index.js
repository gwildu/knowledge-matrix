import Vue from 'vue'
import Router from 'vue-router'
import KnowledgeMatrix from '../components/KnowledgeMatrix/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'KnowledgeMatrix',
      component: KnowledgeMatrix
    }
  ]
})
