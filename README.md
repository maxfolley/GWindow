GWindow
=============
A simple javascript utility for custom info windows using the [Google Mapis V3 API](http://code.google.com/apis/maps/documentation/javascript/reference.html) that allows you to style the window using CSS.
  
Usage
=============

    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(45.523452, -122.676207),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(45.51991, -122.707844),
        map: map
    });
    
    var gWindow = new GWindow(map, {offsetX: -150, offsetY: -206});
    
    google.maps.event.addListener(marker, "click", function() {
        var content = "<div><img src='thumb.jpg'/><em>Japanese Gardens</em></div>";
        content += "<h1>Portland, OR</h1>";
        content += "<p>Aenean lacinia bibendum nulla sed consectetur.</p>";
        content += "<a href='#' class='close'>X</a>";
        gWindow.setContent(content);
        gWindow.open(marker.getPosition());
    });
    
GWindow will look for an element with the close class in the content and assign the proper handlers for closing the window.

The remove method will hid the window but will not remove it from the map.
    
    gWindow.remove();
    
In order to completely remove the window from the map you its nullify its map.

    gWindow.setMap(null);