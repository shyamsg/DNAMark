// This example creates a custom overlay called USGSOverlay, containing
// a U.S. Geological Survey (USGS) image of the relevant area on the map.

// Set the custom overlay object's prototype to a new instance
// of OverlayView. In effect, this will subclass the overlay class therefore
// it's simpler to load the API synchronously, using
// google.maps.event.addDomListener().
// Note that we set the prototype to an instance, rather than the
// parent class itself, because we do not wish to modify the parent class.

// Width and height of map in px
const startLat = 56.2639;
const startLng = 9.5018;
const mapW = 1200;
const mapH = 675;
const leftX = -mapW/2.0;
const rightX = mapW/2.0;
const topY = -mapH/2.0;
const bottomY = mapH/2.0;
const startLL = new google.maps.LatLng(startLat, startLng);

var overlay;
HexOverlay.prototype = new google.maps.OverlayView();
const SQRT3 = 1.73205;
const HALFSQRT3 = SQRT3/2.0;

// Initialize the map and the custom overlay.
var map;
var infoWindow = null;
function getOccurrence() {
  var skingdom = $('#kingdom').val();
  var sphylum = $('#phylum').val();
  var sclass = $('#class').val();
  var sorder = $('#order').val();
  var sfamily = $('#family').val();
  var sgenus = $('#genus').val();
  var sspecies = $('#species').val();

 return $.ajax({
    url: "/remap",
    type: "post",
    datatype:"json",
    data: {"kingdom": skingdom,
           "phylum": sphylum,
           "class": sclass,
           "order": sorder,
           "family": sfamily,
           "genus": sgenus,
           "species": sspecies
    },
    success: function(response){
      // Execute our callback function
      // uses global variable
      overlay.saveResponseArrays(response);
    }
  });
};

function initMap() {
  map = new google.maps.Map(document.getElementById('mymap'), {
    zoom: 7,
    center: {lat: startLat, lng: startLng},
    disableDoubleClickZoom: true,
    maxZoom: 12,
    minZoom: 5
  });

  // The custom USGSOverlay object contains the USGS image,
  // the bounds of the image, and a reference to the map.
  overlay = new HexOverlay(map);
  // Add event listener to the map so that any change in the bounds
  // calls the getOccurrences event
//  map.addListener('idle', function() {
//    getOccurrence();
//  });
}


// to do the hex binnedmap, one way is to add one div and lots of svgs to the
// overlay layer, each svg being a hexagon

/** @constructor */
function HexOverlay(map) {
  this.map_ = map;
  this.bounds_ = null;
  this.hexagons_ = [];
  this.hexLatCenters = [];
  this.hexLngCenters = [[], []];
  this.counts_ = [];
  this.returnArrays = [];
  this.infoWindows = null;
  // Define a property to hold the image's div. We'll
  // actually create this div upon receipt of the onAdd()
  // method so we'll leave it null for now.
  this.div_ = null;

  // Explicitly call setMap on this overlay.
  this.setMap(map);
}

/**
 * onAdd is called when the map's panes are ready and the overlay has been
 * added to the map.
 */
HexOverlay.prototype.onAdd = function() {
  // set the bounds to be the whole visible map
  this.bounds_ = this.map_.getBounds();
  var div = document.createElement('div');
  div.style.borderStyle = 'none';
  div.style.borderWidth = '0px';
  div.style.position = 'absolute';

  this.div_ = div;
  // Add the element to the "overlayLayer" pane.
  var panes = this.getPanes();
  panes.overlayLayer.appendChild(div);
  getOccurrence();
};

HexOverlay.prototype.saveResponseArrays = function (response) {
  this.returnArrays.length = 0;
  this.returnArrays = JSON.parse(response);
}

HexOverlay.prototype.removeHex = function() {
    for (var i = 0; i < this.hexagons_.length; i++) {
      for (var j = 0; j < this.hexagons_[i].length; j++) {
        this.hexagons_[i][j].setMap(null);
      }
      this.hexagons_[i].length = 0;
    }
    this.hexLatCenters.length = 0;
    this.hexLngCenters[0].length = 0;
    this.hexLngCenters[1].length = 0;
    this.hexagons_.length = 0;
};

