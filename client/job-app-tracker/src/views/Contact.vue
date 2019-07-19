<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12 text-xs-center class="mt-4 mb-0">
                <h1>Contact Manager</h1>
            </v-flex>
            <v-flex xs12 text-xs-center class="mt-0 mb-0">
                <h2 style="color: #ccc">Store contacts and attach them to job cards</h2>
            </v-flex>
            <v-flex xs12 text-xs-center class="mt-4 mb-4">
                <v-btn round> coming soon </v-btn>
            </v-flex>
        </v-layout>
        <v-container grid-list-lg>
            <v-layout>
                <v-spacer></v-spacer>
                <v-flex xs3 class="mt-4 mb-4">
                    <v-card>
                        <v-layout row>
                            <v-flex xs2>
                                <v-list-tile-avatar class="pa-3">
                                    <v-img large flat left :src="require('../assets/google-icon.svg')"  height="30px" contain></v-img>
                                </v-list-tile-avatar>
                            </v-flex>
                            <v-flex xs10>
                                <v-card-title>Jeff Bezos<br>Founder at Amazon</v-card-title>
                            </v-flex>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-card-text>
                            <p><v-icon>email </v-icon> Jeff@amazon.com</p>
                            <p><v-icon>place </v-icon> Seattle, WA</p>
                            <p><v-icon>phone </v-icon> 555.555.5555</p>
                        </v-card-text> 
                        <v-layout row>
                            <v-flex xs12>
                                <v-card-actions class="text-xs-center">
                                    <v-btn round color="blue" small style="color: #fff; font-size: .7rem"> twitter </v-btn>
                                    <v-btn round color="green" small style="color: #fff; font-size: .7rem"> LinkedIn </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex xs3 class="mt-4 mb-4">
                    <v-card>
                        <v-layout row>
                            <v-flex xs2>
                                <v-list-tile-avatar class="pa-3">
                                    <v-img large flat left :src="require('../assets/google-icon.svg')"  height="30px" contain></v-img>
                                </v-list-tile-avatar>
                            </v-flex>
                            <v-flex xs10>
                                <v-card-title>Ben Silverman<br>Founder at Pintrest</v-card-title>
                            </v-flex>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-card-text>
                            <p><v-icon>email </v-icon> ben@pintrest.com</p>
                            <p><v-icon>place </v-icon> Seattle, WA</p>
                            <p><v-icon>phone </v-icon> 555.555.5555</p>
                        </v-card-text> 
                        <v-layout row justify-center>
                            <v-flex xs12>
                                <v-card-actions class="text-xs-center">
                                    <v-btn round color="blue" small style="color: #fff; font-size: .7rem"> twitter </v-btn>
                                    <v-btn round color="green" small style="color: #fff; font-size: .7rem"> LinkedIn </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex xs3 class="mt-4 mb-4">
                    <v-card>
                        <v-layout row>
                            <v-flex xs2>
                                <v-list-tile-avatar class="pa-3">
                                    <v-img large flat left :src="require('../assets/google-icon.svg')"  height="30px" contain></v-img>
                                </v-list-tile-avatar>
                            </v-flex>
                            <v-flex xs10>
                                <v-card-title>Ryan Holmes<br>Founder at Hootsuite</v-card-title>
                            </v-flex>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-card-text>
                            <p><v-icon>email </v-icon> ryan@hootsuite.com</p>
                            <p><v-icon>place </v-icon> Vancouver, BC</p>
                            <p><v-icon>phone </v-icon> 555.555.5555</p>
                        </v-card-text> 
                        <v-layout row justify-center>
                            <v-flex xs12>
                                <v-card-actions class="text-xs-center">
                                    <v-btn round color="blue" small style="color: #fff; font-size: .7rem"> twitter </v-btn>
                                    <v-btn round color="green" small style="color: #fff; font-size: .7rem"> LinkedIn </v-btn>
                                </v-card-actions>
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