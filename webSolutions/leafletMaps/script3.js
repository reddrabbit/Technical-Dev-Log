var map = L.map('map').setView([50.4452, -104.6189], 12);

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Initialize Leaflet.draw
var drawnItems = new L.FeatureGroup(); // FeatureGroup to hold all drawn shapes
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);

