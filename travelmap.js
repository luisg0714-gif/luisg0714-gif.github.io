// 15° 00' N latitude and 86° 30' W longitude
var coordinates = [15.199999, -86.241905]
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker(coordinates, {"title": "Hello from Honduras"}).binPopup("<p>Hello from Hoduras!</p>").addTo(map);
