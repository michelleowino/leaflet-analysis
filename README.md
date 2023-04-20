## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

I've used HTML, JavaScript and CSS to develop a way to visualize USGS data. Code can be found in the Leaflet-Part-1 folder. 

## Steps Taken: 
1. Obtain dataset: 
      - I selected  "All Earthquakes from the Past 7 Days - M1.0+ Earthquakes." 
      - Then used the URL of this JSON to pull in the data for the visualization. 

2. Import and visualize the data: 
      - Using Leaflet, I created a map that plots all the earthquakes from the dataset based on their longitude and latitude.
      - Data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. 
      - Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in color.
      - Included popups that provide additional information about the earthquake when its associated marker is clicked.
      - Created a legend that provides context for the map data.

## Results: 

<img width="476" alt="Screenshot 2023-04-19 at 11 38 05 PM" src="https://user-images.githubusercontent.com/119654958/233280952-1b11f74a-2c6c-45bd-8a0d-2320817cca69.png">


## References
Dataset created by the United States Geological Survey
- https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
