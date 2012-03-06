GWindow
=============
A javascript utility for custom InfowWindows using the [Google Mapis V3 API](http://code.google.com/apis/maps/documentation/javascript/reference.html).

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(56.8848, 14.7730),
      map: map
    });
    var gWindow = new GWindow(map);
    
    google.maps.event.addListener(marker, "click", function() {
      gWindow.open(marker.getPosition());
    });