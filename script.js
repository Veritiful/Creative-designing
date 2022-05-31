$(document).ready(function(){
    $(".down-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });

    $(".show").click(function(){
    $(".hidden").toggle(1000);
    });
});
