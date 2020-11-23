import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2luZ2VybWFuc29uIiwiYSI6ImNraHV0M3pyNjE2dnoycm95NjU4N3N6emwifQ.5fhrtZNMO_uC3cCYwIiXYQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

console.log('Testing the setup with bundle.js here.....')
