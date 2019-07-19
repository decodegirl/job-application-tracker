<template>
    <div>
        <!-- Second Tool Bar -->
        <v-layout row wrap id="dropdown-example" style="border-bottom: 1px solid #ccc;">

            <v-flex xs3 class="pl-4 pt-2">
                <v-overflow-btn height="10px" :items="dropdown_font" label="My first Board" target="#dropdown-example" box outline flat style="width: 100%;"></v-overflow-btn>
            </v-flex>

            <v-layout xs6 class="pt-3" justify-center>
            <v-flex xs3 sm2>
                <v-btn class="tooltip" color="#ccc" small flat to="/">
                    <v-icon> dashboard </v-icon> <span class="tooltiptext"> Board </span> 
                </v-btn>
            </v-flex>
            <v-flex xs3 sm2>
                <v-btn class='tooltip' color="#cccccc" small flat to="/tasks">
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
                <v-icon> insert_chart </v-icon> <span class="tooltiptext"> metrics </span> 
                </v-btn>
            </v-flex>
            </v-layout>
            <v-flex xs3 class="pt-3 pr-4" text-xs-right>
            <v-btn outline flat color="#000" small class="">
                <v-icon right> share </v-icon> Share Board
            </v-btn>
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
      dropdown_font: ["My firstBoard"]
    };
  }
}
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
