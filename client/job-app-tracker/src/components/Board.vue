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
          image: "google",
          location: "548 Market St, San Francisco, CA 94104, USA",
          salary: "$90,000",
          post_url: "https://boards.greenhouse.io/reddit#.WM7nNhLyu34",
          deadline: "+set date",
          applied: "+set date",
          interview1: "+set date",
          interview2: "+set date",
          offer: "+set date",
          description: "This is my job description ",
          notes: "+ Add Note",
          company_info: {
            title: "Google",
            description: "This is my company description",
            website: "www.companywebsite.com",
            founded: "2005",
            type: "Private",
            country: "United States",
            industry: "Internet Software",
            alexa_global: "ranked 23",
            alexa_usa: "ranked 7"
          },
          todos: [
            {
              id: 1,
              title: "Follow up to find out status of application",
              position: "Product Manager",
              image: "images/google-icon.svg",
              active: false
            },
            {
              id: 2,
              title: "Prepare for phone interview",
              position: "Product Manager",
              image: "images/google-icon.svg",
              active: false
            }
          ]
        },
        {
          id: 2,
          column: 0,
          color: "blue",
          title: "Twitter",
          subTitle: "Product Manager",
          date_added: "2 Years",
          image: "twitter",
          location: "548 Market St, San Francisco, CA 94104, USA",
          salary: "$90,000",
          post_url: "https://boards.greenhouse.io/reddit#.WM7nNhLyu34",
          deadline: "+set date",
          applied: "+set date",
          interview1: "+set date",
          interview2: "+set date",
          offer: "+set date",
          description: "This is my job description ",
          notes: "+ Add Note",
          company_info: {
            title: "Twitter",
            description: "This is my company description",
            website: "www.companywebsite.com",
            founded: "2005",
            type: "Private",
            country: "United States",
            industry: "Internet Software",
            alexa_global: "ranked 23",
            alexa_usa: "ranked 7"
          },
          todos: [
            {
              id: 3,
              title: "Look for openings",
              position: "Product Manager",
              image: "images/google-icon.svg",
              active: false
            },
            {
              id: 4,
              title: "Prep for interview",
              position: "Product Manager",
              image: "images/google-icon.svg",
              active: false
            },
            {
              id: 5,
              title: "Prepare for interview",
              position: "Product Manager",
              image: "images/google-icon.svg",
              active: false
            }
          ]
        },
        {
          id: 3,
          column: 1,
          color: "grey",
          title: "Genius",
          subTitle: "Product Manager",
          date_added: "2 Years",
          image: "genius",
          location: "548 Market St, San Francisco, CA 94104, USA",
          salary: "$90,000",
          post_url: "https://boards.greenhouse.io/reddit#.WM7nNhLyu34",
          deadline: "+set date",
          applied: "+set date",
          interview1: "+set date",
          interview2: "+set date",
          offer: "+set date",
          description: "This is my job description ",
          notes: "+ Add Note",
          company_info: {
            title: "Genius",
            description: "This is my company description",
            website: "www.companywebsite.com",
            founded: "2005",
            type: "Private",
            country: "United States",
            industry: "Internet Software",
            alexa_global: "ranked 23",
            alexa_usa: "ranked 7"
          },
          todos: [
            {
              id: 6,
              title: "Follow up to find out status of application",
              position: "Product Manager",
              image: "images/google-icon.svg",
              active: false
            },
            {
              id: 7,
              title: "Prepare for phone interview",
              position: "Product Manager",
              image: "images/google-icon.svg",
              active: false
            }
          ]
        },
        {
          id: 4,
          column: 1,
          color: "pink",
          title: "Weave",
          subTitle: "Product Manager",
          date_added: "2 Years",
          image: "getweave",
          location: "548 Market St, San Francisco, CA 94104, USA",
          salary: "$90,000",
          post_url: "https://boards.greenhouse.io/reddit#.WM7nNhLyu34",
          deadline: "+set date",
          applied: "+set date",
          interview1: "+set date",
          interview2: "+set date",
          offer: "+set date",
          description: "This is my job description ",
          notes: "+ Add Note",
          company_info: {
            title: "Weave",
            description: "This is my company description",
            website: "www.companywebsite.com",
            founded: "2005",
            type: "Private",
            country: "United States",
            industry: "Internet Software",
            alexa_global: "ranked 23",
            alexa_usa: "ranked 7"
          },
          todos: [
            {
              id: 8,
              title: "Follow up to find out status of application",
              position: "Product Manager",
              image: "images/google-icon.svg",
              active: false
            },
            {
              id: 9,
              title: "Prepare for phone interview",
              position: "Product Manager",
              image: "images/google-icon.svg",
              active: false
            }
          ]
        },
        {
          id: 5,
          column: 1,
          color: "purple",
          title: "Hashicorp",
          subTitle: "Product Manager",
          date_added: "2 Years",
          image: "hashicorp",
          location: "548 Market St, San Francisco, CA 94104, USA",
          salary: "$90,000",
          post_url: "https://boards.greenhouse.io/reddit#.WM7nNhLyu34",
          deadline: "+set date",
          applied: "+set date",
          interview1: "+set date",
          interview2: "+set date",
          offer: "+set date",
          description: "This is my job description ",
          notes: "+ Add Note",
          company_info: {
            title: "Hasicorp",
            description: "This is my company description",
            website: "www.companywebsite.com",
            founded: "2005",
            type: "Private",
            country: "United States",
            industry: "Internet Software",
            alexa_global: "ranked 23",
            alexa_usa: "ranked 7"
          },
          todos: [
            {
              id: 10,
              title: "Follow up to find out status of application",
              position: "Product Manager",
              image: "images/google-icon.svg",
              active: false
            },
            {
              id: 11,
              title: "Prepare for phone interview",
              position: "Product Manager",
              image: "images/google-icon.svg",
              active: false
            }
          ]
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
    filterJobs: function(index) {
      var sorted_jobs = this.jobs.filter(function(job) {
        return job.column == index;
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
