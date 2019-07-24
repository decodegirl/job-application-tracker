<template>
  <v-layout row>
    <v-flex id="map" class="map"> </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      tileLayer: null,
      layers: [
        {
          id: 0,
          name: "Restaurants",
          active: false,
          features: [
            {
              id: 0,
              name: "Googleplex",
              type: "marker",
              coords: [37.422, -122.0841]
            },
            {
              id: 1,
              name: "US Tech Securities",
              type: "marker",
              coords: [33.78513, -84.48057]
            },
            {
              id: 2,
              name: "Busy Busy",
              type: "marker",
              coords: [37.27786, -83.29152]
            },
            {
              id: 3,
              name: "Century Link",
              type: "marker",
              coords: [32.46234, -93.672]
            },
            {
              id: 4,
              name: "Twitter",
              type: "marker",
              coords: [35.29014, -80.75558]
            },
            {
              id: 5,
              name: "Facebook",
              type: "marker",
              coords: [37.48193, -122.15991]
            },
            {
              id: 6,
              name: "Microsoft",
              type: "marker",
              coords: [38.6143846, -90.280048]
            }
          ]
        }
      ]
    };
  },

  methods: {
    initMap: function() {
      this.map = L.map("map").setView([40, -100], 4);
      this.tileLayer = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
        {
          maxZoom: 20,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }
      );
      this.tileLayer.addTo(this.map);
    },

    initLayers: function() {
      this.layers.forEach(layer => {
        // Initialize the layer
        const markerFeatures = layer.features.filter(
          feature => feature.type === "marker"
        );
        markerFeatures.forEach(feature => {
          feature.leafletObject = L.marker(feature.coords).bindPopup(
            feature.name
          );
        });
      });
    },

    layerChanged: function(layerId, active) {
      const layer = this.layers.find(layer => layer.id === layerId);
      layer.features.forEach(feature => {
        /* Show or hide the feature depending on the active argument */
        if (active) {
          feature.leafletObject.addTo(this.map);
        } else {
          feature.leafletObject.removeFrom(this.map);
        }
      });
    }
  },

  mounted: function() {
    this.initMap();
    this.initLayers();
    this.layerChanged(0, true);
  }
};
</script>

<style>
.map {
  height: 500px;
}
</style>
