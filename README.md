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

Closing
=============  
GWindow will look for an element with the close class in the content and assign the proper handlers to call the remove method when clicked.
You can also manually remove the window. 

    gWindow.remove();
    
In order to completely remove the window and its map reference you must nullify its map.

    gWindow.setMap(null);
    
Styling
=============
The main container for the window is given the class "g-window". You can style this div and its contents using css.
    
    .g-window {
        background: url("window_bg.png") no-repeat;
        font-family: Verdana, Sans-serif;
        height: 180px;
        padding: 10px;
        width: 280px;
    }
    
    .g-window a.close {
        border: solid 1px #CCC;
        color: #CCC;
        display: block;
        font-size: 10px;
        height: 15px;
        line-height: 15px;
        position: absolute;
        right: 10px;
        top: 10px;
        text-align: center;
        text-decoration: none;
        width: 15px;
    }
    
    .g-window a.close:hover {
        border-color: #26BDE3;
        color: #26BDE3;
    }
    
    .g-window h1 {
        color: #333;
        font-size: .8em;
    }