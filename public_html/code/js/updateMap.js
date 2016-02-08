/*
Code for grid on map.
*/
// Define a symbol using SVG path notation, with an opacity of 1.
// var lineSymbol = {
//   path: 'M 0,-1 0,1',
//   strokeOpacity: 1,
//   scale: 2
// };

var gridLats = [];
for (lat=-86; lat < 90; lat=lat+4){
  var temp = [];
  temp.push(new google.maps.LatLng(lat, -180));
  temp.push(new google.maps.LatLng(lat, 0));
  temp.push(new google.maps.LatLng(lat, 180));
  gridLats.push(new google.maps.Polyline({
    path: temp,
    strokeColor: '#777777',
    strokeOpacity: 0.7,
    strokeWeight: 0.5
  }));
}
var gridLngs = [];
for (lng=-180; lng < 180; lng=lng+4){
  var temp = [];
  temp.push(new google.maps.LatLng(-90, lng));
  temp.push(new google.maps.LatLng(0, lng));
  temp.push(new google.maps.LatLng(90, lng));
  gridLats.push(new google.maps.Polyline({
    path: temp,
    strokeColor: '#777777',
    strokeOpacity: 0.7,
    strokeWeight: 0.5
  }));
}

function drawGrid() {
  // This function draws a grid on map at box edges using
  // white transparent color.
  for (i=0; i < gridLats.length; i++) {
    gridLats[i].setMap(map);
  }
  for (i=0; i < gridLngs.length; i++) {
    gridLngs[i].setMap(map);
  }
}

function clearGrid() {
  // This function clears the grid off the map
  for (i=0; i < gridLats.length; i++) {
    gridLats[i].setMap(null);
  }
  for (i=0; i < gridLngs.length; i++) {
    gridLngs[i].setMap(null);
  }
}

/*
Code for color bar on page.
Uses jscolor and some custom code.
Adapted from http://jsfiddle.net/rootandy/54rV7/
*/
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function colorCode(fadeProp, r0, r1, g0, g1, b0, b1) {
  if (fadeProp < 0.0 || fadeProp > 1.0) {
    return ("rgb(127,127,127)");
  }
  return("rgb("+ Math.floor(r0 + (r1-r0)*fadeProp) +","+
                  Math.floor(g0 + (g1-g0)*fadeProp) +","+
                  Math.floor(b0 + (b1-b0)*fadeProp) +")");
}

function updateColorbar() {
  nbins = 100;
  var increment = 1.0/nbins;
  var sc = hexToRgb('#'+$('#startColor').val());
  var ec = hexToRgb('#'+$('#endColor').val());
  $('#colorbar').html('');
  var gradient = $("<div>").css({display:"flex", "flex-direction":"row",height:"100%"});
  for (var i = 0; i <= 1.0; i += increment){
        gradient.append($("<div>").css({float:"left",
        "background-color":colorCode(i,sc.r,ec.r,sc.g,ec.g,sc.b,ec.b),flex:1}));
  }
  $("#colorbar").append(gradient);
  $("#colorbar").css("width","300px").css("height","30px");
}

function grayscale() {
  $('#startColor').val("FFFFFF");
  $('#startColor').css('background-color', '#FFFFFF');
  $('#endColor').val("000000");
  $('#endColor').css('background-color', '#000000');
  updateColorbar();
  updateShapeColors();
}
function heatmap() {
  $('#startColor').val("FFFF00");
  $('#startColor').css('background-color', '#FFFF00');
  $('#endColor').val("FF0000");
  $('#endColor').css('background-color', '#FF0000');
  updateColorbar();
  updateShapeColors();
}
function blues() {
  $('#startColor').val("FFFFFF");
  $('#startColor').css('background-color', '#FFFFFF');
  $('#endColor').val("0000FF");
  $('#endColor').css('background-color', '#0000FF');
  updateColorbar();
  updateShapeColors();
}
function reds() {
  $('#startColor').val("FFFFFF");
  $('#startColor').css('background-color', '#FFFFFF');
  $('#endColor').val("FF0000");
  $('#endColor').css('background-color', '#FF0000');
  updateColorbar();
  updateShapeColors();
}
function greens() {
  $('#startColor').val("FFFFFF");
  $('#startColor').css('background-color', '#FFFFFF');
  $('#endColor').val("00FF00");
  $('#endColor').css('background-color', '#00FF00');
  updateColorbar();
  updateShapeColors();
}
/*
Code for plotting the rectangles
*/
var shapesPlotted = [];
var diversityMeasures = [];
var nseqs = [];
var nsps = [];
var nbps = [];
var nsegs = [];
var infoHtmls = [];

