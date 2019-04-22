$(document).ready(function () {
    $("#GroupWebsite_onclick").click(function () {
        $("#GroupWebsite").slideToggle("fast");
        $("#GroupWebsite_onclick i").toggleClass("icon-arrow-up-s-line");
    });
    $("#language_onclick").click(function () {
        $("#language").slideToggle(300);
        $("#language_onclick #language_down").toggleClass("icon-arrow-up-s-line");
    });
    // $("#phone_click,#phone").hover(function () {
    //     $("#phone").fadeToggle("slow");
    // })
});