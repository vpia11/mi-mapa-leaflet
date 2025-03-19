// Inicializar el mapa en una ubicación específica
var map = L.map('map').setView([-34.6037, -58.3816], 13); // Buenos Aires

// Agregar capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar un marcador
L.marker([-34.6037, -58.3816]).addTo(map)
    .bindPopup('<b>Buenos Aires</b><br>Capital de Argentina.')
    .openPopup();
