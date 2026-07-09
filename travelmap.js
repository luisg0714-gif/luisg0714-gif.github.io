// 15° 00' N latitude and 86° 30' W longitude
var coordinates = [15.199999, -86.241905]
var popupcode = `<center>
<h3>Hello from Honduras!</h3>
<iframe width="200" height="100" src="https://www.youtube.com/embed/b1CeG_KeOG8?si=m7hlJbD5-fLPgdiH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>`;
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.circle(coordinates, {"title": "Hello from Honduras",
                      color: "black",
                      fillColor: "#26ad9e",
                      radius: 90}).bindPopup(popupcode).addTo(map);
