var headerTimer = setInterval(headerPictureScroll, 1000);
var myCount = 0;
var headerImages = ['/images/Header1.jpg', '/images/Header2.jpg',
                    '/images/Header3.jpg', '/images/Header4.jpg',
                    '/images/Header5.jpg', '/images/Header6.jpg' ];
function headerPictureScroll() {
    myCount = (myCount+1)%headerImages.length;
    $('#SearchBar').css("background-image", headerImages[myCount]);;
}
