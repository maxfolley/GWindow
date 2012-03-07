function GWindow(map, options) {
    if(typeof options === "undefined") options = {};
    options.offsetX = options.offsetX || 0;
    options.offsetY = options.offsetY || 0; 
    
    this.options_ = options;
    this.setMap(map);
    
    var div = document.createElement("DIV"),
        self = this;
        
    div.style.cssText = "position:absolute;visibility:hidden;";
    div.setAttribute("class", "g-window");
    this.div_ = div;
    
    this.findByClass_ = function(tag, cname) {
        anchors = this.div_.getElementsByTagName(tag); 
        for(var i = 0; i < anchors.length; i++) { 
            if(anchors[i].className === cname) {
                return anchors[i];
            }
        } 
    }
    
    this.setClose_ = function() {
        this.close_ = this.findByClass_("a", "close");
        if(typeof this.close_ != "undefined") {
            this.close_.onclick = function() {
               self.remove();
            }
        } 
    }
    
    this.setContent = function(content) {
        this.content_ = content || this.content_;
        if(typeof this.div_ != "undefined") {
            this.div_.innerHTML = this.content_;
            this.setClose_();
        }
    }

}

GWindow.prototype = new google.maps.OverlayView;

GWindow.prototype.draw = function() {
    this.projection_ = this.getProjection();
    if(typeof this.latLong_ != "undefined") {
        var point = this.projection_.fromLatLngToDivPixel(this.latLong_);
        this.div_.style.left = (point.x + this.options_.offsetX) + "px";
        this.div_.style.top = (point.y + this.options_.offsetY) + "px";
    }
}

GWindow.prototype.onRemove = function() {
    this.windowContent_.style.visibility = "hidden";
    this.div_.style.visibility = "hidden";
}

GWindow.prototype.open = function(latLong) {
    this.latLong_ = latLong;
    
    var div = this.div_;
    div.style.visibility = "visible";
    this.getPanes().floatPane.appendChild(this.div_);
    
    this.draw();
}

GWindow.prototype.remove = function() {
    this.div_.parentNode.removeChild(this.div_);
    this.div_.style.visibility = "hidden";
}