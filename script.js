// Inicializar el mapa en una ubicación específica (Río Negro y Chubut)
var map = L.map('map').setView([-41.1335, -67.0832], 6);

// Agregar capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
