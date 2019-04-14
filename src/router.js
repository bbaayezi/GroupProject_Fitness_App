import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from './views/LoginPage.vue';
import Home from './views/Home.vue';
import Register from './views/Register.vue';

// import mock data
// in peoduction environment it will ve recieved from the server
// import data from '../public/mock/data.json'
// import token from '../public/mock/token'
import store from './store';

// import axios from 'axios'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'redirect',
      // meta: {
      //   requireAuth: true
      // }
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        
      ],
      meta: {
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // can be optimized by utilizing local storage
  // TODO: implement local storge with Vuex
  // axios.get('http://localhost:3000/getToken' /* This server is run seperately */)
  // .then(res => {
    
  // })
  // .catch(err => {
  //   console.log(err)
  // })
  let loginStatus = store.getters.getLoginStatus
    if (to.meta.requireAuth) {
      if (!loginStatus) {
        next('login')
      } else {
        next()
      }
    } else {
      next()
    }
})

export default router