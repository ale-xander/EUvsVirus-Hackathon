console.log('testing')
var mykey = config.MY_KEY;

function initMap () {
  // The location of Uluru
  var SJC = { lat: 37.3353, lng: -121.8919 }
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: SJC
  })
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: SJC, map: map })
}
