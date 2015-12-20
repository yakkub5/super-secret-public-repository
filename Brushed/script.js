/*$(document).ready(function() {
    var space = $(window).height();
    $("#slider").height(space);
    $('#h1').css({'margin-top':(space/2-40)});
});*/

window.onscroll = changePos;

function changePos() {
    var space = $(window).height();
    space = space - 1;
    if (window.pageYOffset > space) {
        $("#header").addClass("navbar-fixed-top");
    } else {
        $("#header").removeClass("navbar-fixed-top");
    }
}




/*myfunction = function () {
            var space = $(window).height();
            var diff = space - HEIGHT;
            var margin = (diff > 0) ? (space - HEIGHT)/2 : 0;
            $('#slider').css({'margin-top': margin});
        };*/