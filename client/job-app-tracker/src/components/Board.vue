<template>
  <!-- Main Columns -->
  <v-layout row class="horizontal-scroll" ma-0 pa-0>
    <v-flex v-for="column in columns" :key="column.id">
      <v-card
        width="330px"
        height="85vh"
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
            {{ column.title }}
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
          >{{ column.jobs.length }} Jobs</v-subheader
        >

        <!-- Add jobs button -->
          <AddJobBtn :column="column"/>
        

        <!-- Start Job Cards -->

        <div style="height: 57vh; overflow: scroll; padding-top: 0; margin-top: 0;">
          <Draggable
            :list="column.jobs"
            group="occupation"
            :disabled="!enabled"
            ghost-class="ghost"
            :move="checkMove"
            @start="dragging = true"
            @end="dragging = false"
          >
            <JobCard
              v-for="job in column.jobs"
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
      columns: [
        {
          id: 0,
          title: "WISHLIST",
          jobs: []
        },
        {
          id: 1,
          title: "APPLIED",
          jobs: []
        },
        {
          id: 2,
          title: "PHONE",
          jobs: []
        },
        {
          id: 3,
          title: "ON SITE",
          jobs: []
        },
        {
          id: 4,
          title: "OFFER",
          jobs: []
        },
        {
          id: 5,
          title: "REJECTED",
          jobs: []
        }
      ],
      jobs: []
    };
  },

  created: function() {
    this.loadJobs();
  },

  methods: {
    filterJobs: function(index) {
      var sorted_jobs = this.jobs.filter(function(job) {
        return job.column == index;
      });
      return sorted_jobs;
    },
    checkMove(e) {
      window.console.log(`Future index: ${e.draggedContext.futureIndex}`);
    },
    
    loadJobs: function () {
      var self = this;
      fetch( `${ this.url }/jobs` ).then( (response) => {
          response.json(  ).then( (data) => {
              self.jobs = data.jobs;
              this.jobs.forEach(job => {
                this.columns[job.column].jobs.push(job);
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
.ghost {
  opacity: 0.3;
}
.job-card {
  padding-bottom: 5px;
}

.horizontal-scroll {
  overflow-x: auto;
}

.v-list__tile {
  padding: 0 2px;
}
</style>
