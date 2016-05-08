function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 19.4120362, lng: -99.18064319999996}
  });

  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
}