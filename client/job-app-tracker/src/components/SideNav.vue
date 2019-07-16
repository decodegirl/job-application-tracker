<template>
  <v-navigation-drawer
    style="background-color: rgb(24, 0, 69)"
    dark
    permanent
    app
    width="70px"
    xs3
  >
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <img
            :src="require('../assets/huntr_logo_mini.png')"
            height="auto"
            width="15px"
            class="mt-0 mr-4 ml-0"
          />
          <img
            :src="require('../assets/microphone.png')"
            height="auto"
            width="15px"
            class="mt-4 mr-4"
          />
          <img
            :src="require('../assets/thumbtack.png')"
            height="auto"
            width="15px"
            class="mt-4 mr-4"
          />
          <img
            :src="require('../assets/settings.png')"
            height="auto"
            width="15px"
            class="mt-4 mr-4"
          />
          <img
            :src="require('../assets/power-off.png')"
            height="auto"
            width="15px"
            class="mt-4 mr-4"
          />
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
background: blue;
</style>