function getRadUpperLat(latitude) {
  latitude += ((latitude < 0) ? -2 : 2);
  latitude = latitude*Math.PI/180.0;
  return(latitude);
}

function attachListenerWithSeqMsg(rect, lat, lng, nsps, nseq, msg, diversity, nseg, nbp) {
  rect.addListener('click', function(msevent) {
    updateInfoDiv(lat, lng, nsps, nseq, msg, diversity, nseg, nbp);
  });
}

function updateInfoDiv(lat, lng, nsp, nseq, infoString, diversity, nseg, nbp) {
  htmlstr = "<h3>Information on chosen location</h3>";
  htmlstr += "<h4>Sampling grid location</h4>"
  htmlstr += "<b>Latitude:  </b>"+lat+"&nbsp;&nbsp;&nbsp;";
  htmlstr += "<b>Longitude: </b>"+lng+"<br/>";
  htmlstr += "<b># species: "+nsp+"</b>&nbsp;&nbsp;&nbsp;";
  htmlstr += "<b># sequences: "+nseq+"</b></br>";
  htmlstr += "<b># segregating sites: "+nseg+"</b>&nbsp;&nbsp;&nbsp;";
  htmlstr += "<b># basepairs: "+nbp+"</b></br>";
  htmlstr += "<b>Diversity: "+diversity+"</b>";
  $('#infoDiv').html(htmlstr);
  htmlstr = "<h4><a href='http://www.ncbi.nlm.nih.gov/genbank/' target='_blank'>GenBank</a> information</h4>";
  htmlstr += "<table class='gentable'><thead><tr><th width='57%'>Species</th>"
  htmlstr += "<th width='43%'>Accession</span></th></tr></thead>"
  htmlstr += "<tbody>"
  htmlstr += infoString;
  htmlstr += "</tbody></table>"
  $('#genbankDiv').html(htmlstr);
}

function showRectangles(lats, lngs) {
  if (diversityMeasures.length == 0) {
    return;
  }
  for (i=0; i < shapesPlotted.length; i++) {
    shapesPlotted[i].setMap(null);
  }
  shapesPlotted.length = 0;
  var sc = hexToRgb('#'+$('#startColor').val());
  var ec = hexToRgb('#'+$('#endColor').val());
  var opac = $('#opacity').val()/100;
  var colors = [];
  var maxMeasure = Math.max.apply(Math, diversityMeasures);
  var minMeasure = Math.min.apply(Math, diversityMeasures);
  $('#minmeasure').html(minMeasure);
  $('#maxmeasure').html(maxMeasure);
  if (maxMeasure == minMeasure) {
    var tempColor = colorCode(0.5,sc.r,ec.r,sc.g,ec.g,sc.b,ec.b);
    for (i=0; i < lats.length; i++) {
      colors.push(tempColor);
    }
  } else {
    for (i=0; i < lats.length; i++) {
      colors.push(colorCode((diversityMeasures[i] - minMeasure)/maxMeasure,
                            sc.r,ec.r,sc.g,ec.g,sc.b,ec.b));
    }
  }
  for (i=0; i < lats.length; i++) {
    var curRect = new google.maps.Rectangle( {
      map: map,
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(lats[i]-2, lngs[i]-2),
        new google.maps.LatLng(lats[i]+2, lngs[i]+2)
      ),
      fillColor: colors[i],
      fillOpacity: opac,
      strokeWeight: 0,
      clickable: true
    });
    attachListenerWithSeqMsg(curRect, lats[i], lngs[i], nsps[i], nseqs[i], infoHtmls[i], diversityMeasures[i], nsegs[i], nbps[i]);
    shapesPlotted.push(curRect);
  }
}

