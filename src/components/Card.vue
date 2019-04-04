<template>
  <v-card>
        <v-img
          :src=imgSrc
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ title }}</h3>
            <div>
              <!-- 卡片的内容也可以作为props传入 -->
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem distinctio eum eius obcaecati labore, dignissimos amet consequatur, est quaerat voluptatum saepe alias dolorum porro. In temporibus tempore eveniet nihil?
            </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
  </v-card>
</template>

<script>
export default {
    // 用于注册父子通信所需要的props
    // 用法和data类似，只是注册域不同
    props: ['title', 'imgSrc']
}
</script>
