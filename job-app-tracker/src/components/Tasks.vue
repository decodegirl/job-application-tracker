<template>
  <v-container
    fluid
    class="pa-0 ma-0"
    fill-height
  >
    <v-layout row wrap>
      <v-flex d-flex xs12 sm4 md3 class="pa-0 ma-0">
        <v-card color="dark" white height="87vh">
          <v-card-text>
            <v-list>
              <v-list-tile
                v-for="item in items2"
                :key="item.title"
                avatar
                @click=""
              >
                <v-list-tile-avatar>
                  <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <div class="vertical-scroll">
                <v-list>
                  <v-list-group
                    v-for="item in items3"
                    :key="item.title"
                    v-model="item.active"
                    :prepend-icon="item.action"
                    no-action
                  >
                    <template v-slot:activator>
                      <v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>{{
                            item.title
                          }}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </template>

                    <v-list-tile
                      v-for="subItem in item.items3"
                      :key="subItem.title"
                      @click=""
                    >
                      <v-list-tile-content>
                        <v-list-tile-title style="font-size: 10px;">{{
                          subItem.title
                        }}</v-list-tile-title>
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-icon>{{ subItem.action }}</v-icon>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list-group>
                </v-list>
              </div>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>

      <!--tasks todopage-->
      <v-flex d-flex xs12 sm8 md9 class="pa-0 ma-0">
        <v-card color="dark" white>
          <v-card-text>
            <input
              type="text"
              v-model="new_todo_input"
              placeholder=" + Add Task"
              style="width : 100%; height:44px; border:1px solid #ccc; border-radius:5px;"
            />
            <br />
            <v-layout>
              <v-flex xs12 sm4>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="date"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
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
                    <v-btn flat color="primary" @click="menu = false"
                      >Cancel</v-btn
                    >
                    <v-btn flat color="primary" @click="$refs.menu.save(date)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs12 sm2>
                <v-btn
                  v-on:click="addNewTodo()"
                  style="color:#ffffff; "
                  color="#8C35FF"
                  class="mt-4"
                >
                  Save
                </v-btn>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex>
                <v-layout
                  row
                  fluid
                  wrap
                  v-for="todo in todos"
                  style="border-bottom: 1px solid #ccc"
                  pt-2
                  pb-2
                  v-on:click="todo.active = !todo.active"
                >
                  <v-flex xs1 text-xs-center>
                    <input type="checkbox" name="" id="" />
                  </v-flex>
                  <v-flex xs5>
                    {{ todo.title }}
                  </v-flex>
                  <v-flex xs6 text-xs-right>
                    {{ todo.position }}
                    <v-avatar size="20px" color="grey lighten-4">
                      <img :src="`//logo.clearbit.com/${todo.image}.com`" />
                    </v-avatar>
                  </v-flex>

                  <v-flex xs2 text-xs-center v-if="todo.active">
                    <v-btn icon flat outline color="#ccc">
                      <v-icon>arrow_drop_up</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs10 text-xs-right v-if="todo.active">
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      new_todo_input: "",
      items2: [
        { icon: "list", iconClass: "indigo white--text", title: "all" },
        { icon: "star", iconClass: "amber white--text", title: "Today" },
        { icon: "event", iconClass: "blue white--text", title: "Upcoming" },
        { icon: "check", iconClass: "green white--text", title: "Completed" }
      ],
      items3: [
        {
          action: "work",
          title: "Jobs",
          active: true,
          items3: [
            { title: "product engineer" },
            { title: "software engineer" },
            { title: "senior data engineer" }
          ]
        }
      ],

      todos: [
        {
          title: "Follow up to find out status of application",
          position: "Product Manager",
          image: "google",
          active: false
        },
        {
          title: "Prepare for phone interview",
          position: "Product Manager",
          image: "pintrest",
          active: false
        },
        {
          title: "Look for openings",
          position: "Product Manager",
          image: "tinder",
          active: false
        },
        {
          title: "Prep for interview",
          position: "Product Manager",
          image: "facebook",
          active: false
        },
        {
          title: "Prepare for interview",
          position: "Product Manager",
          image: "amazon",
          active: false
        },
        {
          title: "Prepare for phone interview with leetcode",
          position: "Product Manager",
          image: "reddit",
          active: false
        }
      ]
    };
  },

  methods: {},

  mounted: function() {}
};
</script>

<style>

</style>
