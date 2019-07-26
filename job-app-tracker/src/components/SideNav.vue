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
         <a href = '#'> <img
            :src="require('../assets/huntr_logo_mini.png')"
            height="auto"
            width="15px"
            class="mt-0 mr-4 ml-0"
          /></a>
         <a href = '#'> <img
            :src="require('../assets/microphone.png')"
            height="auto"
            width="15px"
            class="mt-4 mr-4"
          /> </a>
          <a class="tooltip" href = '#'> <img
            :src="require('../assets/thumbtack.png')"
            height="auto"
            width="15px"
            class="mt-4 mr-4"
          /> 
           <span class="tooltiptext">track</span>
           </a>
          <a class="tooltip" href = '#'><img
            :src="require('../assets/settings.png')"
            height="auto"
            width="15px"
            class="mt-4 mr-4"
          /> 
           <span class="tooltiptext">settings</span>
          </a>
      
           <a class="tooltip" href="/users/logout"><img
            :src="require('../assets/power-off.png')"
            height="auto"
            width="15px"
            class="mt-4 mr-4"
          />
            <span class="tooltiptext">logout</span>
          </a>
         
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

<style>

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}


.tooltip .tooltiptext {
  visibility: hidden;
  width: 80px;
  background-color: #ccc;
  color: #000;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  /* Position the tooltip */
  z-index: 1;
  top: -5px;
  left: 105%;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>