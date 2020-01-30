import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router.js'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false
// Vue.use(vuetify, {
//   iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
// })


new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
