//all markers in this file

//create new functions here to build more markers

export function buildMarker(backgroundUrl) {
  //code here
const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"; //template

return markerDomEl;
}

//markerDomEl.style.backgroundImage = `url(${backgroundUrl})`
