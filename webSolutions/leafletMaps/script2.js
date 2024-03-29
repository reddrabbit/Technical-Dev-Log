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
var measurementActive = false;

// Function to handle start of measurement
function startMeasurement() {
    map.on('click', measureClick);
    measurementActive = true;
    document.getElementById('startMeasurementBtn').style.display = 'none';
    document.getElementById('stopMeasurementBtn').style.display = 'block';
}

// Function to handle stop of measurement
function stopMeasurement() {
    map.off('click', measureClick);
    measurementActive = false;
    document.getElementById('startMeasurementBtn').style.display = 'block';
    document.getElementById('stopMeasurementBtn').style.display = 'none';
}

// Function to handle measurement click
function measureClick(e) {
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
}

// Attach click event listener to the start button
document.getElementById('startMeasurementBtn').addEventListener('click', startMeasurement);

// Attach click event listener to the stop button
document.getElementById('stopMeasurementBtn').addEventListener('click', stopMeasurement);
