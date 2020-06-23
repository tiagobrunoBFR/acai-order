import Vue from 'vue'
import './plugins/axios'
import "@/components";
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import {makeServer} from './api/server'
import "./plugins/vuelidate";

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
