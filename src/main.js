import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Chartist from "chartist"
import GlobalComponents from './libs/vue-material-dashboard/globalComponents'
import MaterialDashboard from './libs/vue-material-dashboard/material-dashboard'

import axios from 'axios';

Vue.config.productionTip = false
// register
Vue.use(GlobalComponents);
Vue.use(MaterialDashboard);
Vue.prototype.$axios = axios;
Vue.prototype.$Chartist = Chartist;

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    Chartist: Chartist
  }
}).$mount('#app')
