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
    coursePage:{
      indoorList: [
        {
          title: "Full-Body",
          src: require('../public/img/card/full.jpg')
        },
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
        {
          title: "Running",
          src: require('../public/img/card/running.jpg')
        }
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
    getIndoorList: state => state.coursePage.indoorList,
    getOutdoorList: state => state.coursePage.outdoorList,
    getNutritionList: state => state.recipePage.nutritionList,
    getExerciseList: state => state.recipePage.exerciseList,
  }
})