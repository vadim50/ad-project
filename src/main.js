import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index.js'
import store from './store'
import * as fb from 'firebase/app'
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

Vue.use(VueRouter)

Vue.config.productionTip = false
// Vue.use(vuetify, {
//   iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
// })


new Vue({
  store,
  vuetify,
  router,
  render: h => h(App),
  created () {
  // Initialize Firebase
  fb.initializeApp({
    apiKey: 'AIzaSyBj2mAeImflPloG1kt5e_G-VpAG897vtas',
    authDomain: 'its-ads-7b708.firebaseapp.com',
    databaseURL: 'https://its-ads-7b708.firebaseio.com',
    projectId: 'its-ads-7b708',
    storageBucket: 'its-ads-7b708.appspot.com',
    messagingSenderId: '508516642073',
    appId: '1:508516642073:web:4a59fd7cb88b36d34b6988',
    measurementId: 'G-NE5BXZP5V1'
  })
  }
}).$mount('#app')
