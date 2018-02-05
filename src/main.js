import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'

import store from './store'

sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
