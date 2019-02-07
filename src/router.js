import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from './views/LoginPage.vue'

// import mock data
// in peoduction environment it will ve recieved from the server
import data from '../public/mock/data.json'
import token from '../public/mock/token'
import store from './store'

import axios from 'axios'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'null'
    // },
    {
      path: '/login',
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
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