var marker = L.marker([51.5, -0.09]).addTo(map);

//  Add a marker to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);
L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);

 // Add a circle to the map
 L.circleMarker([34.0522, -118.2437], {
     radius: 300,
     color: "black",
     fillColor: '#ffffa1'
 }).addTo(map);

 // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
