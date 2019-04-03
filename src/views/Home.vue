<template>
  <div>
    <Carousel />
    <Cards
      class="card" 
      imageSrc="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
      title="Sample "
      />
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import Carousel from '../components/Carousel'
  import Cards from '../components/Cards'

  export default {
    components: {
      HelloWorld,
      Carousel,
      Cards
    }
  }
</script>

<style scoped>
  .card {
    position: absolute
  }
</style>
