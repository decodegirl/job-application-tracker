<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12 text-xs-center class="mt-4 mb-0">
                <h1>Briefcase</h1>
            </v-flex>
            <v-flex xs12 text-xs-center class="mt-0 mb-0">
                <h2 style="color: #ccc">Store all your job related files and attach them to jobs in your board</h2>
            </v-flex>
            <v-flex xs12 text-xs-center class="mt-4 mb-4">
                <v-btn round> coming soon </v-btn>
            </v-flex>
        </v-layout>
        <v-container grid-list-lg>
            <v-layout>
                <v-spacer></v-spacer>
                <v-flex xs3 class="mt-4 mb-4">
                    <v-card class="pa-4 ma-4">
                        <v-layout row wrap text-xs-center>
                            <v-flex xs12>
                                <v-img large flat left :src="require('../assets/google-icon.svg')"  height="100px" contain></v-img>
                            </v-flex>
                            <v-flex xs12>
                                <h3>Resume Frontend Dev</h3>
                            </v-flex>
                            <v-flex xs12 >
                                <h5 style="color: #ccc">PDF- updated 5 mins ago</h5>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex xs3 class="mt-4 mb-4">
                    <v-card class="pa-4 ma-4">
                        <v-layout row wrap text-xs-center>
                            <v-flex xs12>
                                <v-img large flat left :src="require('../assets/google-icon.svg')"  height="100px" contain></v-img>
                            </v-flex>
                            <v-flex xs12>
                                <h3>Cover Letter Google</h3>
                            </v-flex>
                            <v-flex xs12 >
                                <h5 style="color: #ccc">PDF- updated 5 mins ago</h5>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-spacer></v-spacer>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

  export default {
      data () {
          return {

          }
      }
  }
</script>