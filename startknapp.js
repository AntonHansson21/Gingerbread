$(document).ready(function () {
    $("#startbutton").click(function() {
        $('svg').css("animation-duration", "10s")
        $('svg').css("animation-play-state", "running")
        $('#startbutton').css("display", "none");

    });    $("#medium").click(function() {
        $('svg').css("animation-duration", "8s")
        $('svg').css("animation-play-state", "running")
        $('#medium').css("display", "none");

    });    $("#hard").click(function() {
        $('svg').css("animation-duration", "7s")
        $('svg').css("animation-play-state", "running")
        $('#hard').css("display", "none");
    });
})