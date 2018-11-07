var myCount = 0;
var headerImages = ['/images/Header1.jpg', '/images/Header2.jpg',
                    '/images/Header3.jpg', '/images/Header4.jpg',
                    '/images/Header5.jpg', '/images/Header6.jpg' ];

function switchBackground(index) {
  furl = "url(";
  furl = furl.concat(headerImages[index], ")");
  console.log(furl);
  $('#SearchBar').css("background-image", furl);
  return(true);

}