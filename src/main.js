import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { store } from './store/store';

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


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
