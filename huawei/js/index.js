$(document).ready(function () {
    $("#GroupWebsite_onclick").click(function () {
        $("#GroupWebsite").slideToggle("fast");
        $("#GroupWebsite_onclick i").toggleClass("icon-arrow-up-s-line");
    });
    $("#language_onclick").click(function () {
        $("#language").slideToggle(300);
        $("#language_onclick #language_down").toggleClass("icon-arrow-up-s-line");
    });
    $("#phone_click,#phone").hover(function () {
        $("#service").hide();
        $("#phone").fadeToggle("slow");
    });
    $("#search_click,#service").hover(function () {
        $("#phone").hide();
        $("#service").fadeToggle("slow");
        $("#enterprise_click").click(function () {
            $("#Operator,#Yun").hide();
            $("#Operator_click,#Yun_click").css("border-bottom","");
            $("#enterprise").show();
            $("#enterprise_click").css("border-bottom","5px solid #f66f6a");
        });
        $("#Operator_click").click(function () {
            $("#enterprise,#Yun").hide();
            $("#Operator").show();
            $("#Operator_click").css("border-bottom","5px solid #f66f6a");
            $("#enterprise_click,#Yun_click").css("border-bottom","");
        });
        $("#Yun_click").click(function () {
            $("#Operator,#enterprise").hide();
            $("#Operator_click,#enterprise_click").css("border-bottom","");
            $("#Yun").show();
            $("#Yun_click").css("border-bottom","5px solid #f66f6a");
        });
    });

});