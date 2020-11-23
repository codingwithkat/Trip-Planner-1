import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2luZ2VybWFuc29uIiwiYSI6ImNraHV0M3pyNjE2dnoycm95NjU4N3N6emwifQ.5fhrtZNMO_uC3cCYwIiXYQ';
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
