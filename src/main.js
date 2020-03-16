import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import vuetify from './plugins/vuetify';

import ScrollAnimation from './assets/scroll';

Vue.directive('scroll', ScrollAnimation);

import firebase from "firebase";
import firebaseConfig from "@/fb";
import './registerServiceWorker'

firebase.initializeApp(firebaseConfig);

let app = '';
Vue.use(Chartkick.use(Chart))
Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
