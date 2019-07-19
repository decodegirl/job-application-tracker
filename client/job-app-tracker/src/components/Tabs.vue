<template>
    <v-container fill-height pa-0 ma-0>
        
        <v-layout row>
            <v-item-group
            v-model="window"
            class="shrink mr-4"
            mandatory
            tag="v-flex"
            >
                <v-item
                    v-for="(page, index) in pages"
                    :key="index"
                >
                    <div slot-scope="{ active, toggle }">
                        <v-btn
                            :input-value="active"
                            color="#000"
                            flat
                            @click="toggle"
                            class="ma-0 pa-0"
                            style="width: 200px;"
                        >
                            {{page.tab_title}}
                        </v-btn>
                    </div>
                </v-item>
            </v-item-group>

            <v-flex>
                <v-window
                    v-model="window"
                    class=""
                    vertical
                    style="height: 400px; overflow: scroll; border-left: 1px solid #ccc;"
                >
                    <v-window-item
                    v-for="(page, index) in pages"
                    :key="index"
                    >
                        <v-card flat v-if="page.tab_title == 'Job Info'">
                            <v-card-text class="">
                                <v-layout row wrap>
                                    <v-flex xs6>
                                        <h3>General Info</h3>
                                        <v-layout row wrap>
                                            <v-flex xs12>
                                                <strong>Company: </strong> <input type="text" v-model="job.title" flat rounded></input>
                                            </v-flex>

                                            <v-flex xs12>
                                                <strong>Title: </strong> <input type="text" v-model="job.subtitle" flat rounded></input>
                                            </v-flex>
                                            <v-flex xs12>
                                                <strong>Location: </strong> <input type="text" v-model="job.location" flat rounded></input>
                                            </v-flex>
                                            <v-flex xs12>
                                                <strong>Salary: </strong> <input type="text" v-model="job.salary" flat rounded></input>
                                            </v-flex>
                                            <v-flex xs12>
                                                <strong>Post Url: </strong> <input type="text" v-model="job.post_url" flat rounded></input>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    
                                    <v-flex xs6>
                                        <h3>Log Dates</h3>
                                        <v-layout row wrap>
                                            <v-flex xs12>
                                                <strong>Deadline: </strong> <input type="text" v-model="job.deadline"flat rounded></input>
                                            </v-flex>
                                            <v-flex xs12>
                                                <strong>Applied: </strong> <input type="text" v-model="job.applied"flat rounded></input>
                                            </v-flex>
                                            <v-flex xs12>
                                                <strong>Interview 1: </strong> <input type="text" v-model="job.interview1"flat rounded></input>
                                            </v-flex>
                                            <v-flex xs12>
                                                <strong>Interview 2: </strong><input type="text" v-model="job.interview2"flat rounded></input>
                                            </v-flex>
                                            <v-flex xs12>
                                                <strong>Offer: </strong> <input type="text" v-model="job.offer"flat rounded></input>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>

                                    <v-flex xs12>
                                        <h4>Description</h4>
                                        <v-textarea outline class="ma-2" height="300px" v-model="job.description"></v-textarea>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>

                        <v-card flat v-if="page.tab_title == 'Tasks'">
                            <v-card-text>
                                <v-layout>
                                    <v-flex xs12>
                                        <v-text-field outline rounded type="text" label="" v-model="new_todo_input" placeholder=" + Add Task" style="width: 100%"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex xs12 sm4>
                                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    v-model="date"
                                                    label="Date"
                                                    prepend-icon="event"
                                                    readonly
                                                    v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker v-model="date" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                                <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                    <v-flex xs12 sm2>
                                        <v-btn v-on:click="addNewTodo( )" rounded style="color:#ffffff; " :color="job.color">Save</v-btn>
                                    </v-flex>
                                </v-layout>

                                <v-layout>
                                    <v-flex>
                                        <v-layout row fluid wrap v-for="todo in todos" style="border-bottom: 1px solid #ccc" pt-2 pb-2 v-on:click="todo.active = !todo.active">
                                            <v-flex xs1 text-xs-center>
                                                <input type="checkbox" name="" id="">
                                            </v-flex>
                                            <v-flex xs7>
                                                {{todo.title}}
                                            </v-flex>
                                            <v-flex xs4 text-xs-right>
                                                {{todo.position}}
                                                <img :src="job.image" height="10px">
                                            </v-flex>

                                            <v-flex xs4 text-xs-center v-if="todo.active">
                                                <v-btn icon flat outline color="#ccc">
                                                    <v-icon>arrow_drop_up</v-icon>
                                                </v-btn>
                                            </v-flex>
                                            <v-flex xs8 text-xs-right  v-if="todo.active">
                                                <v-btn icon flat outline color="#ccc">
                                                    <v-icon>calendar_today</v-icon>
                                                </v-btn>
                                                <v-btn icon flat outline color="#ccc">
                                                    <v-icon>delete</v-icon>
                                                </v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>

                            </v-card-text>
                        </v-card>

                        <v-card flat v-if="page.tab_title == 'Notes'">
                            <v-textarea outline class="mt-3 ml-3 mr-3 mb-0" height="200px" v-model="job.notes"></v-textarea>
                            <v-btn class="ml-3" rounded :color="job.color" style="color: #fff">Save</v-btn>
                        </v-card>

                        <v-card flat v-if="page.tab_title == 'Company'" class="ma-4">
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <h2>{{job.company_info.title}}</h2>
                                    <p>{{job.company_info.description}}</p>
                                    <p>Headquarters at {{job.location}}</p>
                                </v-flex>

                                <v-flex xs6>
                                    <v-layout row wrap>
                                        <v-flex xs12>
                                            Website <a :href="job.company_info.website"> {{job.company_info.website}}</a>
                                        </v-flex>

                                        <v-flex xs12>
                                            Founded {{job.company_info.founded}}
                                        </v-flex>
                                        <v-flex xs12>
                                            Type {{job.company_info.type}}
                                        </v-flex>
                                        <v-flex xs12>
                                            Country {{job.company_info.country}}
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                
                                <v-flex xs6>
                                    <v-layout row wrap>
                                        <v-flex xs12>
                                            Industy {{job.company_info.industry}}
                                        </v-flex>
                                        <v-flex xs12>
                                            Alexa Global {{job.company_info.alexa_global}}
                                        </v-flex>
                                        <v-flex xs12>
                                            Alexa USA {{job.company_info.alexa_usa}}
                                        </v-flex>
                                    </v-layout>
                                </v-flex>

                            </v-layout>
                        </v-card>

                        <v-card flat v-if="page.tab_title == 'Directory'" class="ma-4">
                            <v-layout row wrap>
                                <v-flex xs6>
                                    <h1 class="display-1 pb-3 pr-4">Get through to real people</h1>
                                    <p class="pr-4">Find contact information for people who work at Reddit. Search by role, so you can get your resume in front of the most appropriate person. Results include email, names, titles, and even social media profiles.</p>
                                </v-flex>

                                <v-flex xs6>
                                    <v-card>
                                        <v-layout row>
                                            <v-flex xs2>
                                                <v-list-tile-avatar class="pa-3">
                                                    <v-img large flat left :src="job.image" height="30px" contain></v-img>
                                                </v-list-tile-avatar>
                                            </v-flex>
                                            <v-flex xs10>
                                                <v-card-title>Billy McMahon<br> Human Resources</v-card-title>
                                            </v-flex>
                                        </v-layout>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <p><v-icon>email </v-icon> billymcmahon@email.com</p>
                                            <p><v-icon>place </v-icon> Mountain View, CA, USA</p>
                                        </v-card-text> 
                                        <v-divider></v-divider>
                                        <v-layout row justify-center>
                                            <v-flex xs4>
                                                <v-card-actions class="text-xs-center">
                                                    <v-icon> delete</v-icon>
                                                    <v-icon> more_horiz</v-icon>
                                                </v-card-actions>
                                            </v-flex>
                                        </v-layout>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 class="text-xs-center ma-4">
                                    <v-btn rounded :color="job.color" style="color: #fff">Sign up for free</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card>

                        <v-card flat v-if="page.tab_title == 'Leads'" class="ma-4">
                            <v-layout row align-center justify-center >
                                <v-flex xs12 height="400px" class="text-xs-center">
                                    <v-icon large>group</v-icon>
                                    <v-card-text>
                                        You have no saved leads for this company yet
                                    </v-card-text>
                                    <v-btn rounded :color="job.color" style="color: #fff"> Search directory </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card>

                    </v-window-item>
                </v-window>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import MyFirstBoard from '../components/MyFirstBoard.vue'
  export default {
    components: {
        MyFirstBoard 
    },
    
    props:[
        "job",
        "todos"
    ],

    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        new_todo_input: "",
        pages: [
            {
                tab_title: "Job Info"
            },
            {
                tab_title: "Tasks"
            },
            {
                tab_title: "Notes"
            },
            {
                tab_title: "Company"
            },
            {
                tab_title: "Directory"
            },
            {
                tab_title: "Leads"
            }
        ],
      window: 0
    })
  }
</script>