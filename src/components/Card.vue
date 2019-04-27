<template>
  <v-card>
    <div class="hover01">
            <figure>
        <v-img
          :src=imgSrc
          aspect-ratio="1.5"
        ></v-img>
        </figure>
        </div>

        <v-card-title primary-title>
            <div class="headline mb-0 text-md-center"><b>{{ title }}</b></div>
            <v-spacer></v-spacer>
            <v-card-actions>
          <v-btn flat color="orange" @click="jump(link)">VIEW</v-btn>
        </v-card-actions>
        </v-card-title>
        
  </v-card>
</template>

<script>
export default {
    // 用于注册父子通信所需要的props
    // 用法和data类似，只是注册域不同
    props: ['title', 'imgSrc','link'],
    methods: {
      jump(link){
        this.$router.push(link);
      }
    }
}
</script>
<style>
.hover01{
  overflow: hidden;
}
.hover01 figure {
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.hover01 figure:hover{
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
}
</style>