function showCircles(lats, lngs) {
  if (diversityMeasures.length == 0) {
    return;
  }
  for (i=0; i < shapesPlotted.length; i++) {
    shapesPlotted[i].setMap(null);
  }
  shapesPlotted.length = 0;
  var sc = hexToRgb('#'+$('#startColor').val());
  var ec = hexToRgb('#'+$('#endColor').val());
  var opac = $('#opacity').val()/100;
  var colors = [];
  var maxMeasure = Math.max.apply(Math, diversityMeasures);
  var minMeasure = Math.min.apply(Math, diversityMeasures);
  $('#minmeasure').html(minMeasure);
  $('#maxmeasure').html(maxMeasure);
  if (maxMeasure == minMeasure) {
    var tempColor = colorCode(0.5,sc.r,ec.r,sc.g,ec.g,sc.b,ec.b);
    for (i=0; i < lats.length; i++) {
      colors.push(tempColor);
    }
  } else {
    for (i=0; i < lats.length; i++) {
      colors.push(colorCode((diversityMeasures[i] - minMeasure)/maxMeasure,
                            sc.r,ec.r,sc.g,ec.g,sc.b,ec.b));
    }
  }
  var mxNseqs = Math.max.apply(Math, nseqs);
  var curSeqs = [];
  for (i=0; i < nseqs.length; i++) {
    curSeqs.push(Math.log(nseqs[i]+1)/Math.log(mxNseqs+1));
  }
  for (i=0; i < lats.length; i++) {
    var curCirc = new google.maps.Circle( {
      map: map,
      center: new google.maps.LatLng(lats[i], lngs[i]),
      // Length of 1 degree of long at equator is 111321 m
      radius: curSeqs[i]*2*Math.cos(getRadUpperLat(lats[i]))*111321,
      fillColor: colors[i],
      fillOpacity: opac,
      strokeWeight: 0,
      clickable: true
    });
    attachListenerWithSeqMsg(curCirc, lats[i], lngs[i], nsps[i], nseqs[i], infoHtmls[i], diversityMeasures[i], nsegs[i], nbps[i]);
    shapesPlotted.push(curCirc);
  }
}

function switchShapes() {
  var lats = [];
  var lngs = [];
  if ($('#rectSymbol').is(":checked")) {
    for (i=0; i < shapesPlotted.length; i++){
      lats.push(shapesPlotted[i].getCenter().lat());
      lngs.push(shapesPlotted[i].getCenter().lng());
    }
    showRectangles(lats, lngs);
  } else {
    for (i=0; i < shapesPlotted.length; i++){
      lats.push(shapesPlotted[i].getBounds().getCenter().lat());
      lngs.push(shapesPlotted[i].getBounds().getCenter().lng());
    }
    showCircles(lats, lngs);
  }
}

/*
Vars for plotting range
*/
var rangeLats = [];
var rangeLngs = [];
var rangeBoxesPlotted = [];

function clearRange() {
  for (i=0; i < rangeBoxesPlotted.length; i++) {
    rangeBoxesPlotted[i].setMap(null);
  }
}

function drawRange() {
  clearRange();
  if (rangeLats.length == 0 || rangeLngs.length == 0 || rangeLats.length != rangeLngs.length) {
    return 0;
  }

  for (i=0; i < rangeLats.length; i++) {
      var curRangePath = [
        {lat:rangeLats[i]-2, lng:rangeLngs[i]-2},
        {lat:rangeLats[i]-2, lng:rangeLngs[i]+2},
        {lat:rangeLats[i]+2, lng:rangeLngs[i]+2},
        {lat:rangeLats[i]+2, lng:rangeLngs[i]-2},
        {lat:rangeLats[i]-2, lng:rangeLngs[i]-2}
      ];
      rangeBox = new google.maps.Polyline({
        path: curRangePath,
        strokeColor: '#555555',
        strokeOpacity: 1,
        strokeWeight: 2
      });
      rangeBox.setMap(map);
      rangeBoxesPlotted.push(rangeBox);
  }
}

function colorMap(spType, species) {
  $.ajax({
    url: "/temp",
    type: "post",
    datatype:"json",
    data: {"spType": spType, "species": species},
    success: function(response){
      // Execute our callback function
      updateMap(response);
    }
  });
}
function updateMap(response) {
    var obj = $.parseJSON(response);
    diversityMeasures = obj[2];
    nseqs = obj[3];
    infoHtmls = obj[4];
    nsps = obj[5];
    nsegs = obj[6];
    nbps = obj[7];
    rangeLats = obj[8];
    rangeLngs = obj[9];
    if ($('#rectSymbol').is(":checked")) {
      showRectangles(obj[0], obj[1]);
    } else {
      showCircles(obj[0], obj[1]);
    }
    if ($('#showRange').is(":checked")) {
      drawRange();
    }
}

