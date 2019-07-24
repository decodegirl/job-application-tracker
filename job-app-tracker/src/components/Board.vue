<template>
  <!-- Main Columns -->
  <v-layout row align-center class="horizontal-scroll">
    <v-flex v-for="stage in stages" :key="stage._id">
      <v-card
        width="330px"
        height="100%"
        class="pl-3 pr-3 pt-3"
        style="border-left: 1px solid #4444;"
        flat
      >
        <!-- Column actions -->
        <v-card-actions class="white justify-center">
          <!-- Column Delete button -->
          <v-btn fab icon small>
            <v-icon>delete</v-icon>
          </v-btn>
          <v-spacer></v-spacer>

          <!-- Column title -->
          <v-card-title style="font-size: 1.25rem;" class="pa-0">
            {{ stage.title }}
          </v-card-title>
          <v-spacer></v-spacer>

          <!-- Column 'More' button -->
          <template>
            <div class="text-xs-center">
              <v-menu>
                <template v-slot:activator="{ on }">
                  <v-btn fab icon small v-on="on">
                    <v-icon>more_horiz</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-tile
                    v-for="(item, index) in more_button_options"
                    :key="index"
                  >
                    <v-list-tile-title class="mr-4">
                      {{ item.title }}
                    </v-list-tile-title>
                    <v-icon class="ml-4">{{ item.icon }}</v-icon>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-card-actions>

        <!-- Column jobs counter -->
        <v-subheader class="white justify-center"
          >{{ stage.jobs.length }} Jobs</v-subheader
        >

        <!-- Add jobs button -->
        <v-btn block to="/add-job">+</v-btn>

        <!-- Start Job Cards -->

        <div class="vertical-scroll">
          <Draggable
            :list="stage.jobs"
            group="occupation"
            :disabled="!enabled"
            ghost-class="ghost"
            :move="checkMove"
            @start="dragging = true"
            @end="dragging = false"
          >
            <JobCard
              v-for="job in stage.jobs"
              :key="job.id"
              :job="job"
              :color="job.color"
            />
          </Draggable>
        </div>

        <!-- End Job Cards -->
      </v-card>
    </v-flex>
  </v-layout>
  <!-- End Main Columns -->
</template>

<script>
import Draggable from "vuedraggable";
import JobCard from "../components/JobCard.vue";

export default {
  components: {
    Draggable,
    JobCard
  },
  data() {
    return {
      url: "http://localhost:3000",
      enabled: true,
      dragging: false,
      more_button_options: [
        { title: "Move list", icon: "open_with" },
        { title: "Rename", icon: "edit" }
      ],
      stages: [],
      jobs: []
    };
  },

  created: function() {
    this.loadStages();
  },

  methods: {
    checkMove(e) {
      window.console.log(`Future index: ${e.draggedContext.futureIndex}`);
    },
    loadStages: function() {
      fetch(`${this.url}/stages`).then(response => {
        console.log(" stages response -> ", response.status);
        response.json().then(data => {
          const stagesLength = data.stages.length;
          for (let i = 0; i < stagesLength; i++) {
            data.stages[i].jobs = [];
            this.stages.push(data.stages[i]);
          }
          this.loadJobs();
        });
      });
    },
    loadJobs: function() {
      fetch(`${this.url}/jobs`).then(response => {
        console.log("load jobs response -> ", response.status);
        response.json().then(data => {
          console.log(this.stages);
          data.jobs.forEach(job => {
            this.stages[job.position].jobs.push(job);
          });
        });
      });
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
.vertical-scroll {
  max-height: 50vh;
  overflow-y: auto;
}
.horizontal-scroll {
  overflow-x: auto;
}
.ghost {
  opacity: 0.3;
}
.job-card {
  padding-top: 5px;
}

.horizontal-scroll {
  overflow-x: auto;
}

.vertical-scroll {
  height: 290px;
  overflow: hidden;
  overflow-y: auto;
}

.column-height {
  height: "900px";
  overflow: scroll;
}

.v-list__tile {
  padding: 0 2px;
}
</style>
