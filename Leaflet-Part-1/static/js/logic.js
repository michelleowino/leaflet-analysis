var map = L.map("map", {
    center: [0, 0],
    zoom: 2
});

const colors = ['green','lime','yellow','orange','orange'];

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson').then(({ features }) => {



    features.forEach((
        {
            properties: { mag, place, time },
            geometry: { coordinates: [lon, lat, depth] }
        }) => {
        L.circleMarker([lat, lon],
            {
                radius: mag * 3,
                fillColor: depth<10 
                            ? 'green' : depth<30 ? 'lime' : depth<50 ? 'yellow' : depth<70 ? 'orange' : 'red',
                fillOpacity: .65,
                color: 'black',
                weight: 1
            })
            .bindPopup(`<b>Magnitude:</b> ${mag}<br><b>Location:</b> ${place}<br><b>Date:</b> ${new Date(time).toLocaleString()}`)
    .addTo(map);
    });

// Create a legend to display information about our map.
const legend = L.control({
  position: "bottomright"
});

// Define the legend content
legend.onAdd = function(map) {
    const div = L.DomUtil.create("div", "info legend");
    const grades = [0, 30, 50, 70, 90];
    const colors = ['green', 'lime', 'yellow', 'orange', 'red'];
    const labels = [];

     // Loop through the depth intervals and generate a label with a colored square for each interval
  for (let i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' + colors[i] + '"></i> ' +
      grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }

  return div;
};


// Add the info legend to the map.
legend.addTo(map);


})



