import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userStatus: {
      // check for login status
      isLoggedIn: true,
    },
    homePage: {
      carouselList: [
        {
            title: '1',
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
            title: '2',
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
            title: '3',
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
      ]
    }
  },
  mutations: {
    SWITCH_LOGIN_STATUS (state) {
      state.userStatus.isLoggedIn = true
    }
  },
  actions: {
    login({commit, payload}) {
      commit('SWITCH_LOGIN_STATUS', payload)
    }
  },
  getters: {
    getLoginStatus: state => state.userStatus.isLoggedIn,
    getCarouselList: state=> state.homePage.carouselList
  }
})
