var map;
function initMap() {
  var landscapeStyle = [
  {
    "featureType": "administrative",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  }
];
var fullyEmpty = [
{
  "featureType": "administrative",
  "stylers": [
    { "visibility": "off" }
  ]
},{
  "featureType": "road",
  "stylers": [
    { "visibility": "off" }
  ]
},{
  "featureType": "landscape",
  "stylers": [
    { "visibility": "off" }
  ]
},{
  "featureType": "poi",
  "stylers": [
    { "visibility": "off" }
  ]
},{
  "featureType": "water",
  "elementType": "labels",
  "stylers": [
    { "visibility": "off" }
  ]
}
];
  var mapDiv = document.getElementById("mymap");
  var mapOptions = {
    center: new google.maps.LatLng(56, 10.5),
    mapTypeControlOptions: {
      mapTypeIds: [ 'fullyEmpty', 'landscapeStyle', google.maps.MapTypeId.ROADMAP,
      google.maps.MapTypeId.TERRAIN, 'OSM' ]
    },
    zoom: 7,
    mapTypeId: 'OSM',
    streetViewControl: false,
  };
  map = new google.maps.Map(mapDiv, mapOptions);
  map.mapTypes.set('fullyEmpty', new google.maps.StyledMapType(fullyEmpty, { name: 'Plain' }));
  map.mapTypes.set('landscapeStyle', new google.maps.StyledMapType(landscapeStyle, { name: 'Landscape' }));
}
window.onload = initMap;
