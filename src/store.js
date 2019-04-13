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
      carouselList: [{
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
      ],
      courseList: [
        {
          title: "Indoor",
          src: "https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        },
        {
          title: "Outdoor",
          src: "https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        }
      ],
      recipeList: [
        {
          title: "Lose Weight",
          src: "https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        },
        {
          title: "Get Strong",
          src: "https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        },
        {
          title: "Get Fit",
          src: "https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        }
      ]
    }
  },
  mutations: {
    SWITCH_LOGIN_STATUS(state) {
      state.userStatus.isLoggedIn = true
    }
  },
  actions: {
    login({
      commit,
      payload
    }) {
      commit('SWITCH_LOGIN_STATUS', payload)
    }
  },
  getters: {
    getLoginStatus: state => state.userStatus.isLoggedIn,
    getCarouselList: state => state.homePage.carouselList,
    getCourseList: state => state.homePage.courseList,
    getRecipeList: state => state.homePage.recipeList
  }
})