function updateShapeOpacity() {
  var opac = $('#opacity').val()/100.0;
  for (i=0; i < shapesPlotted.length; i++) {
    shapesPlotted[i].setOptions({ fillOpacity: opac });
  }
}

function updateShapeColors() {
  var sc = hexToRgb('#'+$('#startColor').val());
  var ec = hexToRgb('#'+$('#endColor').val());
  var colors = [];
  var maxMeasure = Math.max.apply(Math, diversityMeasures);
  var minMeasure = Math.min.apply(Math, diversityMeasures);
  if (maxMeasure == minMeasure) {
    var tempColor = colorCode(0.5,sc.r,ec.r,sc.g,ec.g,sc.b,ec.b);
    for (i=0; i < diversityMeasures.length; i++) {
      colors.push(tempColor);
    }
  } else {
    for (i=0; i < diversityMeasures.length; i++) {
      colors.push(colorCode((diversityMeasures[i] - minMeasure)/maxMeasure,
                            sc.r,ec.r,sc.g,ec.g,sc.b,ec.b));
    }
  }
  for (i=0; i < shapesPlotted.length; i++) {
    shapesPlotted[i].setOptions({ fillColor: colors[i] });
  }
}

$(document).ready(function() {
  $('#refresher').click(function() {
    var spType = "none";
    if ($('#mammals').is(":visible")) {
      spType = "mammals";
    } else if ($('#amphibians').is(":visible")) {
      spType = "amphibians";
    }
    $('#infoDiv').html("");
    $('#genbankDiv').html("");
    var strDis = "";
    var species;
    if (spType == "mammals") {
      species = $('#mammalNames').val();
    } else if (spType == "amphibians") {
      species = $('#amphibianNames').val();
    }
    if (species == null) {
      for (i=0; i < shapesPlotted.length; i++) {
        shapesPlotted[i].setMap(null);
      }
      shapesPlotted.length = 0;
      $('#minmeasure').html("");
      $('#maxmeasure').html("");
//      $('#temporary').html("hehe 000");
      return 0;
    }
    colorMap(spType, species);
  });
  $('#resetter').click(function(){
    $('#mammalNames').val('');
    $('#amphibianNames').val('');
    $('#chosenSpecies').val('');
    $('#showRange').prop('checked', false);
    clearRange();
    $('#showGrid').prop('checked', false);
    clearGrid();
    for (i=0; i < shapesPlotted.length; i++) {
      shapesPlotted[i].setMap(null);
    }
    shapesPlotted.length = 0;
    $('#minmeasure').html("");
    $('#maxmeasure').html("");
    $('#infoDiv').html("");
    $('#genbankDiv').html("");
  });
  $('#showGrid').change(function(){
    if ($(this).is(":checked")) {
      drawGrid();
    } else {
      clearGrid();
    }
  });
  $('#showRange').change(function(){
    if ($(this).is(":checked")) {
      drawRange();
    } else {
      clearRange();
    }
  });
  $('#startColor').change(function(){
    updateColorbar();
    updateShapeColors();
  });
  $('#endColor').change(function(){
    updateColorbar();
    updateShapeColors();
  });
  $('#opacity').change(function(){
    updateShapeOpacity();
  });
  $('input[name=speciesType]').on('change', function() {
    spType = $(this).val();
    if (spType == 'mammals') {
      $('#amphibians').hide();
      $('#mammals').show();
    } else {
      $('#mammals').hide();
      $('#amphibians').show();
    }
  });
  $('input[name=symbol]').on('change', function() {
    switchShapes();
  });
  // $('#amphibianNames').on('change', function() {
  //   if (('#amphibianNames').prop('selected'))
  // });
//  $('input[type="range"]').on('input', function () {
//    var percent = Math.ceil(((this.value - this.min) / (this.max - this.min)) * 100);
//    $(this).css('background', '-webkit-linear-gradient(left, #757773 0%, #757773 ' + percent + '%, #B5B7B3 ' + percent + '%)');
//  });
});
