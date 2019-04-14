<template>
  <v-flex xs12>
    <v-card color="gray-2" class="black--text">
        <v-layout>
            <v-flex xs5>
            <v-img
                :src=imgSrc
                height="125px"
                contain
            ></v-img>
            </v-flex>
            <v-flex xs7>
            <v-card-title primary-title>
                <div>
                <div class="headline">ID: {{ID}}</div>
                <div>Name: {{name}}</div>
                <div>Age: {{age}}</div>
                <div>Height: {{height}}</div>
                <div>weight: {{weight}}</div>
                <div>identity: {{identity}}</div>
                </div>
            </v-card-title>
            </v-flex>
        </v-layout>
    <v-divider light></v-divider>
    </v-card>
</v-flex>
</template>

<script>
export default {
    props: ['ID', 'name', 'age', 'gender', 'height', 'weight', 'identity', 'imgSrc']
    
}
</script>
