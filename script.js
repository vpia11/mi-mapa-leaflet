// Inicializar el mapa en una ubicación específica (Río Negro y Chubut)
var map = L.map('map').setView([-41.1335, -67.0832], 6);

// Agregar capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marcador en Viedma (Río Negro)
L.marker([-40.8116, -63.0031]).addTo(map)
    .bindPopup('<b>Viedma</b><br>Capital de Río Negro.');

// Marcador en Rawson (Chubut)
L.marker([-43.3002, -65.1023]).addTo(map)
    .bindPopup('<b>Rawson</b><br>Capital de Chubut.');
