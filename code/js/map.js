function init() {
  var mapDiv = document.getElementById("mymap");
  var mapOptions = {
    center: new google.maps.LatLng(0, 0),
    zoom: 3,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  var map = new google.maps.Map(mapDiv, mapOptions);
}
window.onload = init;
