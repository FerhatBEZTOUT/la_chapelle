// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [49.444714923398244, 1.100051807422495],
    zoom: 17
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
maxZoom: 19
}).addTo(map);

var marker = L.marker([49.444714923398244, 1.100051807422495]).addTo(map);