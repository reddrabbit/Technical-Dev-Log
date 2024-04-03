// Initialize a map
var map = L.map('map').setView([50.4452, -104.6189], 5);

// Add a tile layer (you can use any provider you prefer)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  
  try {
    L.geoPackageFeatureLayer([], {
      geoPackageUrl: 'https://ngageoint.github.io/GeoPackage/examples/rivers.gpkg',
      layerName: 'rivers',
      style: function(feature) {
        return {
          color: '#3E8090',
          weight: 3,
          opacity: 1,
        };
      }
    }).addTo(map);
  } catch (e) {
    console.error(e);
  }