<template>
  <v-content>
    <Carousel/>
    <!-- <HelloWorld/> -->
    <!-- 使用props来进行父子通信，规定card的图片地址和标题 -->
    <Card imgSrc="https://cdn.vuetifyjs.com/images/cards/desert.jpg" title="Kangaroo ValleySafari"/>

    <!-- 另外，可以使用v-for来循环创建card -->
    <br>
    <h2>Card list example</h2>
    <v-layout row wrap justify-space-between>
      <v-flex v-for="(card, id) in getCardList" :key="id" md3>
        <Card :key="id" :imgSrc="card.src" :title="card.title"/>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

export default {
  data() {
    return {
      
    }
  },
  components: {
    Carousel,
    Card
  },
  computed: {
    ...mapGetters([
      'getCardList'
    ])
  }
};
</script>
