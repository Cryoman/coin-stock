import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { store } from './store/store';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import {i18n} from './i18n';

Vue.mixin({
  filters: {
    formatCurrency(cur) {
      let formatter = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      });
      return formatter.format(cur);
    }
  }
})

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});


Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyA1q_QIGRwZXFifxhIzu_XhZpTlAscCxgM",
  authDomain: "coinstock-training.firebaseapp.com",
  projectId: "coinstock-training",
  storageBucket: "coinstock-training.appspot.com",
  messagingSenderId: "292120335818",
  appId: "1:292120335818:web:05cc00189ba5cff51feb33",
  measurementId: "G-22GK64DQJJ"
};

firebase.initializeApp(firebaseConfig);

let app; 

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      router,
      i18n,
      render: h => h(App),
    }).$mount('#app')
  }
})
