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
      <Card imgSrc="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        title="Kangaroo ValleySafari"/>
      
      <!-- 另外，可以使用v-for来循环创建card -->
      <br>
      <h2>Card list example</h2>
      <v-layout row wrap justify-space-between>
        <v-flex v-for="(card, id) in cardList" :key=id md3>
          <Card :key=id :imgSrc="card.src" :title="card.title"/>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Card from './components/Card'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Card
  },
  data () {
    return {
      // 当前vue实例所要用到的数据 (可以理解为MVC中的Model)
      // 实际上Vue是MVVM (Model-View-ViewModel)框架
      // 在示例中的数据直接写死，实际情况可能需要从vuex中获取
      cardList: [
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

