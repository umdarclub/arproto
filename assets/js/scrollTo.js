$( document ).ready( function() {
  $(".one").click(function() { /*select class that triggers scroll*/
    $('html, body').animate({
        scrollTop: $(".two").offset().top /*class you want to scroll to!!*/
    }, 1000); /*animation time length*/
});

$(".two").click(function() {
    $('html, body').animate({
        scrollTop: $(".three").offset().top
    }, 1000);
});


$(".three").click(function() {
    $('html, body').animate({
        scrollTop: $(".four").offset().top
    }, 1000);
});

$(".four").click(function() {
    $('html, body').animate({
        scrollTop: $(".one").offset().top
    }, 700);
});
});
