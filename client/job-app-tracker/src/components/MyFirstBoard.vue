<template>
    <div>
        <TopNavTwo />
        <v-layout row align-content-center class="horizontal-scroll">
            <v-flex xs6 v-for="column in columns">
                <v-card width="300px" class="pl-4 pr-4 pt-4" height="100%" style="border-left: 1px solid #4444;" flat>
                    <v-card-actions v-if="column.column == columns.length">
                        <v-btn style="width: 100%" flat large>+ Add List</v-btn>
                    </v-card-actions>

                    <div v-if="column.column != columns.length">
                        <!-- Column actions -->
                        <v-card-actions class="white">
                            <v-layout row>
                                <v-flex xs2 text-xs-left>
                                    <!-- Column Delete button -->
                                    <v-btn fab icon small>
                                        <v-icon>delete</v-icon>
                                    </v-btn>
                                </v-flex>
                                
                                <v-flex xs8>
                                    <!-- Column title -->
                                    <v-card-title class="mb-0 pb-0 pt-0 justify-center" style="font-size: 1.5rem;">
                                        {{ column.title }}
                                    </v-card-title>
                                    <!-- Column jobs counter -->
                                    <v-subheader class="white justify-center mt-0">
                                        {{ column.jobs }} Jobs
                                    </v-subheader>
                                </v-flex>

                                <v-flex xs2 text-xs-right>
                                    <!-- Column 'More' button -->
                                    <v-menu>
                                        <template v-slot:activator="{ on }">
                                            <v-btn fab icon small v-on="on">
                                                <v-icon>more_horiz</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list>
                                            <v-list-tile v-for="(item, index) in more_button_options" :key="index" @click="">
                                                <v-list-tile-title class="mr-4">{{ item.title }}</v-list-tile-title>
                                                <v-icon class="ml-4">{{ item.icon }}</v-icon>
                                            </v-list-tile>
                                        </v-list>
                                    </v-menu>
                                </v-flex>
                            </v-layout>
                        </v-card-actions>
                        
                        <!-- Add jobs button -->
                        <v-btn class=" mt-0 mb-2 ml-0 mr-0 pt-0" style="width: 100%">+</v-btn>
                    
                        <!-- Start Job Cards -->
                        <!-- Jobs v-for -->
                        <div class="vertical-scroll">
                        
                            <v-card v-for="job in filterJobs(column.column)" xs12 :color="job.color" dark max-width="400" class="mb-2" @click="">
                                <v-list-tile class="job-card">
                                    <v-list-tile-avatar class="pa-0">
                                        <v-img large flat left :src="job.image" height="30px" contain></v-img>
                                    </v-list-tile-avatar>

                                    <JobDialog :job="job"/>

                                    

                                    <v-card-actions>
                                        <v-list-tile>
                                            <v-layout align-center justify-end>
                                                <v-flex>
                                                    <v-btn icon fab small>
                                                        <v-icon>delete</v-icon>
                                                    </v-btn>
                                                </v-flex>
                                            </v-layout>
                                        </v-list-tile>
                                    </v-card-actions>
                                </v-list-tile>

                                <v-card-text class="text-xs-right mt-0 pt-0" style="font-size: .8rem">
                                    added {{job.date_added}} ago
                                </v-card-text>
                            </v-card>
                        </div>
                        <!-- End Job Cards -->
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
        <!-- End Main Columns -->
    </div>
</template>

<script>

import JobDialog from '../components/JobDialog'
import TopNavTwo from '../components/TopNavTwo'
export default {
    components: {
        JobDialog,
        TopNavTwo
    },
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
            },
            {
                column: 7,
            }
        ],

        more_button_options: [
            { title: "Move list", icon: "open_with" },
            { title: "Rename", icon: "edit" }
        ],

        jobs: [
            {
                column: 1,
                color: "green",
                title: "Google",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 1,
                color: "yellow",
                title: "Twitter",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 1,
                color: "blue",
                title: "WeWork",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                    title: "WeWork",
                    description: "This is my company description",
                    website: "www.companywebsite.com",
                    founded: "2005",
                    type: "Private",
                    country: "United States",
                    industry: "Internet Software",
                    alexa_global: "ranked 23",
                    alexa_usa: "ranked 7"
                }
            },
            {
                column: 1,
                color: "pink",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 1,
                color: "purple",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 1,
                color: "red",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 2,
                color: "orange",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 2,
                color: "purple",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 2,
                color: "green",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 2,
                color: "yellow",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 2,
                color: "purple",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 3,
                color: "green",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 3,
                color: "orange",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 3,
                color: "purple",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 3,
                color: "yellow",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 4,
                color: "pink",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 4,
                color: "blue",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 4,
                color: "green",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 5,
                color: "red",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 5,
                color: "orange",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
            },
            {
                column: 6,
                color: "yellow",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: require("../assets/google-icon.svg"),
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
                }
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