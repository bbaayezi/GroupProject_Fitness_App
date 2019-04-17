<template>
  <v-flex xs11>
    <v-card color="gray-2" class="black--text">
        <v-layout>
            <v-flex xs5>
            <v-img
                :src=imgSrc
                height="200px"
                contain
            ></v-img>
            </v-flex>
            <v-flex xs7>
            <v-card-title primary-title>
                <div>
                <div class="headline">ID: {{ID}}</div>
                <div>Name: {{name}}</div>
                <div>Age: {{age}}</div>
                <div>Gender: {{gender}}</div>
                <div>Height: {{height}}</div>
                <div>Weight: {{weight}}</div>
                <div>Mail: {{mail}}</div>
                <div>Identity: {{identity}}</div>
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
    props: ['ID', 'name', 'age', 'gender', 'height', 'weight', 'identity', 'mail', 'imgSrc']
    
}
</script>
