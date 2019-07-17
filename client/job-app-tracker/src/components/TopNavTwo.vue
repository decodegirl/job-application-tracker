<template>
  <!-- Second Tool Bar -->
  <v-layout
    row
    wrap
    id="dropdown-example"
    style="border-bottom: 1px solid #ccc;"
  >
    <v-flex xs12 sm2 class="pl-4">
      <v-overflow-btn
        :items="dropdown_font"
        label="My first Board"
        target="#dropdown-example"
        small
      ></v-overflow-btn>
    </v-flex>

    <v-spacer></v-spacer>

    <v-layout class="pt-3" justify-center>
      <v-flex xs12 sm2>
        <v-btn class="tooltip elevation-3" color="#000" outline small flat>
          <v-icon>dashboard</v-icon>
          <span class="tooltiptext">Board</span>
        </v-btn>
      </v-flex>
      <v-flex xs12 sm2>
        <v-btn class="tooltip" color="#cccccc" small flat>
          <v-icon>list</v-icon>
          <span class="tooltiptext">Tasks</span>
        </v-btn>
      </v-flex>

      <v-flex xs12 sm2>
        <v-btn class="tooltip" color="#cccccc" small flat>
          <v-icon>map</v-icon>
          <span class="tooltiptext">maps</span>
        </v-btn>
      </v-flex>

      <v-flex xs12 sm2>
        <v-btn class="tooltip" color="#cccccc" small flat>
          <v-icon>insert_chart</v-icon>
          <span class="tooltiptext">metrics</span>
        </v-btn>
      </v-flex>
    </v-layout>

    <v-spacer></v-spacer>

    <v-flex xs12 sm2 class="pt-3">
      <v-btn outline color="dark" small class="elevation-2">
        <v-icon right>share</v-icon>Share Board
      </v-btn>
    </v-flex>
  </v-layout>
  <!-- End Second Tool Bar -->
</template>

<script>
export default {
  data() {
    return {
      dropdown_font: ["My firstBoard"]
    };
  }
};
</script>
