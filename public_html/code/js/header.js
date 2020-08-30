var myCount = 0;
var headerImages = ['/images/Header1.jpg', '/images/Header2.jpg',
                    '/images/Header3.jpg', '/images/Header4.jpg',
                    '/images/Header5.jpg', '/images/Header6.jpg',
                    '/images/Header7.jpg'];

function switchBackground(index) {
  furl = "url(";
  furl = furl.concat(headerImages[index], ")");
  console.log(furl);
  $('#SearchBar').css("background-image", furl);
  return(true);

}


function initHeader() {
    var speciesNameList = Object.keys(speciesNamesForInput);
    $( "#SampleSearch" ).autocomplete({
        source: speciesNameList,
        select: function (event, ui) {
            document.getElementById('kingdom').selectedIndex = 0;
            prettyDropdownList[0].refresh();
            updateDropdownsBelow(1, kingdoms);
            var opts = prettyDropdownList[6][0].options;
            var numOpts = opts.length;
            var chosenSpecies = speciesNamesForInput[ui.item.label];
            for (var i = 1; i < numOpts; i++) {
                if (opts[i].value === chosenSpecies) {
                    prettyDropdownList[6][0].selectedIndex = i;
                    dropdownUpdated('species');
                    break;
                }
            }
            $('#SampleSearch').val(ui.item.label);
            return false;
        }
    });
}

