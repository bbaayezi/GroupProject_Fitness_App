import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userStatus: {
      // check for login status
      isLoggedIn: false,
    },
    homePage: {
      carouselList: [{
          title: '1',
          src: require('../public/img/card/banner1.jpg')
        },
        {
          title: '2',
          src: require('../public/img/card/banner2.jpeg')
        },
        {
          title: '3',
          src: require('../public/img/card/banner3.jpg')
        },
      ],
      courseList: [
        {
          title: "Indoor",
          src: require('../public/img/card/indoor.jpg')
        },
        {
          title: "Outdoor",
          src: require('../public/img/card/outdoor.png')
        }
      ],
      recipeList: [
        {
          title: "Lose Weight",
          src: require('../public/img/card/food1.jpg')
        },
        {
          title: "Get Strong",
          src: require('../public/img/card/food2.jpg')
        },
        {
          title: "Get Fit",
          src: require('../public/img/card/food3.jpg')
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
    aboutPage:{
      infoList: [{
        ID: 123456,
        name:"Mike",
        age: 20,
        gender: "Male",
        height: 180,
        weight: 120,
        identity: "User",
        mail:"mike@gmail.com",
        img:"https://avataaars.io/?avatarStyle=Transparent&hairColor=orange&facialHairType=Blank&clotheType=Hoodie&clotheColor=red&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
      },
    ],
    }
  },
  mutations: {
    switchLoginStatus(state, payload) {
      state.userStatus.isLoggedIn = payload.status
    }
  },
  actions: {
    toggleLogin({commit}, payload) {
      commit('switchLoginStatus', payload)
    }
  },
  getters: {
    getLoginStatus: state => state.userStatus.isLoggedIn,
    getCarouselList: state => state.homePage.carouselList,
    getCourseList: state => state.homePage.courseList,
    getRecipeList: state => state.homePage.recipeList,
    getInfoList: state => state.aboutPage.infoList,
  }
})