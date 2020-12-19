$(document).ready(function () {
    function initialize() {

        /* Set styles */

        var styles = [
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#eae9e9" }
    ]
  },{
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#88a7d0" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#dadada" }
    ]
  },{
    "featureType": "poi.sports_complex",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.school",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.place_of_worship",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.medical",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.government",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.business",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.attraction",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#cccccc" },
      { "visibility": "on" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#cccccc" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#eae9e9" }
    ]
  },{
    "featureType": "administrative",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#808080" },
      { "visibility": "on" }
    ]
  },{
  "featureType": "road",
  "elementType": "labels.icon",
  "stylers": [
  	{ "visibility": "off" }
	]
  },{
  "featureType": "transit.station.airport",
  "elementType": "labels",
  "stylers": [
  	{ "visibility": "off" }
	]
  },{
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#808080" }
    ]
  }
];

        var styledMap = new google.maps.StyledMapType(styles, {
            name: "NiceMap"
        });

        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(51.48997, -0.24435)
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        //var baseSvg = {
        //        x1: "m 257.796 0c-97.909 0-176.954 79.046-176.954 176.954 0 20.66 1.796 46.709 20.66 77.249 61.081 102.4 156.294 255.102 156.294 255.102s92.519-152.702 156.295-255.102c17.067-26.947 20.659-56.59 20.659-77.249-0.898-97.909-79.944-176.954-176.954-176.954z",
        //        x2: "m 319.776 176.954c0 34.23-27.749 61.979-61.979 61.979s-61.979-27.749-61.979-61.979c0-34.23 27.749-61.979 61.979-61.979s61.979 27.749 61.979 61.979z"
  //          },

           // droplet = {
           //     path: baseSvg.x1,
           //     fillColor: '#333333',
           //     fillOpacity: 1,
          //      anchor: new google.maps.Point(200, 500),
          //      scale: 0.07
          //  },

          //  littleDot = {
          //      path: baseSvg.x2,
          //      fillColor: '#333333',
          //      fillOpacity: 1,
          //      anchor: new google.maps.Point(200, 500),
          //      scale: 0.07
          //  };


        var myLatLng = new google.maps.LatLng(51.48997, -0.24435);

        //var marker1 = new google.maps.Marker({
        //    position: myLatLng,
       //     map: map,
       //     icon: droplet,
       // });

       // var marker2 = new google.maps.Marker({
       //     position: myLatLng,
       //     map: map,
       //     icon: littleDot,
       // });

	  // var marker = new google.maps.Marker({
    //position: map.getCenter(),
    //icon: {
   //   path: google.maps.SymbolPath.CIRCLE,
   //   scale: 6,
	//  strokeColor: '#333333',
	//  strokeWeight: 14,
	//  fillColor: '#333333'
   // },
   // draggable: true,
  //  map: map
 // });

 var image = 'https://www.areen.com/fileadmin/content/markers/areen-pin.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 51.48997, lng: -0.24435},
    map: map,
    icon: image
  });



        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style')
    }
    google.maps.event.addDomListener(window, 'load', initialize);

});