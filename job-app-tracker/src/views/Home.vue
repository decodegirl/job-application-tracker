<template>
  <!-- Main Columns -->
  <v-layout row align-content-center class="horizontal-scroll">
    <v-flex v-for="column in columns" :key="column.id">
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
          <v-card-title style="font-size: 1.5rem;">
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
        <v-btn block>+</v-btn>

        <!-- Start Job Cards -->

        <div class="vertical-scroll">
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
      enabled: true,
      dragging: false,
      damis: 1,
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
      jobs: [
        {
          id: 1,
          column: 1,
          color: "green",
          title: "Google",
          subTitle: "Product Manager",
          date_added: "2 Years",
          image: "google"
        },
        {
          id: 2,
          column: 1,
          color: "blue",
          title: "Twitter",
          subTitle: "Product Manager",
          date_added: "2 Years",
          image: "twitter"
        },
        {
          id: 3,
          column: 1,
          color: "yellow",
          title: "Genius",
          subTitle: "Product Manager",
          date_added: "2 Years",
          image: "genius"
        },
        {
          id: 4,
          column: 0,
          color: "purple",
          title: "Weave",
          subTitle: "Product Manager",
          date_added: "2 Years",
          image: "getweave"
        },
        {
          id: 5,
          column: 1,
          color: "indigo",
          title: "Genius",
          subTitle: "SWE Intern",
          date_added: "1 Year",
          image: "genius"
        },
        {
          id: 6,
          column: 1,
          color: "purple",
          title: "Hashicorp",
          subTitle: "Backend Engineer",
          date_added: "2 Years",
          image: "hashicorp"
        },
        {
          id: 7,
          column: 3,
          color: "blue",
          title: "Postmates",
          subTitle: "Product Manager",
          date_added: "2 Years",
          image: "postmates"
        }
      ]
    };
  },

  created: function() {
    this.jobs.forEach(job => {
      this.columns[job.column].jobs.push(job);
    });
  },

  methods: {
    filterJobs: function(columnId) {
      var sorted_jobs = this.jobs.filter(function(job) {
        return job.column == columnId;
      });
      return sorted_jobs;
    },
    checkMove(e) {
      window.console.log(`Future index: ${e.draggedContext.futureIndex}`);
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
  color: #ccc;
  background-color: #ccc;
}
</style>
