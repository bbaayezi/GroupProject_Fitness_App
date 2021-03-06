import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userStatus: {
      // check for login status
      isLoggedIn: false,
      isOauth: false,
      userCurrentView: 'home',
    },
    navbar: {
      drawerSwitch: null
    },
    homePage: {
      recipeList: [
        {
          title: "Lose Weight",
          src: require('../public/img/card/food1.jpg'),
          link: 'recipe'
        },
        {
          title: "Get Strong",
          src: require('../public/img/card/food2.jpg'),
          link: 'recipe'
        },
        {
          title: "Get Fit",
          src: require('../public/img/card/food3.jpg'),
          link: 'recipe'
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
    },
    coursePage:{
      indoorList: [
        {
          title: "Upper Body",
          src: require('../public/img/card/upper.jpg')
        },
        {
          title: "Lower Body",
          src: require('../public/img/card/lower.jpg')
        },
        {
          title: "Core",
          src: require('../public/img/card/core.jpg')
        }
      ],outdoorList: [
        {
          title: "Skating",
          src: require('../public/img/card/skating.jpg')
        },
        {
          title: "Climbing",
          src: require('../public/img/card/climbing.jpg')
        },
        {
          title: "Swimming",
          src: require('../public/img/card/swimming.jpg')
        },
      ]
    },
    recipePage:{
      nutritionList: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }

      ],
      exerciseList:[1,2,3,5,7,8,9],
    },
    summaryPage:{
      userInfo: {
        name: null,
        email: null,
        age: null,
        sex: null,
        height: null,
        weight: null
      }
    },
  },
  
  mutations: {
    switchLoginStatus(state, payload) {
      state.userStatus.isLoggedIn = payload.status
    },
    switchUserCurrentView(state,payload){
      state.userStatus.userCurrentView = payload.status
    },
    updateUser(state, payload) {
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
          const element = payload[key];
          if (key in state.summaryPage.userInfo) {
            state.summaryPage.userInfo[key] = element;
          }
        }
      }
    },
    updateOauthLogin(state, status) {
      state.userStatus.isOauth = status;
    }
  },
  actions: {
    toggleLogin({commit}, payload) {
      console.log(`Action: toogleLogin with payload ${payload}`)
      commit('switchLoginStatus', payload)
    },
    toggleUserView({commit}, payload) {
      commit('switchUserCurrentView', payload)
    },
    setUserInfo({commit}, payload) {
      console.log(`Action: setUserInfo with payload ${payload}`)
      commit('updateUser', payload)
    },
    setOauthLogin({commit}, status) {
      commit('updateOauthLogin', status);
    }
  },
  getters: {
    getLoginStatus: state => state.userStatus.isLoggedIn,
    getCarouselList: state => state.homePage.carouselList,
    getCourseList: state => state.homePage.courseList,
    getRecipeList: state => state.homePage.recipeList,
    getUserInfo: state => state.summaryPage.userInfo,
    getIndoorList: state => state.coursePage.indoorList,
    getOutdoorList: state => state.coursePage.outdoorList,
    getNutritionList: state => state.recipePage.nutritionList,
    getExerciseList: state => state.recipePage.exerciseList,
    getUserCurrentView: state => state.userStatus.userCurrentView,
    getOauthStatus: state => state.userStatus.isOauth
  }
})