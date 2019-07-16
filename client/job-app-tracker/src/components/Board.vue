<template>
 <v-layout row align-content-center class="horizontal-scroll">
                <v-flex xs6 v-for="column in columns">
                    <v-card width="300px" class="pl-4 pr-4 pt-4" height="100%" style="border-left: 1px solid #4444;" flat>

                        <!-- Column actions -->
                        <v-card-actions class="white justify-center">

                            <!-- Column Delete button -->
                            <v-btn fab icon small>
                                <v-icon>delete</v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>

                            <!-- Column title -->
                            <v-card-title style="font-size: 1.5rem;">{{ column.title }}
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
                                <v-list-tile v-for="(item, index) in more_button_options" :key="index" @click="">
                                    <v-list-tile-title class="mr-4">{{ item.title }}
                                    </v-list-tile-title>
                                    <v-icon class="ml-4">{{ item.icon }}</v-icon>
                                </v-list-tile>
                            </v-list>
                            </v-menu>
</div>
</template>
</v-card-actions>

<!-- Column jobs counter -->
<v-subheader class="white justify-center">
    {{ column.jobs }} Jobs
</v-subheader>

<!-- Add jobs button -->
<v-btn block>+</v-btn>

<!-- Start Job Cards -->
<!-- Jobs v-for -->
<div class="vertical-scroll">
    <v-card v-for="job in filterJobs(column.column)" xs12 :color="job.color" dark max-width="400" class="mb-2">

        <v-list-tile class="job-card">
            <v-list-tile-avatar>
                <v-img large left :src="job.image" height="40px" contain></v-img>
            </v-list-tile-avatar>

            <v-list-tile-content>
                <v-list-tile-title>{{job.title}}</v-list-tile-title>
                <v-list-tile-sub-title>{{job.subtitle}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-card-actions>
                <v-list-tile class="grow">
                    <v-layout align-center justify-end>
                        <v-btn icon fab>
                            <v-icon class="mr-1">mdi-delete</v-icon>
                        </v-btn>
                    </v-layout>
                </v-list-tile>
            </v-card-actions>
        </v-list-tile>

        <v-card-text class="text-xs-right">
            added {{job.date_added}} ago
        </v-card-text>
    </v-card>
</div>
<!-- End Job Cards -->

</v-card>
</v-flex>
</v-layout>
<!-- End Main Columns -->
  
</template>

<script>


export default {
  data () {
    return {
        columns: [
            {
                column: 1,
                title: "WISHLIST",
                jobs: 6
            },
            {
                column: 2,
                title: "APPLIED",
                jobs: 5
            },
            {
                column: 3,
                title: "PHONE",
                jobs: 4
            },
            {
                column: 4,
                title: "ON SITE",
                jobs: 3
            },
            {
                column: 5,
                title: "OFFER",
                jobs: 2
            },
            {
                column: 6,
                title: "REJECTED",
                jobs: 1
            }
        ],

        more_button_options: [
            { title: "Move list", icon: "open_with" },
            { title: "Rename", icon: "edit" }
        ],

        jobs: [{
                column: 1,
                color: "green",
                title: "Google",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "../assets/google-icon.svg"
            },
            {
                column: 1,
                color: "yellow",
                title: "Twitter",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 1,
                color: "blue",
                title: "WeWork",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 1,
                color: "pink",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 1,
                color: "purple",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 1,
                color: "red",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 2,
                color: "orange",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 2,
                color: "purple",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 2,
                color: "green",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 2,
                color: "yellow",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 2,
                color: "purple",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 3,
                color: "green",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 3,
                color: "orange",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 3,
                color: "purple",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 3,
                color: "yellow",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 4,
                color: "pink",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 4,
                color: "blue",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 4,
                color: "green",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 5,
                color: "red",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 5,
                color: "orange",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 6,
                color: "yellow",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            }
        ],
    }
  },

  methods: {
      filterJobs: function(index) {
            var sorted_jobs = this.jobs.filter(function(job) {
                return job.column == index;
            });
            return sorted_jobs;
        },
  }
}
   
      
</script>

<style>
    .job-card {
            padding-top: 10px;
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

</style>