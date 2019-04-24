<template>
  <v-content>
    <v-layout row wrap justify-space-around>
      <div class="mt-5 md-layout-item md-medium-size-100 md-size-100">
        <user-card></user-card>
        <RecommendationCard/>
      </div>
      
      <div class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-size-33">
        <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
          data-background-color="blue"
        >
          <template slot="content">
            <h4 class="title">Daily Sales</h4>
            <p class="category">
              <span class="text-success">
                <i class="fas fa-long-arrow-alt-up"></i> 55%
              </span>
              increase in today sales.
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>updated 4 minutes ago
            </div>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-size-33">
        <chart-card
          :chart-data="emailsSubscriptionChart.data"
          :chart-options="emailsSubscriptionChart.options"
          :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="red"
        >
          <template slot="content">
            <h4 class="title">Email Subscription</h4>
            <p class="category">Last Campaign Performance</p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>updated 10 days ago
            </div>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-size-33">
        <chart-card
          :chart-data="dataCompletedTasksChart.data"
          :chart-options="dataCompletedTasksChart.options"
          :chart-type="'Line'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">Completed Tasks</h4>
            <p class="category">Last Campaign Performance</p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>campaign sent 26 minutes ago
            </div>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <record-table></record-table>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <trainer-table></trainer-table>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <calendars/>
      </div>
    </v-layout>
  </v-content>
</template>

<script>
import UserCard from "@/components/UserCard";
import Calendars from "@/components/Calendars";
import TrainerTable from "@/components/TrainerTable";
import RecordTable from "@/components/RecordTable";
import RecommendationCard from "@/components/RecommendationCard";
export default {
  data() {
    return {
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  },
  components: {
    UserCard,
    Calendars,
    TrainerTable,
    RecordTable,
    RecommendationCard,
  },
  methods: {
    withStepsRecommendation(height, weight, age, steps) {
      var indoorLow = ["push-up", "cruches", "weightlifting"];
      var indoorHigh = ["aerobics", "mat tumbling", "burpees"];
      var outdoorLow = ["skating", "riding", "walking"];
      var outdoorHigh = ["hiking", "swimming", "playing basketball"];
      var BMI = weight / (height * height);
      if (age > 18 && age < 35) {
        //adult average steps
        if (steps > 12000) {
          if (BMI > 28) {
            //do indoor high intensity exercise
            //做高强度运动，游泳，室内跑步机跑步，平板支撑，哑铃操
            return "Why not try " + indoorHigh[Math.floor(2)] + " ?";
          } else {
            //do indoor low intensity exercise
            //做室内低强度运动，仰卧起坐，俯卧撑，举重
            return "Why not try " + indoorLow[Math.floor(2)] + " ?";
          }
        } else {
          if (BMI > 28) {
            //do outdoor high intensity exercise
            //室外高强度运动，爬岩，远足，打篮球。。。
            return "Why not try " + outdoorHigh[Math.floor(2)] + " ?";
          } else {
            //do outdoor low intensity exercise
            //滑板，自行车。。。
            return "Why not try " + outdoorLow[Math.floor(2)] + " ?";
          }
        }
      } else {
        if (steps < 12000 && steps > 8000) {
          //do indoor low intensity exercise
          //做室外低强度运动
          return "Why not try " + outdoorLow[Math.floor(2)] + " ?";
        } else {
          //do indoor low intensity exercise
          //做室内低强度运动
          return "Why not try " + indoorLow[Math.floor(2)] + " ?";
        }
      }
    },
    withoutStepsRecommendation(height, weight, age) {
      var indoorLow = ["push-up", "cruches", "weightlifting"];
      var indoorHigh = ["aerobics", "mat tumbling", "burpees"];
      var outdoorLow = ["skating", "riding", "walking"];
      var outdoorHigh = ["hiking", "swimming", "playing basketball"];
      var BMI = weight / (height * height);
      if (age > 40) {
        return (
          "Why not try " +
          indoorLow[Math.floor(2)] +
          " / " +
          outdoorLow[Math.floor(2)] +
          " ?"
        );
      } else {
        if (BMI < 28) {
          return (
            "Why not try " +
            indoorLow[Math.floor(2)] +
            " / " +
            outdoorLow[Math.floor(2)] +
            " ?"
          );
        } else {
          return (
            "Why not try " +
            indoorHigh[Math.floor(2)] +
            " / " +
            outdoorHign[Math.floor(2)] +
            " ?"
          );
        }
      }
    },
    withoutInfo() {
      return "Please fill in your information";
    }
  }
};
</script>
