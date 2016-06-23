/*
Code for grid on map.
*/
// Define a symbol using SVG path notation, with an opacity of 1.
// var lineSymbol = {
//   path: 'M 0,-1 0,1',
//   strokeOpacity: 1,
//   scale: 2
// };

var gridLatsPos = [-87.13095432,-71.19344778,-63.43259962,
-57.36675111,-52.16760793,-47.51200969,
-43.23364339,-39.23336546,-35.4462581,
-31.82689536,-28.34184634,-24.96549118,
-21.67751513,-18.4613206,-15.30297171,
-12.19046255,-9.113189106,-6.061552269,
-3.026646048,-7.63E-09,3.026646033,
6.061552253,9.113189091,12.19046254,
15.30297169,18.46132058,21.67751511,
24.96549116,28.34184633,31.82689534,
35.44625808,39.23336544,43.23364337,
47.51200967,52.16760791,57.36675108,
63.43259958,71.19344774,87.13095402];
var gridLngsPos = [-179.9996845,-175.9996915,
-171.9996986,-167.9997056,-163.9997127,
-159.9997198,-155.9997268,-151.9997339,
-147.9997409,-143.999748,-139.999755,
-135.9997621,-131.9997692,-127.9997762,
-123.9997833,-119.9997903,-115.9997974,
-111.9998044,-107.9998115,-103.9998186,
-99.99982562,-95.99983268,-91.99983974,
-87.9998468,-83.99985385,-79.99986091,
-75.99986797,-71.99987503,-67.99988209,
-63.99988914,-59.9998962,-55.99990326,
-51.99991032,-47.99991738,-43.99992443,
-39.99993149,-35.99993855,-31.99994561,
-27.99995267,-23.99995972,-19.99996678,
-15.99997384,-11.9999809,-7.999987956,
-3.999995014,-2.07E-06,3.99999087,
7.999983812,11.99997675,15.9999697,
19.99996264,23.99995558,27.99994852,
31.99994146,35.99993441,39.99992735,
43.99992029,47.99991323,51.99990617,
55.99989912,59.99989206,63.999885,
67.99987794,71.99987088,75.99986383,
79.99985677,83.99984971,87.99984265,
91.99983559,95.99982854,99.99982148,
103.9998144,107.9998074,111.9998003,
115.9997932,119.9997862,123.9997791,
127.9997721,131.999765,135.999758,
139.9997509,143.9997438,147.9997368,
151.9997297,155.9997227,159.9997156,
163.9997085,167.9997015,171.9996944,
175.9996874,179.9996803];
var gridLats=[];
var numLats = gridLatsPos.length;
for (var index=0; index < numLats; index++){
  var lat = gridLatsPos[index];
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
var numLngs = gridLngsPos.length;
for (var index=0; index < numLngs; index++){
  var lng = gridLngsPos[index];
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

var paperColors = ["#004C73","#0084A8","#89CD66","#D1FF73","#FFFF73","#FFAA00","#FF5500","#A80000"];
var paperColorScheme = false;
function updateColorbar() {
    nbins = 104;
    if (paperColorScheme) {
        $('#colorbar').html('');
        var gradient = $("<div>").css({display:"flex", "flex-direction":"row",height:"100%"});
        for (var i = 0; i < 8; i ++) {
            for (var j = 0; j < 13; j++) {
                gradient.append($("<div>").css({float:"left",
                "background-color":paperColors[i],flex:1}));
            }
        }
    } else {
        var increment = 1.0/nbins;
        var sc = hexToRgb('#'+$('#startColor').val());
        var ec = hexToRgb('#'+$('#endColor').val());
        $('#colorbar').html('');
        var gradient = $("<div>").css({display:"flex", "flex-direction":"row",height:"100%"});
        for (var i = 0; i <= 1.0; i += increment){
            gradient.append($("<div>").css({float:"left",
            "background-color":colorCode(i,sc.r,ec.r,sc.g,ec.g,sc.b,ec.b),flex:1}));
        }
    }
    $("#colorbar").append(gradient);
    $("#colorbar").css("width","300px").css("height","30px");
}

function grayscale() {
  $('#startColor').val("FFFFFF");
  $('#startColor').css('background-color', '#FFFFFF');
  $('#endColor').val("000000");
  $('#endColor').css('background-color', '#000000');
  paperColorScheme = false;
  updateColorbar();
  updateShapeColors();
}
function heatmap() {
  $('#startColor').val("FFFF00");
  $('#startColor').css('background-color', '#FFFF00');
  $('#endColor').val("FF0000");
  $('#endColor').css('background-color', '#FF0000');
  paperColorScheme = false;
  updateColorbar();
  updateShapeColors();
}
function redgreen() {
  $('#startColor').val("FF0000");
  $('#startColor').css('background-color', '#FF0000');
  $('#endColor').val("00FF00");
  $('#endColor').css('background-color', '#00FF00');
  paperColorScheme = false;
  updateColorbar();
  updateShapeColors();
}
function divergent() {
  $('#startColor').val("004C73");
  $('#startColor').css('background-color', '#004C73');
  $('#endColor').val("A80000");
  $('#endColor').css('background-color', '#A80000');
  paperColorScheme = true;
  updateColorbar();
  updateShapeColors();
}
/*
Code for plotting the rectangles
*/
var shapeGridIds = [];
var shapesPlotted = [];
var diversityMeasures = [];
var divMeasures_quant = [];
var nseqs = [];
var nsps = [];
var nbps = [];
var nsegs = [];
var infoHtmls = [];

function attachListenerWithSeqMsg(rect, gridId, nsps, nseq, msg, diversity, nseg, nbp) {
  rect.addListener('click', function(msevent) {
    updateInfoDiv(gridId, nsps, nseq, msg, diversity, nseg, nbp);
  });
}

function updateInfoDiv(gridId, nsp, nseq, infoString, diversity, nseg, nbp) {
  htmlstr = "<h3>Information on chosen location</h3>";
  htmlstr += "<h4>Sampling grid location</h4>";
  var latIndex = Math.floor(gridId/90);
  var lngIndex = gridId%90 - 1;
  var latLetter1 = (gridLatsPos[latIndex] > 0) ? "N": "S";
  var latLetter2 = (gridLatsPos[latIndex+1] > 0) ? "N": "S";
  var lngLetter1 = (gridLngsPos[lngIndex] > 0) ? "E": "W";
  var lngLetter2 = (gridLngsPos[lngIndex+1] > 0) ? "E": "W";
  htmlstr += "<b>Latitude: </b>"+Math.abs(Math.round(gridLatsPos[latIndex]*100)/100)+"&nbsp;"+latLetter1;
  htmlstr += "&nbsp;&ndash;&nbsp;"+Math.abs(Math.round(gridLatsPos[latIndex+1]*100)/100)+"&nbsp;"+latLetter2+"<br/>";
  htmlstr += "<b>Longitude: </b>"+Math.abs(Math.round(gridLngsPos[lngIndex]*100)/100)+"&nbsp;"+lngLetter1;
  htmlstr += "&nbsp;&ndash;&nbsp;"+Math.abs(Math.round(gridLngsPos[lngIndex+1]*100)/100)+"&nbsp;"+lngLetter2+"<br/>";
  htmlstr += "<b># species: "+nsp+"</b>&nbsp;&nbsp;&nbsp;";
  htmlstr += "<b># sequences: "+nseq+"</b></br>";
  htmlstr += "<b># segregating sites: "+nseg+"</b>&nbsp;&nbsp;&nbsp;";
  htmlstr += "<b># basepairs: "+nbp+"</b></br>";
  htmlstr += "<b>Diversity: "+diversity+"</b>";
  $('#infoDiv').html(htmlstr);
  htmlstr = "<h4><a href='http://www.ncbi.nlm.nih.gov/genbank/' target='_blank'>GenBank</a> information</h4>";
  htmlstr += "<table class='gentable'><thead><tr><th width='50%'>Species</th>"
  htmlstr += "<th width='25%'>Location</th>"
  htmlstr += "<th width='25%'>ID</th></tr></thead>"
  htmlstr += "<tbody>"
  htmlstr += infoString;
  htmlstr += "</tbody></table>"
//  htmlstr += "<a href=" " target='_blank'></a>"
  $('#genbankDiv').html(htmlstr);
}

function showRectangles() {
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
  var plotMeasures = diversityMeasures;
  var maxMeasure = Math.max.apply(Math, plotMeasures);
  var minMeasure = Math.min.apply(Math, plotMeasures);
  if ($('#quantNorm').is(':checked')) {
    plotMeasures = divMeasures_quant;
    minMeasure = 0;
    maxMeasure = 100;
  }
  $('#minmeasure').html(minMeasure);
  $('#maxmeasure').html(maxMeasure);
  if (paperColorScheme) {
    if (maxMeasure == minMeasure) {
      var tempColor = paperColors[4];
      for (i=0; i < shapeGridIds.length; i++) {
        colors.push(tempColor);
      }
    } else {
      for (i=0; i < shapeGridIds.length; i++) {
        var tempColor = Math.floor(8*(plotMeasures[i] - minMeasure)/maxMeasure);
        if (tempColor > 7) {
          tempColor = 7;
        }
        colors.push(paperColors[tempColor]);
      }
    }
  } else {
    if (maxMeasure == minMeasure) {
      var tempColor = colorCode(0.5,sc.r,ec.r,sc.g,ec.g,sc.b,ec.b);
      for (i=0; i < shapeGridIds.length; i++) {
        colors.push(tempColor);
      }
    } else {
      for (i=0; i < shapeGridIds.length; i++) {
        colors.push(colorCode((plotMeasures[i] - minMeasure)/maxMeasure,
                              sc.r,ec.r,sc.g,ec.g,sc.b,ec.b));
      }
    }
  }
  for (i=0; i < shapeGridIds.length; i++) {
    var latIndex = Math.floor(shapeGridIds[i]/90.0);
    var lngIndex = (shapeGridIds[i]%90) - 1;
    var curRect = new google.maps.Rectangle( {
      map: map,
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(gridLatsPos[latIndex], gridLngsPos[lngIndex]),
        new google.maps.LatLng(gridLatsPos[latIndex+1], gridLngsPos[lngIndex+1])
      ),
      fillColor: colors[i],
      fillOpacity: opac,
      strokeWeight: 1,
      strokeColor: "#FFFFFF",
      strokeOpacity: opac,
      clickable: true
    });
    attachListenerWithSeqMsg(curRect, shapeGridIds[i], nsps[i], nseqs[i], infoHtmls[i], diversityMeasures[i], nsegs[i], nbps[i]);
    shapesPlotted.push(curRect);
  }
}

function showCircles() {
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
  var plotMeasures = diversityMeasures;
  var maxMeasure = Math.max.apply(Math, plotMeasures);
  var minMeasure = Math.min.apply(Math, plotMeasures);
  if ($('#quantNorm').is(':checked')) {
    plotMeasures = divMeasures_quant;
    minMeasure = 0;
    maxMeasure = 100;
  }
  $('#minmeasure').html(minMeasure);
  $('#maxmeasure').html(maxMeasure);
  if (paperColorScheme) {
    if (maxMeasure == minMeasure) {
      var tempColor = paperColors[4];
      for (i=0; i < shapeGridIds.length; i++) {
        colors.push(tempColor);
      }
    } else {
      for (i=0; i < shapeGridIds.length; i++) {
        var tempColor = Math.floor(8*(plotMeasures[i] - minMeasure)/maxMeasure);
        if (tempColor > 7) {
          tempColor = 7;
        }
        colors.push(paperColors[tempColor]);
      }
    }
  } else {
    if (maxMeasure == minMeasure) {
      var tempColor = colorCode(0.5,sc.r,ec.r,sc.g,ec.g,sc.b,ec.b);
      for (i=0; i < shapeGridIds.length; i++) {
        colors.push(tempColor);
      }
    } else {
      for (i=0; i < shapeGridIds.length; i++) {
        colors.push(colorCode((plotMeasures[i] - minMeasure)/maxMeasure,
                              sc.r,ec.r,sc.g,ec.g,sc.b,ec.b));
      }
    }
  }
  var mxNseqs = Math.max.apply(Math, nseqs);
  var curSeqs = [];
  for (i=0; i < nseqs.length; i++) {
    curSeqs.push(Math.log(nseqs[i]+1)/Math.log(mxNseqs+1));
  }
  for (i=0; i < shapeGridIds.length; i++) {
    var latIndex = Math.floor(shapeGridIds[i]/90);
    var lngIndex = (shapeGridIds[i]%90) - 1;
    var midlat = (gridLatsPos[latIndex] + gridLatsPos[latIndex+1])/2;
    var midlng = (gridLngsPos[lngIndex] + gridLngsPos[lngIndex+1])/2;
    var curCirc = new google.maps.Circle( {
      map: map,
      center: new google.maps.LatLng(midlat, midlng),
      // Length of 1 degree of longitude at equator is 111321 m
      radius: curSeqs[i]*2*Math.cos(Math.max(Math.abs(gridLatsPos[latIndex]),Math.abs(gridLatsPos[latIndex+1]))
                                    *Math.PI/180)*111321,
      fillColor: colors[i],
      fillOpacity: opac,
      strokeWeight: 1,
      strokeColor: '#FFFFFF',
      strokeOpacity: opac,
      clickable: true
    });
    attachListenerWithSeqMsg(curCirc, shapeGridIds[i], nsps[i], nseqs[i], infoHtmls[i], diversityMeasures[i], nsegs[i], nbps[i]);
    shapesPlotted.push(curCirc);
  }
}

function switchShapes() {
  var lats = [];
  var lngs = [];
  if ($('#rectSymbol').is(":checked")) {
    showRectangles();
  } else {
    showCircles();
  }
}

/*
Vars for plotting range
*/
var rangeGridIds = [];
var rangeBoxesPlotted = [];

function clearRange() {
  for (i=0; i < rangeBoxesPlotted.length; i++) {
    rangeBoxesPlotted[i].setMap(null);
  }
  rangeBoxesPlotted.length = 0;
}

function drawRange() {
  clearRange();
  if (rangeGridIds.length == 0) {
    return 0;
  }
  for (i=0; i < rangeGridIds.length; i++) {
      var latIndex = Math.floor(rangeGridIds[i]/90.0);
      var lngIndex = (rangeGridIds[i]%90) - 1;
      var bl = {lat:gridLatsPos[latIndex], lng:gridLngsPos[lngIndex]};
      var br = {lat:gridLatsPos[latIndex], lng:gridLngsPos[lngIndex+1]};
      var tr = {lat:gridLatsPos[latIndex+1], lng:gridLngsPos[lngIndex+1]};
      var tl = {lat:gridLatsPos[latIndex+1], lng:gridLngsPos[lngIndex]};
      var curRangePath = [ bl, br, tr, tl, bl ];
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

function colorMap(spType, species, gene) {
  $.ajax({
    url: "/remap",
    type: "post",
    datatype:"json",
    data: {"spType": spType, "species": species, "gene":gene},
    success: function(response){
      // Execute our callback function
      updateMap(response);
    }
  });
}

function updateMap(response) {
    var obj = $.parseJSON(response);
    shapeGridIds = obj[0];
    diversityMeasures = obj[1];
    nseqs = obj[2];
    infoHtmls = obj[3];
    nsps = obj[4];
    nsegs = obj[5];
    nbps = obj[6];
    rangeGridIds = obj[7];
    divMeasures_quant = obj[8];
    if ($('#rectSymbol').is(":checked")) {
      showRectangles();
    } else {
      showCircles();
    }
    if ($('#showRange').is(":checked")) {
      drawRange();
    }
}

function updateShapeOpacity() {
  var opac = $('#opacity').val()/100.0;
  for (i=0; i < shapesPlotted.length; i++) {
    shapesPlotted[i].setOptions({ fillOpacity: opac, strokeOpacity: opac });
  }
}

function updateShapeColors() {
  var sc = hexToRgb('#'+$('#startColor').val());
  var ec = hexToRgb('#'+$('#endColor').val());
  var colors = [];
  var plotMeasures = diversityMeasures;
  var maxMeasure = Math.max.apply(Math, plotMeasures);
  var minMeasure = Math.min.apply(Math, plotMeasures);
  if ($('#quantNorm').is(':checked')) {
    plotMeasures = divMeasures_quant;
    minMeasure = 0;
    maxMeasure = 100;
  }
  $('#minmeasure').html(minMeasure);
  $('#maxmeasure').html(maxMeasure);
  if (paperColorScheme) {
    if (maxMeasure == minMeasure) {
      var tempColor = paperColors[4];
      for (i=0; i < diversityMeasures.length; i++) {
        colors.push(tempColor);
      }
    } else {
      for (i=0; i < diversityMeasures.length; i++) {
        var tempColor = Math.floor(8*(plotMeasures[i] - minMeasure)/maxMeasure);
        if (tempColor > 7) {
            tempColor = 7;
        }
        colors.push(paperColors[tempColor]);
      }
    }
  } else {
    if (maxMeasure == minMeasure) {
      var tempColor = colorCode(0.5,sc.r,ec.r,sc.g,ec.g,sc.b,ec.b);
      for (i=0; i < diversityMeasures.length; i++) {
        colors.push(tempColor);
      }
    } else {
      for (i=0; i < diversityMeasures.length; i++) {
        colors.push(colorCode((plotMeasures[i] - minMeasure)/maxMeasure,
                              sc.r,ec.r,sc.g,ec.g,sc.b,ec.b));
      }
    }
  }
  for (i=0; i < shapesPlotted.length; i++) {
    shapesPlotted[i].setOptions({ fillColor: colors[i] });
  }
}

$(document).ready(function() {
  $('#refresher').click(function() {
    var spType = "none";
    if ($('#mammals_cytb').is(":visible")) {
      spType = "mammals";
    } else if ($('#mammals_coi').is(":visible")) {
      spType = "mammals";
    } else if ($('#amphibians').is(":visible")) {
      spType = "amphibians";
    }

    $('#infoDiv').html("");
    $('#genbankDiv').html("");
    var strDis = "";
    var species;
    var gene = $("#geneRadio input[type='radio']:checked");
    if (gene.length > 0) {
        gene = gene.val();
    } else {
        gene = "cytb";
    }
    if (spType == "mammals") {
      if (gene == "cytb") {
          species = $('#mammalNames_cytb').val();
      } else {
          species = $('#mammalNames_coi').val();
      }
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
    colorMap(spType, species, gene);
  });
  $('#resetter').click(function(){
    $('#mammalNames_cytb').val('');
    $('#mammalNames_coi').val('');
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
    shapeGridIds.length = 0;
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
  $('#quantNorm').change(function(){
    updateShapeColors();
  });
  $('#showRange').change(function(){
    if ($(this).is(":checked")) {
      drawRange();
    } else {
      clearRange();
    }
  });
  $('#startColor').change(function(){
    paperColorScheme = false;
    updateColorbar();
    updateShapeColors();
  });
  $('#endColor').change(function(){
    paperColorScheme = false;
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
      $('#mammals_cytb').show();
      $('#mammalNames_cytb').change();
      $('#mammals_coi').hide();
      $('#amphibians').hide();
      $('#coi').removeAttr("disabled");
      $('#coiText').css('color', '#555753');
    } else {
      $('#mammals_cytb').hide();
      $('#mammals_co1').hide();
      $('#amphibians').show();
      $('#amphibianNames').change();
      $('#coi').attr("disabled", true);
      $('#coiText').css('color', '#B5B7B3');
      $('input[name=gene][value=cytb]').trigger("click");
    }
  });
  $('input[name=gene]').on('change', function() {
    var gene = $(this).val();
    var spType = "none";
    if ($('#amphibians').is(":visible")) {
      spType = "amphibians";
    } else {
      spType = "mammals";
    }
    if (gene == "coi") {
      $('#amphibians').hide();
      $('#mammals_cytb').hide();
      $('#mammals_coi').show();
      $('#mammalNames_coi').change();
    } else {
      if (spType == "mammals") {
        $('#amphibians').hide();
        $('#mammals_coi').hide();
        $('#mammals_cytb').show();
        $('#mammalNames_cytb').change();
      } else {
        $('#mammals_cytb').hide();
        $('#mammals_coi').hide();
        $('#amphibians').show();
        $('#amphibianNames').change();
      }
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
