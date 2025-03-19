// Inicializar el mapa en una ubicación específica (Río Negro y Chubut)
var map = L.map('map').setView([-41.1335, -67.0832], 6);

// Agregar capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// Cargar datos desde un archivo GeoJSON
fetch('datos.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                if (feature.properties && feature.properties.nombre) {
                    layer.bindPopup("<b>" + feature.properties.nombre + "</b>");
                }
            }
        }).addTo(map);
    })
    .catch(error => console.error('Error al cargar GeoJSON:', error));
