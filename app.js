new Vue({
  el: '#app',
  data: {
    map: null,
    tileLayer: null,
    layers: [
      {
        id: 0,
        name: 'Festival Nation Sounds',
        active: false,
        features: [
          {
            id: 0,
            name: 'Nation Sounds',
            type: 'polygon',
            color:'red',
            coords: [
              [48.86197, 2.23041],
              [48.86341, 2.23191],
              [48.86402, 2.23421],
              [48.86406, 2.23586],
              [48.86358, 2.23702],
              [48.86238, 2.23833],
              [48.86091, 2.23743],
              [48.85973, 2.237],
              [48.85888, 2.23704],
              [48.85686, 2.23754],
              [48.85444, 2.23751],
              [48.85252, 2.23683],
              [48.85144, 2.23706],
              [48.85142, 2.23512],
              [48.8521, 2.23177],
              [48.85292, 2.23014],
              [48.85428, 2.22908],
              [48.85557, 2.22859],
              [48.85706, 2.22859],
              [48.8589, 2.22913],
              [48.86094, 2.2299],
            ],
          },
        ],
      },
      {
        id: 1,
        name: 'Scènes',
        active: false,
        features: [
          {
            id: 0,
            name: 'Cimetière',
            type: 'polygon',
            coords: [
              [48.85556, 2.23179],
              [48.8559, 2.23194],
              [48.85562, 2.23322],
              [48.85528, 2.23309],
            ],
          },
          {
            id: 1,
            name: 'Bam Bam Bam',
            type: 'polygon',
            coords: [
              [48.86176, 2.23494],
              [48.86163, 2.23561],
              [48.86145, 2.23556],
              [48.86159, 2.23487],
            ],
          },
          {
            id: 2,
            name: 'Grall',
            type: 'polygon',
            coords: [
              [48.85953, 2.23617],
              [48.85954, 2.23641],
              [48.85906, 2.23645],
              [48.85906, 2.23617],
            ],
          },
          {
            id: 3,
            name: 'The Undertaker',
            type: 'polygon',
            coords: [
              [48.8526, 2.23602],
              [48.85238, 2.23621],
              [48.85208, 2.2354],
              [48.85231, 2.23522],
            ],
          },
          {
            id: 4,
            name: 'Speumi',
            type: 'polygon',
            coords: [
              [48.86244, 2.23234],
              [48.86237, 2.23262],
              [48.86183, 2.23232],
              [48.86192, 2.23206],
            ],
          },
        ],
      },
      {
        id: 3,
        name: 'WC',
        active: false,
        features: [
          {
            id: 0,
            name: 'WC',
            type: 'circle',
            coords: [48.86334, 2.23579],
          },
          {
            id: 1,
            name: 'WC',
            type: 'circle',
            coords: [48.86028, 2.2312],
          },
          {
            id: 2,
            name: 'WC',
            type: 'circle',
            coords: [48.85641, 2.23667],
          },
          {
            id: 3,
            name: 'WC',
            type: 'circle',
            coords: [48.85728, 2.23084],
          },
          {
            id: 4,
            name: 'WC',
            type: 'circle',
            coords: [48.85329, 2.23187], 
          },
        ],
      },
      {
        id: 4,
        name: 'Bar',
        active: false,
        features: [
          {
            id: 0,
            name: 'Cocktails',
            type: 'polygon',
            coords: [
              [48.85352, 2.2365],
              [48.85493, 2.23693],
          ],
          },
          {
            id: 1,
            name: 'Bières',
            type: 'polygon',
            coords: [
              [48.85988, 2.23002],
              [48.85914, 2.22963],
            ],
          },
          {
            id: 2,
            name: 'Bières',
            type: 'polygon',
            coords: [
              [48.8605, 2.23663],
              [48.86165, 2.23714],
            ],
          },
          {
            id: 3,
            name: 'Vins',
            type: 'polygon',
            coords: [
              [48.859, 2.23362],
              [48.85846, 2.23337],
            ],
          },
        ],
      },
      {
        id: 5,
        name: 'Restauration',
        active: false,
        features: [
          {
            id: 0,
            name: 'American Food',
            type: 'polygon',
            coords: [
              [48.85914, 2.22963],
              [48.85881, 2.23104],
            ],
          },
          {
            id: 1,
            name: 'Asian Food',
            type: 'polygon',
            coords: [
              [48.85913, 2.23406],
              [48.85887, 2.23535],
              [48.85768, 2.23479],
              [48.85792, 2.23353],
            ],
          },
          {
            id: 2,
            name: 'European Food',
            type: 'polygon',
            coords: [
              [48.85592, 2.23698],
              [48.85493, 2.23693],
            ],
          },
        ],
      },
      {
        id: 6,
        name: 'Merchandising',
        active: false,
        features: [
          {
            id: 0,
            name: 'Boutique',
            type:'polygon',
            coords: [
              [48.85683, 2.22872],
              [48.85472, 2.22913],
            ],
          },
        ],
      },
      {
        id: 7,
        name: 'Parking',
        active: false,
        features: [
          {
            id: 0,
            name: 'Parking 1',
            type:'polygon',
            coords: [
              [48.8525, 2.22844],
              [48.85194, 2.23099],
              [48.85143, 2.23044],
              [48.85195, 2.22802],
            ],
          },
          {
            id: 0,
            name: 'Parking 2',
            type:'polygon',
            coords: [
              [48.85967, 2.2271],
              [48.85956, 2.22795],
              [48.85874, 2.22765],
              [48.8589, 2.22672],
            ],
          },
        ],
      },
      {
        id: 8,
        name: 'Stand information',
        active: false,
        features: [
          {
            id: 0,
            name: 'Stand information 1',
            type:'circle',
            coords: [48.8584, 2.22933],
          },
          {
            id: 1,
            name: 'Stand information 2',
            type:'circle',
            coords:[48.85431, 2.22955],
            
          },
        ],
      },
      {
        id: 9,
        name: 'Entrée',
        active: false,
        features: [
          {
            id: 0,
            name: 'Entrée 1',
            type:'polygon',
            coords: [
              [48.85292, 2.23014],
              [48.8525, 2.23081],
            ]
          },
          {
            id: 1,
            name: 'Entrée 2',
            type:'polygon',
            coords:[
              [48.8589, 2.22913],
              [48.85862, 2.22903],
            ],
            
          },
        ],
      },
      {
        id: 10,
        name: 'Accès mobilité réduite',
        active: false,
        features: [
          {
            id: 0,
            name: 'Entrée 1',
            type:'polygon',
            coords: [
              [48.85292, 2.23014],
              [48.8525, 2.23081],
            ]
          },
        ],
      },
      {
        id: 11,
        name: 'WC mobilité réduite',
        active: false,
        features: [
          {
            id: 0,
            name: 'WC',
            type: 'circle',
            coords: [48.86334, 2.23579],
          },
          {
            id: 1,
            name: 'WC',
            type: 'circle',
            coords: [48.86028, 2.2312],
          },
        ],
      },
    ],
  },
  mounted() {
    this.initMap();
    this.initLayers();
  },
  methods: {
    initMap() {
      this.map = L.map('map').setView([48.85768, 2.23304], 15); /* posirion GPS de la carte + zomm */
      this.tileLayer = L.tileLayer(
      'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
      }
    );
    this.tileLayer.addTo(this.map);},
    initLayers() {
      this.layers.forEach((layer) => {
        const polygonFeatures = layer.features.filter(feature => feature.type === 'polygon');
        const circleFeatures = layer.features.filter(feature => feature.type ==='circle');
        polygonFeatures.forEach((feature) => {
          feature.leafletObject = L.polygon(feature.coords)
            .bindPopup(feature.name);
        });
        circleFeatures.forEach((feature) => {
          feature.leafletObject = L.circle(feature.coords)
            .bindPopup(feature.name);
        })
      });
    },
    layerChanged(layerId, active) {
      const layer = this.layers.find(layer => layer.id === layerId);
      layer.features.forEach((feature) => {
        if (active) {
          feature.leafletObject.addTo(this.map);
        } else {
          feature.leafletObject.removeFrom(this.map);
        }
      });
    },
  },
});