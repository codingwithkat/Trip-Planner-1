// import mapboxgl from "mapbox-gl";

// mapboxgl.accessToken = 'pk.eyJ1IjoiZ2luZ2VybWFuc29uIiwiYSI6ImNraHV0M3pyNjE2dnoycm95NjU4N3N6emwifQ.5fhrtZNMO_uC3cCYwIiXYQ';

// const map = new mapboxgl.Map({
//   container: "map",
//   center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//   zoom: 12, // starting zoom
//   style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
// });


// const markerElement = document.createElement('div');
// markerElement.style.width = "32px";
// markerElement.style.height = "39px";
// markerElement.style.zIndex = 2;
// markerElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerElement).setLngLat([-74.009151, 40.705086]).addTo(map);

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2luZ2VybWFuc29uIiwiYSI6ImNraHV0M3pyNjE2dnoycm95NjU4N3N6emwifQ.5fhrtZNMO_uC3cCYwIiXYQ';
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
