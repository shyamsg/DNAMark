$(document).ready(function(){
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
});
