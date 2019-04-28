import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Chartist from "chartist"
import GlobalComponents from './libs/vue-material-dashboard/globalComponents'
import MaterialDashboard from './libs/vue-material-dashboard/material-dashboard'

import swal from 'sweetalert2';
import axios from 'axios';
import { request } from 'http';

window.swal = swal;
// create an axios instance
const fitnessHttp = axios.create({
  baseURL: 'http://test.scarlet-temp.tk/'
});
// setup interceptors
fitnessHttp.interceptors.request.use(req => {
  if ('fitness_token' in window.localStorage) {
    const fitness_token = window.localStorage.getItem('fitness_token');
    req.headers['Authorization'] = `Bearer ${fitness_token}`;
  }
  return req;
})
fitnessHttp.interceptors.response.use(res => {
  console.log(res);
  if (res.status == 200) {
    // if token not exist, store the token
    if (res.data.token) {
      console.log(`Initilizing token: ${res.data.token}`);
      window.localStorage.setItem('fitness_token', res.data.token);
      const Toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      
      Toast.fire({
        type: 'success',
        title: 'Signed in successfully'
      });
    } else {
      console.log(`No Response token`);
    }
    // setup login status
    store.dispatch('toggleLogin', {status: true});
    return res;
  }
},
err => {
  const errRes = err.response;
  console.log(`Error in interceptor`);
  console.log(`Error: ${err}`);
  if (errRes && errRes.staus == 401) {
    window.localStorage.removeItem('fitness_token');
  }
  swal.fire({
    type: 'error',
    title: 'Oops...',
    text: `Something wrong with server: \n${err}`,
  });
  router.push('/home');
  return Promise.reject(err);
})
Vue.config.productionTip = false
// register
Vue.use(GlobalComponents);
Vue.use(MaterialDashboard);
Vue.prototype.$axios = axios;
Vue.prototype.$fitnessHttp = fitnessHttp;
Vue.prototype.$Chartist = Chartist;

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    Chartist: Chartist
  }
}).$mount('#app')
