<template>
  <div>
    <v-container ma-4 pa-4>
      <v-layout row wrap ma-4 pa-4 >
        <v-flex xs12>
          <h3><v-icon>group</v-icon> Personal Boards</h3>
        </v-flex>
        <v-flex xs3>
          <v-card class="elevation-4" to="/my-first-board">
            <v-layout row wrap align-center>
              <v-flex xs10>
                <v-card-title class="pl-4">My First Board <br> Partick Watson</v-card-title>
              </v-flex>
              <v-flex xs2>
                <v-icon> edit</v-icon>
              </v-flex>
              <v-flex xs12>
                <p class="pl-4 pb-4 pt-2 mb-4">created 2 years ago</p>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <v-flex xs3 class="ml-4">
          <v-card  class="elevation-3" style="boarder: 1px solid #ccc;"  height="100%">
            <v-layout row wrap align-center>
              <v-flex xs12 class="text-xs-center pt-4 pr-3">
                <v-btn class=" mt-4" style="width: 100%" flat> + New Board </v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {

    components: {
    },

    data() {
      return {
      }
    }
  }
</script>
