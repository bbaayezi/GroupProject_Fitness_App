<template>
  <md-card>
    <md-card-header data-background-color="green">
      <div class="display-1">Task Table</div>
    </md-card-header>
    <v-list two-line>
      <transition-group enter-active-class="animated slideInLeft" leave-active-class="animated fadeOutUp">
        <v-list-tile v-for="(item, id) in tasks" :key="id">
          <span class="mr-2">
            <v-icon large>event_note</v-icon>
          </span>
          <v-list-tile-content>
            <v-list-tile-title>
              <input type="text" v-model="item.title" :readonly="item.readonly">
            </v-list-tile-title>
            <v-list-tile-sub-title>
              <input type="text" v-model="item.content" :readonly="item.readonly">
            </v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" @click="itemClick(item)">
                  <v-icon large>{{ item.readonly ? "create" : "done_all" }}</v-icon>
                </v-btn>
              </template>
              <span>{{ item.readonly ? "Edit" : "Finish Editing" }}</span>
            </v-tooltip>
          </v-list-tile-action>
          <v-list-tile-action>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon large>check</v-icon>
                </v-btn>
              </template>
              <span>Mark as finished</span>
            </v-tooltip>
          </v-list-tile-action>
          <v-list-tile-action>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" @click="removeTask(item)">
                  <v-icon large>clear</v-icon>
                </v-btn>
              </template>
              <span>Delete Task</span>
            </v-tooltip>
          </v-list-tile-action>
        </v-list-tile>
      </transition-group>

      <v-layout justify-center>
        <v-list-tile>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on" @click="createTask()">
                <v-icon large>add_circle</v-icon>
              </v-btn>
            </template>
            <span>Create a new task</span>
          </v-tooltip>
        </v-list-tile>
      </v-layout>
    </v-list>
  </md-card>
</template>

<script>
export default {
  name: "nav-tabs-table",
  data() {
    return {
      tasks: [
        // {
        //   title: "Task Title",
        //   content: "Task Description",
        //   finished: false,
        //   readonly: true
        // },
        // {
        //   title: "Task Title 2",
        //   content: "Task Description 2",
        //   finished: false,
        //   readonly: true
        // }
      ],
      taskId: 0
    };
  },
  methods: {
    itemClick(item) {
      item.readonly = !item.readonly;
    },
    createTask() {
      this.tasks.push({
        title: `Task Title ${this.taskId}`,
        content: "Task Description",
        finished: false,
        readonly: true
      });
      this.taskId++;
    },
    removeTask(item) {
      this.tasks.splice(this.tasks.indexOf(item), 1);
    }
  }
};
</script>

<style>
  .animated {
    animation-duration: 0.2s;
  }
</style>
