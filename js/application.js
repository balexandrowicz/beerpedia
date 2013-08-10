var map = L.map('map').setView([39.9522, -75.1636], 13);
L.tileLayer('http://a{s}.acetate.geoiq.com/tiles/acetate-hillshading/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, Imagery &copy; <a href="http://developer.geoiq.com/tools/acetate/">geoiQ</a>'
}).addTo(map);