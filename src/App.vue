<template>
  <v-app>
    <!-- <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar> -->

    <v-content>
      <!-- <HelloWorld/> -->
      <!-- 使用props来进行父子通信，规定card的图片地址和标题 -->
      <Toolbar/>
      <Carousel/>
      
      <br>
      <!-- <h2>Course</h2>
      <table>
        <tr>
          <td v-for="(card, id) in courseList" :key=id>
            <Card :imgSrc="card.src" :title="card.title"/>
          </td>
        </tr>
      </table> -->
      <!-- 另外，可以使用v-for来循环创建card -->
      <br>
      <h2>Recipe</h2>
      <!-- <ul>
        <li v-for="(card, id) in cardList" :key=id>
          <Card :imgSrc="card.src" :title="card.title"/>
        </li>
      </ul> -->
      <!-- <table width = screen.width> -->
      <v-layout justify-space-around row wrap>
        <v-flex v-for="(card, id) in recipeList" :key=id xs12 sm8 md3>
            <Card :imgSrc="card.src" :title="card.title"/>
        </v-flex>
      </v-layout>
      <!-- </table> -->
      <br>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Card from './components/Card'
import Carousel from './components/Carousel'
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Card,
    Carousel,
    Toolbar,
    Footer
  },
  data () {
    return {
      // 当前vue实例所要用到的数据 (可以理解为MVC中的Model)
      // 实际上Vue是MVVM (Model-View-ViewModel)框架
      // 在示例中的数据直接写死，实际情况可能需要从vuex中获取
      courseList: [
        {
          title: "Kangaroo",
          src: "https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        },
        {
          title: "Valley",
          src: "https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        },
        {
          title: "Safari",
          src: "https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        }
      ],
      recipeList: [
        {
          title: "Kangaroo",
          src: "https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        },
        {
          title: "Valley",
          src: "https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        },
        {
          title: "Safari",
          src: "https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        }
      ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
        ]
    }
  }
}
</script>

<style>
  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
    display: inline;
    float: left;
  }
</style>

