<template>
  <v-card>
        <v-img
          :src=imgSrc
          aspect-ratio="1.5"
        ></v-img>

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

