<template>
  <v-content>
    <div class="display-3 font-weight-bold orange--text text-md-center">Recipe Recommendation</div>
    <br>
    <v-layout row justify-space-around>
      <v-flex xs10 md2 lg5>
        <div class="display-1 font-weight-bold white--text light-green darken-1 text-md-center">
          Lose Weight
          <br>
        </div>
      </v-flex>
    </v-layout>
    <br>
    <v-layout justify-space-around row wrap>
      <DataTable/>
    </v-layout>
    <br>
    <br>
    <v-layout row justify-space-around>
      <v-flex xs10 md2 lg5>
        <div
          class="display-1 font-weight-bold white--text light-green darken-1 text-md-center"
        >Get Strong</div>
      </v-flex>
    </v-layout>
    <br>
    <v-layout justify-space-around row wrap>
      <DataTable/>
    </v-layout>
    <br>
    <br>
    <v-layout row justify-space-around>
      <v-flex xs10 md2 lg5>
        <div
          class="display-1 font-weight-bold white--text light-green darken-1 text-md-center"
        >Get Fit</div>
      </v-flex>
    </v-layout>
    <br>
    <v-layout justify-space-around row wrap>
      <DataTable/>
    </v-layout>
    <br>
    <v-layout xs12 md5 justify-space-around>
      <material-card color="green" title="Simple Table" text="Here is a subtitle for this table">
        <v-data-table :headers="headers" :items="items" hide-actions>
          <template slot="headerCell" slot-scope="{ header }">
            <span
              class="subheading font-weight-light text-success text--darken-3"
              v-text="header.text"
            />
          </template>
          <template slot="items" slot-scope="{ item }">
            <td>{{ item.name }}</td>
            <td>{{ item.country }}</td>
            <td>{{ item.city }}</td>
            <td class="text-xs-right">{{ item.salary }}</td>
          </template>
        </v-data-table>
      </material-card>
    </v-layout>
    <br>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import DataTable from "../components/DataTable";

export default {
  data() {
    return {
      headers: [
        {
          sortable: false,
          text: "Name",
          value: "name"
        },
        {
          sortable: false,
          text: "Country",
          value: "country"
        },
        {
          sortable: false,
          text: "City",
          value: "city"
        },
        {
          sortable: false,
          text: "Salary",
          value: "salary",
          align: "right"
        }
      ],
      items: [
        {
          name: "Dakota Rice",
          country: "Niger",
          city: "Oud-Tunrhout",
          salary: "$35,738"
        },
        {
          name: "Minerva Hooper",
          country: "Curaçao",
          city: "Sinaai-Waas",
          salary: "$23,738"
        },
        {
          name: "Sage Rodriguez",
          country: "Netherlands",
          city: "Overland Park",
          salary: "$56,142"
        },
        {
          name: "Philip Chanley",
          country: "Korea, South",
          city: "Gloucester",
          salary: "$38,735"
        },
        {
          name: "Doris Greene",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
          salary: "$63,542"
        },
        {
          name: "Mason Porter",
          country: "Chile",
          city: "Gloucester",
          salary: "$78,615"
        }
      ]
    };
  },
  components: {
    DataTable
  },
  computed: {
    ...mapGetters(["getNutritionList"])
  }
};
</script>
