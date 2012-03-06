function GWindow(map, options) {    
    this.map_ = map;
    this.options_ = options;
    this.setMap(map);
    this.projection_ = this.getProjection();
    
    function this.setContent(content) {
        this.div_.innerHTML = content;
    }
    
    function this.styleWindow(cssText) {
        this.div_.style.cssText = cssText;
    }
    
}

GWindow.prototype = new google.maps.OverlayView;

GWindow.prototype.draw = function() {
    if(typeof this.latLong_ != "undefined") {
        var point = this.projection_.fromLatLngToDivPixel(this.latLong_);
        this.div_.style.left = (point.x + this.options_.offsetX) + "px";
        this.div_.style.top = (point.y + this.options_.offsetY) + "px";
    }
}

GWindow.prototype.onAdd = function() {    
    var div = document.createElement("DIV");
    div.style.cssText = "background-color:#333;border:solid 1px #333;height:200px;padding:20px;position:absolute;visibility:hidden;width:200px;";
    div.setAttribute("class", "g-window");
    this.div_ = div;    
    this.getPanes().floatPane.appendChild(div);
}

GWindow.prototype.onRemove = function() {
    this.windowContent_.style.visibility = "hidden";
    this.div_.style.visibility = "hidden";
}

GWindow.prototype.open = function(latLong) {
    this.latLong_ = latLong;
    // Resize the image's DIV to fit the indicated dimensions.
    var div = this.div_;
    div.style.visibility = "visible";
    this.draw()
}