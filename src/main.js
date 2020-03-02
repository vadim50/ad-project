import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal.vue'
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
Vue.component('app-buy-modal', BuyModalComponent)

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
    apiKey: "AIzaSyD8tUqm-I_qKh7odu6IVla--uzs_YG1InM",
    authDomain: "ads2020-4ef1f.firebaseapp.com",
    databaseURL: "https://ads2020-4ef1f.firebaseio.com",
    projectId: "ads2020-4ef1f",
    storageBucket: "ads2020-4ef1f.appspot.com",
    messagingSenderId: "754689629294",
    appId: "1:754689629294:web:e9442e31b8bfa39d295a7f",
    measurementId: "G-CZ3X4ET411"
  })

  fb.auth().onAuthStateChanged(user => {
    if(user) {
      this.$store.dispatch('autoLoginUser', user)
    }
  })

  this.$store.dispatch('fetchAds')

  },

}).$mount('#app')
