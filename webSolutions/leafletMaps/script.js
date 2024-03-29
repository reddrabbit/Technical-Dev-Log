// // Initialize Leaflet map
// var map = L.map('map').setView([51.505, -0.09], 13);

// // Add tile layer (You can use any tile provider, like OpenStreetMap)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
// }).addTo(map);

// // Initialize the polyline for measurement
// var polyline = L.polyline([], { color: 'red' }).addTo(map);

// // Initialize variables to store measurement
// var totalDistance = 0;
// var previousPoint;

// // Add event listener for click to start measuring
// map.on('click', function (e) {
//     if (!previousPoint) {
//         previousPoint = e.latlng;
//         polyline.setLatLngs([previousPoint]);
//     } else {
//         var distance = previousPoint.distanceTo(e.latlng);
//         totalDistance += distance;
//         polyline.addLatLng(e.latlng);
//         previousPoint = e.latlng;
//         alert('Total Distance: ' + totalDistance.toFixed(2) + ' meters');
//     }
// });

// Initialize Leaflet map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Initialize the polyline for measurement
var polyline = L.polyline([], { color: 'red' }).addTo(map);

// Initialize variables to store measurement
var totalDistance = 0;
var previousPoint;

// Function to handle measurement event
function startMeasurement() {
    map.on('click', function (e) {
        if (!previousPoint) {
            previousPoint = e.latlng;
            polyline.setLatLngs([previousPoint]);
        } else {
            var distance = previousPoint.distanceTo(e.latlng);
            totalDistance += distance;
            polyline.addLatLng(e.latlng);
            previousPoint = e.latlng;
            alert('Total Distance: ' + totalDistance.toFixed(2) + ' meters');
        }
    });
}

// Attach click event listener to the button to initiate measurement
document.getElementById('startMeasurementBtn').addEventListener('click', startMeasurement);

