<template>
  <div>
    <!-- Second Tool Bar -->
    <v-layout
      row
      wrap
      id="dropdown-example"
      style="border-bottom: 1px solid #ccc;"
      align-center
    >
      <v-flex xs3>
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn
              flat
              outline
              v-on="on"
            >
              My first board
            </v-btn>
          </template>
          <v-list>
            <v-list-tile
              v-for="(item, index) in items"
              :key="index"
              @click=""
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-flex>

      <v-layout xs6 justify-center>
        <v-flex xs3 sm2>
          <v-btn class="tooltip" color="#ccc" small flat to="/">
            <v-icon> dashboard </v-icon>
            <span class="tooltiptext"> Board </span>
          </v-btn>
        </v-flex>
        <v-flex xs3 sm2>
          <v-btn class="tooltip" color="#cccccc" small flat to="/tasks">
            <v-icon> list </v-icon> <span class="tooltiptext"> Tasks </span>
          </v-btn>
        </v-flex>

        <v-flex xs3 sm2>
          <v-btn class="tooltip" color="#cccccc" small flat to="/map">
            <v-icon> map </v-icon> <span class="tooltiptext"> maps </span>
          </v-btn>
        </v-flex>

        <v-flex xs3 sm2>
          <v-btn class="tooltip" color="#cccccc" small flat to="/metrics">
            <v-icon> insert_chart </v-icon>
            <span class="tooltiptext"> metrics </span>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-flex xs3 text-xs-right>
        <a href="mailto:?subject=<SUBJECT>&body=<index.html>">
        <v-btn outline flat color="#000" small class="">
        <v-icon right> share </v-icon> Share Board
       </v-btn>
        </a>
     </v-flex>
    </v-layout>

    <v-spacer></v-spacer>
  </div>
  <!-- End Second Tool Bar -->
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'My First Board' }
      ]
    };
  }
};
</script>

<style>
a {
  text-decoration: none;
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 0px;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #ccc;
  color: #000;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 150%;
  left: 50%;
  margin-left: -60px;
  text-transform: lowercase;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
