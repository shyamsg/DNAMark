function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function roundToTwo(x) {
    return(Math.round(x*100)/100);
}

function updateTableHTML() {
  htmlstr = "<h3>Table of selected samples</h3>";
  htmlstr += "<table style=\"width:100%\">";
  htmlstr += "<tr><th>DNAmark ID</th><th>Species</th><th>Country</th><th>Lat, Lng</th>";
  htmlstr += "<th>Genbank</th></tr>";
  const lats = overlay.returnArrays[0].map(parseFloat).map(roundToTwo);
  const lngs = overlay.returnArrays[1].map(parseFloat).map(roundToTwo);
  const kngs = overlay.returnArrays[2];
  const dmds = overlay.returnArrays[3];
  const cnts = overlay.returnArrays[4];
  const spcs = overlay.returnArrays[5];
  const gens = overlay.returnArrays[6];
  const fsts = overlay.returnArrays[7];
  var i;
  for (i = 0; i < lats.length; i++) {
      htmlstr += "<tr><td><a href=\""+fsts[i]+"\">"+dmds[i]+"</a></td>";
      htmlstr += "<td>"+spcs[i]+"</td><td>"+cnts[i]+"</td><td><a href=\"https://maps.google.com?q="+lats[i]+","+lngs[i]+"\">"+lats[i]+", "+lngs[i]+"</td>";
      if (gens[i] != "#N/A") {
	  htmlstr += "<td><a href=\"https://www.ncbi.nlm.nih.gov/nuccore/"+gens[i]+"\">"+gens[i]+"</a></td>";
      } else {
	  htmlstr += "<td>Not available</td>";
      }
  }
  htmlstr += "</table>"
  $('#tablediv').html(htmlstr);
//  openTab(evt, 'tablediv');
}
