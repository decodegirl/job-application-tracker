<template>
  <v-card flat v-if="page.tab_title == 'Tasks'">
    <v-card-text>
      <v-layout>
        <v-flex xs12>
          <v-text-field
            outline
            rounded
            type="text"
            label=""
            v-model="new_todo_content"
            placeholder=" + Add Task"
            style="width: 100%"
          ></v-text-field>
        </v-flex>
      </v-layout>
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
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
            <!-- <DatePicker :job="job" :dateToLog ="dateLogs"></DatePicker> -->
          </v-menu>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 sm2>
          <v-btn
            v-on:click="addNewTodo()"
            rounded
            style="color:#ffffff; "
            :color="job.color"
            >Save</v-btn
          >
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex>
          <v-layout
            row
            fluid
            wrap
            v-for="todo in job.todos"
            :key="todo.id"
            style="border-bottom: 1px solid #ccc"
            pt-2
            pb-2
            v-on:click="todo.active = !todo.active"
          >
            <v-flex xs1 text-xs-center>
              <input type="checkbox" name="" id="" />
            </v-flex>
            <v-flex xs7>
              {{ todo.content }}
            </v-flex>
            <v-flex xs4 text-xs-right>
              {{ todo.deadline }}
              <img :src="`//logo.clearbit.com/${job.image}.com`" height="10px" />
            </v-flex>

            <v-flex xs4 text-xs-center v-if="todo.active">
              <v-btn icon flat outline color="#ccc">
                <v-icon>arrow_drop_up</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs8 text-xs-right v-if="todo.active">
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
</template>

<script>
import DatePicker from './DatePicker.vue'
export default {
  props: ["page", "job"],
  components: {
    DatePicker
  },
  data () {
    return {
      date: new Date().toISOString().substring(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      dateLogs: "date",
      new_todo_content: "This is a New todo",
    }
  },
  methods: {
    addNewTodo: function( ) {
      var new_todo = {
        content: this.new_todo_content,
        active: false,
        deadline: this.date
      };
      console.log("deadline -----------> ", new_todo.deadline);
      this.job.todos.push(new_todo);
      console.log(new_todo);
    }
  }
};
</script>

<style>
</style>
