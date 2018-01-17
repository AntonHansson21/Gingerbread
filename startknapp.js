$(document).ready(function () {
    $("#startbutton").click(function() {
        $('svg').css("animation-duration", "10s")
        $('svg').css("animation-play-state", "running")
        $('#startbutton').css("display", "none");
    });
})