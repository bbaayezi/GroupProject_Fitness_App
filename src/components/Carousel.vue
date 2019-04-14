<template>
    <v-carousel>
        <v-carousel-item
            v-for="(item, i) in carouselItems"
            :key="i"
            :src="item.src"
        ></v-carousel-item>
    </v-carousel>
</template>

<script>
export default {

    data() {
        return {
            carouselItems: this.$store.getters.getCarouselList
        }
    },
    
}
</script>


