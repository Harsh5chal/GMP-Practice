//Day 1
// let map;

// function initMap() {
//     let x = document.getElementById("lat").value;
//     let y =  document.getElementById("lng").value;

//     map = new google.maps.Map(document.getElementById("map"),{
//         center: {lat: parseFloat(x), lng: parseFloat(y)},
//         zoom: 4,
//     });
// }

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 20.5937, lng: 78.9629 },
//     zoom: 4,
//   });
// }

//Showing Pixel and Tile Coordinates
// function initMap() {
//     const india = new google.maps.LatLng(20.5937,78.9629);
//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: india,
//       zoom: 4,
//     });
//     const coordInfoWindow = new google.maps.InfoWindow();
  
//     coordInfoWindow.setContent(createInfoWindowContent(india, map.getZoom()));
//     coordInfoWindow.setPosition(india);
//     coordInfoWindow.open(map);

//     map.addListener("zoom_changed", () => {
//       coordInfoWindow.setContent(createInfoWindowContent(india, map.getZoom()));
//       coordInfoWindow.open(map);
//     });
// }
 
// const Title_Size = 256;

// function createInfoWindowContent(latLng, zoom) {
//     const scale = 1<< zoom;
//     const worldCoordinate = project(latLng);
//     const pixelCoordinate = new google.maps.Point(
//         Math.floor((worldCoordinate.x * scale) /Title_Size),
//         Math.floor((worldCoordinate.y * scale) / Title_Size)
//     );
//     const tileCoordinate = new google.maps.Point(
//         Math.floor((worldCoordinate.x * scale) / Title_Size),
//         Math.floor((worldCoordinate.y * scale) / Title_Size)
//     );

//     return [
//         "India, IND",
//         "LatLng :" + latLng,
//         "Zooml level : " + " " + zoom,
//         "World Coordinates :" + " " + worldCoordinate,
//         "Pixel Coordinates :" + " " + pixelCoordinate,
//         "Tile Coordinates :" + " " + tileCoordinate,
//     ].join("<br>");
// }

// function project(latLng){
//     let siny = Math.sin(latLng.lat() * Math.PI / 180);
//     siny = Math.min(Math.max(siny, -0.9999), 0.9999);
//     return new google.maps.Point(
//         Title_Size * (0.5 + latLng.lng() / 360),
//         Title_Size * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)) 
//     );
// }

//Geolocation
// let map, infoWindow;

// function initMap(){
//     map = new google.maps.Map(document.getElementById("map"),{
//         center: { lat: 20.5937, lng: 78.9629 },
//         zoom: 4,
//     });

//     infoWindow = new google.maps.InfoWindow();
    
//     //const locationButton = document.getElementsById("geo");
//     const locationButton = document.createElement("button");

//     locationButton.textContent = "Pan to Current Location";
//     locationButton.classList.add("custom-map-control-button");
//     map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    
//     locationButton.addEventListener("click", () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//               (position) => {
//                 const pos = {
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude,
//                 };
      
//                 infoWindow.setPosition(pos);
//                 infoWindow.setContent("Location found.");
//                 infoWindow.open(map);
//                 map.setCenter(pos);
//               },
//               () => {
//                 handleLocationError(true, infoWindow, map.getCenter());
//               }
//             );
//           } else {
//             // Browser doesn't support Geolocation
//             handleLocationError(false, infoWindow, map.getCenter());
//         }
//     })    
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(
//       browserHasGeolocation
//         ? "Error: The Geolocation service failed."
//         : "Error: Your browser doesn't support geolocation."
//     );
//     infoWindow.open(map);
// }

//Right-to-Left Languages
// function initMap() {
//     const cairo = { lat: 20.5937, lng: 78.9629 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//       scaleControl: true,
//       center: cairo,
//       zoom: 10,
//     });
//     const infowindow = new google.maps.InfoWindow();
  
//     infowindow.setContent("<b>India</b>");
  
//     const marker = new google.maps.Marker({ map, position: cairo });
  
//     marker.addListener("click", () => {
//       infowindow.open(map, marker);
//     });
//   }

//Click Events
// function initMap(){
//     const myLatlng = {lat: 20.5937, lng: 78.9629};
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: myLatlng,
//     });

//     const marker = new google.maps.Marker({ map, position: myLatlng, title: "Click to zoom",});

//     map.addListener("center_changed", () =>{
//         window.setTimeout(()=>{
//             map.panTo(marker.getPosition());
//         }, 3000);
//     });

//     map.addListener("click" , ()=>{
//         map.setZoom(8),
//         map.setCenter(marker.getPosition());
//     });
// }

// // Using Closures in Event Listeners
// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: {lat: -25.363882, lng: 131.044922 },
//     });

//     const bounds = {
//         north: -25.363882,
//         south: -31.203405,
//         east: 131.044922,
//         west: 125.244141,
//     };

//     map.fitBounds(bounds);

//     const msg = ["Location" , "Intelligence"];
//     const lngSpan = bounds.east - bounds.west;
//     const latSpan = bounds.north - bounds.south; 

//     for(let i = 0;i< msg.length; i++){
//         const marker = new google.maps.Marker({
//             position: {
//                 lat: bounds.south + latSpan * Math.random(),
//                 lng: bounds.west + lngSpan * Math.random(),
//             },
//             map : map,
//         });
//         attachMsg(marker, msg[i]);
//     };
// }

// function attachMsg(marker, msg){
//     const infowindow = new google.maps.InfoWindow({
//         content : msg,
//     });

//     marker.addListener("click", ()=>{
//         infowindow.open(marker.get("map"), marker);
//     });
// }

//Accessing Arguments in UI Events
// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: { lat: 20.5937, lng: 78.9629},
//     });
//     map.addListener("click", (e) => {
//         placeMarkerAndPanTo(e.latLng, map);
//     });
// }

// function placeMarkerAndPanTo(latLng, map){
//     new google.maps.Marker({
//         position: latLng,
//         map: map,
//     });
//     map.panTo(latLng);
// }

//Getting Properties With Event Handlers
// function initMap() {
//     const originalMapCenter = new google.maps.LatLng(-25.363882, 131.044922);
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: originalMapCenter,
//     });
//     const infowindow = new google.maps.InfoWindow({
//       content: "Change the zoom level",
//       position: originalMapCenter,
//     });
  
//     infowindow.open(map);
//     map.addListener("zoom_changed", () => {
//       infowindow.setContent("Zoom: " + map.getZoom());
//     });
//   }

//Getting Lat/Lng from a Click Event