HexOverlay.prototype.getLeftXAndTopY = function(radius) {
  var proj = this.getProjection();
  var startPoint = proj.fromLatLngToDivPixel(startLL);
  var curX = startPoint.x;
  var curY = startPoint.y;
  curY -= radius;
  var offsetCnt;
  var yadj = 1.5*radius;
  if (curY > topY) {
    offsetCnt = Math.ceil((curY - topY)/yadj);
    curY -= (offsetCnt*yadj);
  } else {
    offsetCnt = Math.floor((topY-curY)/yadj);
    curY += (offsetCnt*yadj);
  }
  var xadj = radius * SQRT3;
  if (offsetCnt%2 == 0) {
    curX -= (xadj/2.0);
  }
  if (curX > leftX) {
    curX -= Math.ceil((curX - leftX)/xadj)*xadj;
  } else {
    curX += Math.floor((leftX - curX)/xadj)*xadj;
  }
  return([curX, curY, offsetCnt]);
}

HexOverlay.prototype.draw = function() {
  this.removeHex();
  var zoom = this.map_.getZoom();
  var radius = Math.floor(mapW/(12*zoom));
  var radiusWidth = radius * HALFSQRT3;
  var diamWidth = radius * SQRT3;

  // We use the south-west and north-east
  // coordinates of the overlay to peg it to the correct position and size.
  // To do this, we need to retrieve the projection from the overlay.
  var overlayProjection = this.getProjection();
  // Know the width of the mapdiv and the height of the mapdiv, and
  // of course we are going to start at the with a hex, and
  // tile to make that row.
  var point = this.getLeftXAndTopY(radius);
  var centerX = point[0];
  var centerY = point[1];
  var offset = (point[2]%2);
  var rowCnt = 0;
  while(true) { //rows loop
    this.hexagons_.push([]);
    var temp = new google.maps.Point(centerX, centerY);
    var hexCenter = overlayProjection.fromDivPixelToLatLng(temp);
    this.hexLatCenters.push(hexCenter.lat());
    while (true) { //cols loop
      if ((centerX - 2*radiusWidth) > rightX) {
        break;
      }
      var vertices = this.getHexCoordinates(centerX, centerY, radius);
      temp.x = centerX;
      hexCenter = overlayProjection.fromDivPixelToLatLng(temp);
      var hexagon = new google.maps.Polygon({
            paths: vertices,
            strokeColor: '#000',
            strokeOpacity: 1,
            strokeWeight: 1,
            fillColor: '#f00',
            visible: false,
            lat: hexCenter.lat(),
            lng: hexCenter.lng()
        });
      hexagon.setMap(this.map_);
      this.hexagons_[rowCnt].push(hexagon);
      if (rowCnt == 0) {
        this.hexLngCenters[0].push(hexCenter.lng());
      } else{
        if (rowCnt == 1) {
          this.hexLngCenters[1].push(hexCenter.lng());
        }
      }
      centerX = centerX + diamWidth;
    }
    centerY = centerY + 1.5*radius;
    if (rowCnt%2 == 0) {
      centerX = point[0];
    } else {
      centerX = point[0] - radiusWidth;
    }
    rowCnt++;
    if ((centerY - radius) > bottomY) {
      break;
    }
  }
  this.colorHexes();
};

HexOverlay.prototype.getHexCoordinates = function (centerX, centerY, radius)  {
  var overlayProjection = this.getProjection();
  var halfrad = radius/2.0;
  var sqrt3rad = radius*HALFSQRT3;
  var points = [];
  // start with top point
  var point = new google.maps.Point(centerX, centerY+radius);
  points.push(overlayProjection.fromDivPixelToLatLng(point));
  // 2 o clock
  point = new google.maps.Point(centerX + sqrt3rad, centerY+halfrad);
  points.push(overlayProjection.fromDivPixelToLatLng(point));
  // 4 o clock
  point = new google.maps.Point(centerX + sqrt3rad, centerY-halfrad);
  points.push(overlayProjection.fromDivPixelToLatLng(point));
  // bottom
  point = new google.maps.Point(centerX, centerY-radius);
  points.push(overlayProjection.fromDivPixelToLatLng(point));
  // 8 o clock
  point = new google.maps.Point(centerX - sqrt3rad, centerY-halfrad);
  points.push(overlayProjection.fromDivPixelToLatLng(point));
  // 10 o clock
  point = new google.maps.Point(centerX - sqrt3rad, centerY+halfrad);
  points.push(overlayProjection.fromDivPixelToLatLng(point));
  return(points);
};

