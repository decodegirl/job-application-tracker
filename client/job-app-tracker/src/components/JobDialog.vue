<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <v-layout row>
            <v-flex xs2>
              <v-avatar color="grey" class="mr-3"></v-avatar>
            </v-flex>
            <v-flex xs4>
            <span class="headline">Job Title</span><br>
            <h3>Job subtitle</h3>
            </v-flex>
            <v-flex xs6>
              <v-layout justify-end>
                <v-btn icon flat >
                  <v-icon></v-icon>
                </v-btn>

                <v-btn icon flat >
                  <v-icon>close</v-icon>
                </v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-card-text>
          <Tabs />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
    import Tabs from './Tabs.vue'
  export default {
    components: {
        Tabs
    },
    
    data (){
        return {
            dialog: false
        }
    }
  }
</script>