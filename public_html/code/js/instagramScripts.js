var userFeed = new Instafeed({
    get: 'user',
    userId: '6081033671',
    accessToken: '6081033671.1677ed0.faec4f6433e64a39a919346e288ba2db',
    resolution: 'thumbnail',
    target: 'headerinsta',
    links: 'yes',
    limit: 5
});
userFeed.run();
var myVar = setInterval(myTimer, 5000);
function myTimer() {
    if (userFeed.hasNext()) {
        $('#headerinsta').html("");
        userFeed.next();
    } else {
        $('#headerinsta').html("");
        userFeed.run();
    }
}