HexOverlay.prototype.colorHexes = function () {
  // For eah of the hexes, find number of occurrences,
  // first make the counts matrix
  // while keeping track of maximum
  if (this.returnArrays.length == 0) {
      return(false);
  }
  this.counts_.length = 0;
  for (var row=0; row < this.hexagons_.length; row++) {
    this.counts_.push([]);
    for (var col=0; col < this.hexagons_[row].length; col++) {
      this.counts_[row].push([]);
      for (var tempIndex=0; tempIndex <= kingdoms.length; tempIndex++) {
        this.counts_[row][col].push(0);
      }
    }
  }
  const lats = this.returnArrays[0].map(parseFloat);
  const lngs = this.returnArrays[1].map(parseFloat);
  const kngs = this.returnArrays[2];
  const dmds = this.returnArrays[3];
  const countries = this.returnArrays[4];
  updateTableHTML();
  for (var index = 0; index < lats.length; index++) {
    this.updateCounts(lats[index], lngs[index], kngs[index]);
  }
  if (this.counts_.length === this.hexagons_.length) {
    for (var row=0; row < this.hexagons_.length; row++) {
      for (var col=0; col < this.hexagons_[row].length; col++) {
        if (Math.max(...this.counts_[row][col]) > 0) {
          this.hexagons_[row][col].setOptions({visible: true});
          var contentString = '<div class="info">'+
              '<h3>Samples</h3>';
	  for (var tempIndex=0; tempIndex < kingdoms.length; tempIndex++) {
            contentString += ('<p><font color="#22bb44" size="2"><b>' + kingdoms[tempIndex] + ':</b> ' + this.counts_[row][col][tempIndex+1] + '</font></p>');
	  }
          contentString += ('<p><font color="#666666" size="2"><b>NA:<b> ' + this.counts_[row][col][0] + '</font></p>' + '</div>');
          this.hexagons_[row][col]['info'] = contentString;
          this.hexagons_[row][col].addListener('click', function() {
            if (infoWindow) {
                infoWindow.close();
            }
            infoWindow = new google.maps.InfoWindow({
              position : {lat: this.lat, lng: this.lng},
              content : this.info
            });
            infoWindow.open(map);
          });
          this.hexagons_[row][col].addListener('rightclick', function() {
            alert("Going to Ibiza!");
          });
        }
      }
    }
  }
};

HexOverlay.prototype.attachWindow = function (row, col) {
};

HexOverlay.prototype.updateCounts = function (lat, lng, kng) {
  // figure out hex that contains the thing, and add to count,
  // and then stop as soon as you have assigned the location
  var dists = this.hexLatCenters.map(function(x){return(Math.abs(x-lat));});
  var bestIndex = dists.indexOf(Math.min(...dists));
  var startRow = Math.max(0, bestIndex-1);
  var endRow = Math.min(bestIndex+1, this.hexLatCenters.length-1);
  var startCol0;
  var endCol0;
  var startCol1;
  var endCol1;
  if (startRow%2 == 0) {
    dists = this.hexLngCenters[0].map(function(x){return(Math.abs(x-lng));});
    bestIndex = dists.indexOf(Math.min(...dists));
    startCol0 = Math.max(0, bestIndex-1);
    endCol0 = Math.min(bestIndex+1, this.hexLngCenters[0].length-1);
    dists = this.hexLngCenters[1].map(function(x){return(Math.abs(x-lng));});
    bestIndex = dists.indexOf(Math.min(...dists));
    startCol1 = Math.max(0, bestIndex-1);
    endCol1 = Math.min(bestIndex+1, this.hexLngCenters[1].length-1);
  } else {
    dists = this.hexLngCenters[1].map(function(x){return(Math.abs(x-lng));});
    bestIndex = dists.indexOf(Math.min(...dists));
    startCol0 = Math.max(0, bestIndex-1);
    endCol0 = Math.min(bestIndex+1, this.hexLngCenters[1].length-1);
    dists = this.hexLngCenters[0].map(function(x){return(Math.abs(x-lng));});
    bestIndex = dists.indexOf(Math.min(...dists));
    startCol1 = Math.max(0, bestIndex-1);
    endCol1 = Math.min(bestIndex+1, this.hexLngCenters[0].length-1);
  }
  var ll = new google.maps.LatLng(lat, lng);
  var startCol, endCol;
  var found = false;
  for (var row=startRow; row <= endRow; row++) {
    if (row%2 == 0) {
      startCol = startCol0;
      endCol = endCol0;
    } else {
      startCol = startCol1;
      endCol = endCol1;
    }
    for (var col=startCol; col <= endCol; col++) {
      if (google.maps.geometry.poly.containsLocation(ll, this.hexagons_[row][col])) {
        let index = kingdoms.indexOf(kng) + 1;
        this.counts_[row][col][index]++;
        found = true;
        break;
      }
      if (found) {
        break;
      }
    }
  }
};

// The onRemove() method will be called automatically from the API if
// we ever set the overlay's map property to 'null'.
HexOverlay.prototype.onRemove = function() {
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
};


