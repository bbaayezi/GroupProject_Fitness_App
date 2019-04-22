<template>
  <div id = "tiaozhuan">
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Calories">{{ item.calories }}</md-table-cell>
        <md-table-cell md-label="Carbohydrate">{{ item.carbohydrate }}</md-table-cell>
        <md-table-cell md-label="Fibre">{{ item.fibre }}</md-table-cell>
        <md-table-cell md-label="Vitamin">{{ item.vitamin }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          name: "Broccoli",
          calories: "55 kcal",
          carbohydrate: "3.1 g",
          fibre: "2.7 g",
          vitamin: "Vitamin K1: 280% RDA Vitamin A: 52% RDA Vitamin C: 34% RDA"
        },
        {
          name: "Carrots",
          calories: "41 kcal",
          carbohydrate: "9.6 g",
          fibre: "2.8 g",
          vitamin: "Vitamin A: 334% RDA Vitamin K1: 16% RDA Vitamin C: 10% RDA"
        },
        {
          name: "Bok Choy",
          calories: "13 kcal",
          carbohydrate: "2.2 g",
          fibre: "1.0 g",
          vitamin: "Vitamin A: 89% RDA Vitamin C: 75% RDA Vitamin K: 57% RDA"
        },
        {
          name: "Beets",
          calories: "43 kcal",
          carbohydrate: "9.6 g",
          fibre: "2.8 g",
          vitamin: "Vitamin C: 8% RDA"
        },
        {
          name: "Bell Peppers",
          calories: "27 kcal",
          carbohydrate: "6.3 g",
          fibre: "0.9 g",
          vitamin: "Vitamin C: 306% RDA Vitamin B6: 8% RDA"
        },
          {
          name: "Strawberry",
          calories: "39 cal / 100 g",
          moisture_content: "89 grams / 100 g",
          fibre: "1.8 grams",
          vitamin: "Vitamin A: 11 IU Vitamin C: 66.0 mg"
        },{
          name: "Banana",
          calories: "91 cal / 100 g",
          moisture_content: "74 grams / 100 g",
          fibre: "1.6 grams",
          vitamin: "Vitamin A: 8 IU Vitamin C: 10.1 mg"
        },{
          name: "Pineapple",
          calories: "46 cal / 100 g",
          moisture_content: "87 grams / 100 g",
          fibre: "1.4 grams",
          vitamin: "Vitamin A: 17 IU Vitamin C: 9.0 mg"
        },{
          name: "Apple",
          calories: "50 cal / 100 g",
          moisture_content: "86 grams / 100 g",
          fibre: "1.6 grams",
          vitamin: "Vitamin A: 13 IU Vitamin C: 2.1 mg"
        },{
          name: "Pawpaw",
          calories: "52 cal / 100 g",
          moisture_content: "85 grams / 100 g",
          fibre: "1.7 grams",
          vitamin: "Vitamin A: 134 IU Vitamin C: 74.0 mg"
        },
        {
          name: "Pork",
          calories: "297 kcal / 100 g",
          fat: "20.8 grams / 100 g",
          protein: "25.7 grams",
          water: "53%"
        },
        {
          name: "Beef",
          calories: "217 kcal / 100 g",
          fat: "11.8 grams / 100 g",
          protein: "26.1 grams",
          water: "61%"
        },
        {
          name: "Lamb",
          calories: "258 kcal / 100 g",
          fat: "16.5 grams / 100 g",
          protein: "25.6 grams",
          water: "57%"
        },
        {
          name: "Salmon",
          calories: "155 kcal / 100 g",
          fat: "6.9 grams / 100 g",
          protein: "21.6 grams",
          water: "65%"
        },
        {
          name: "Chicken",
          calories: "284 kcal / 100 g",
          fat: "6.2 grams / 100 g",
          protein: "53.4 grams",
          water: "40%"
        },
        {
          name: "Minty roast veg & hummus salad",
          calories: "611 kcal",
          fat: "26 g",
          carbohydrate: "61 g",
          fibre: "20 g",
          protein: "23 g",
          salt: "3.5g"
        },
        {
          name: "Spanish meatball & butter bean stew",
          calories: "435 kcal",
          fat: "15 g",
          carbohydrate: "35 g",
          fibre: "12 g",
          protein: "33 g",
          salt: "1.3 g"
        },
        {
          name: "Smoky hake, beans & greens",
          calories: "554 kcal",
          fat: "27 g",
          carbohydrate: "28 g",
          fibre: "6 g",
          protein: "45 g",
          salt: "2.2 g"
        },
        {
          name: "Spicy roast veg & lentils",
          calories: "321 kcal",
          fat: "12 g",
          carbohydrate: "38 g",
          fibre: "11 g",
          protein: "10 g",
          salt: "0.6 g"
        },
        {
          name: "Mushroom fajitas with avocado hummus",
          calories: "824 kcal",
          fat: "36 g",
          carbohydrate: "104 g",
          fibre: "14 g",
          protein: "23 g",
          salt: "2.3 g"
        },
      ]
    };
  }
};
</script>
