<template>
  <!-- Main Columns -->
  <v-layout row class="horizontal-scroll" ma-0 pa-0>
    <v-flex v-for="stage in stages" :key="stage._id">
      <v-card
        width="330px"
        height="85vh"
        class="pl-3 pr-3 pt-3"
        style="border-left: 1px solid #4444;"
        flat
      >
        <!-- Column actions -->
        <v-card-actions class="white justify-center pb-0">
          <!-- Column Delete button -->
          <v-btn fab icon small>
            <v-icon>star</v-icon>
          </v-btn>
          <!-- <v-spacer></v-spacer> -->

          <!-- Column title -->
          <v-card-title class="pa-0">
            <v-hover v-slot:default="{ hover }">
              <input
                class="text-uppercase font-weight-medium stage-title"
                type="text"
                v-model="stage.title"
                @focusout="handleStageUpdate(stage)"
              />
            </v-hover>
            <!-- {{ stage.title }} -->
          </v-card-title>
          <!-- <v-spacer></v-spacer> -->

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
        <v-subheader class="white justify-center pb-4"
          >{{ stage.jobs.length }} Jobs</v-subheader
        >

        <!-- Add jobs button -->
        <AddJobBtn :stage="stage" />

        <!-- Start Job Cards -->

        <div
          style="height: 57vh; overflow: scroll; padding-top: 0; margin-top: 0;"
        >
          <Draggable
            :list="stage.jobs"
            group="occupation"
            :disabled="!enabled"
            ghost-class="ghost"
            :move="checkMove"
            @onUpdate="logStages"
            @start="dragging = true"
            @end="stopDragging"
          >
            <JobCard
              v-for="job in stage.jobs"
              :key="job._id"
              :job="job"
              :color="job.color"
              @updateInfoEvent="handleUpdateInfo"
              @updateJobsEvent="removeJob(job)"
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
import AddJobBtn from "../components/AddJobBtn.vue";

export default {
  components: {
    Draggable,
    JobCard,
    AddJobBtn
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
      stages: []
    };
  },

  created: function() {
    this.loadStages();
  },

  methods: {
    doSth: function() {
      console.log("in focus");
    },
    doSthElse: function() {
      console.log("out of focus");
    },
    stopDragging: function(evt) {
      this.dragging = false;
      let jobNotFound = true;
      let job = null;

      this.stages.forEach((stage, i) => {
        let j = 0;
        while (jobNotFound && j < stage.jobs.length) {
          if (i !== stage.jobs[j].position) {
            stage.jobs[j].position = i;
            job = stage.jobs[j];
            jobNotFound = false;
          }
          j++;
        }
      });
      this.handleUpdateInfo(job);
    },
    handleStageUpdate: function(stage) {
      console.log(stage);
      fetch(`${this.url}/stages/${stage._id}`, {
        method: "put",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(stage)
      }).then(response => {
        console.log(response.status);
      });
    },
    handleUpdateInfo: function(job) {
      fetch(`${this.url}/jobs/${job._id}`, {
        method: "put",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(job)
      }).then(response => {
        console.log(response.status);
      });
    },
    checkMove(e) {
      window.console.log(
        `----------- Future index: ${e.draggedContext.futureIndex}`
      );
      window.console.log(`----------- Target: ${e.relatedContext.index}`);
    },
    removeJob: function(job) {
      const indexInStage = null;
      this.stages[job.position].jobs.forEach((jobInStage, i) => {
        if (jobInStage._id === job._id)
          this.stages[job.position].jobs.splice(i, 1);
      });
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
.stage-title {
  font-size: 20px;
  letter-spacing: 1px;
  text-align: center;
}
</style>
