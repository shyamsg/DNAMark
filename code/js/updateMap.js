var req;
// helper function to get a XMLHTTPRequest
function newXMLHttpRequest() {
   try { return new XMLHttpRequest(); } catch(e) {}
   try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {}
   try { return new ActiveXObject("Msxml2.XMLHTTP");    } catch (e) {}
   alert("XMLHttpRequest not supported");
   return null;
}
function colorMap(){
  var
  $.ajax({
      url: "/code/python/getGridValues.py/getMapBoxes",
      type: "POST",
      async: true,
      data: ,
      success: function(response){
          updateMsgOnBrowser(response);
      }
  });
}
// This is the callback function that called from the server with the XML data
function updateMsgOnBrowser(response) {
  if (req.readyState == 4 && req.status == 200) {
    $('#temporary').html(response);
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
    var strDis = "";
    var species;
    if (spType == "mammals") {
      species = $('#mammalNames').val();
    } else if (spType == "amphibians") {
      species = $('#amphibianNames').val();
    }
    if (species == null) {
      $('#temporary').html("hehe 000");
      return 0;
    }
    for (i=0; i < species.length; i++) {
      strDis += species[i];
      strDis += " ";
    }
    $('#chosenSpecies').val(strDis);
    colorMap();
    // $('#temporary').html(strDis);
  });
});

$(document).ready(function() {
  $('#resetter').click(function(){
    $('#mammalNames').val('');
    $('#amphibianNames').val('');
    $('#chosenSpecies').val('');
  });
});
