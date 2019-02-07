import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userStatus: {
      isLoggedIn: false
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
    getLoginStatus: state => state.userStatus.isLoggedIn
  }
})
