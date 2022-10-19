$(document).ready(function() {

    $("input.slider").on("input change", function(event) {
        var pos = event.target.value;

        $("div.before").css({width: pos + "px"});
        $("div.slider-button").css({left: "calc(" + pos + "% - 18px)"});
    });

});