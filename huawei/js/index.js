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
            $("#Operator_click,#Yun_click").css("border-bottom", "");
            $("#enterprise").show();
            $("#enterprise_click").css("border-bottom", "5px solid #f66f6a");
        });
        $("#Operator_click").click(function () {
            $("#enterprise,#Yun").hide();
            $("#Operator").show();
            $("#Operator_click").css("border-bottom", "5px solid #f66f6a");
            $("#enterprise_click,#Yun_click").css("border-bottom", "");
        });
        $("#Yun_click").click(function () {
            $("#Operator,#enterprise").hide();
            $("#Operator_click,#enterprise_click").css("border-bottom", "");
            $("#Yun").show();
            $("#Yun_click").css("border-bottom", "5px solid #f66f6a");
        });
    });

});
var carousel = $('ul.carousel'),
    arrowLeft = $('a.arrow-left'),
    arrowRight = $('a.arrow-right'),
    indicators = $('li.indicator'),
    carouselWrap = $('div.carousel-wrap');

var num = 3, carouselWidth = 1366, count = 1, timer = null;

//设置左右箭头的点击事件

arrowLeft.click(function (e) {

    e.preventDefault();
    move(true)
});
arrowRight.click(function (e) {
    e.preventDefault();
    move()
});

// 指示器
indicators.click(function () {
    count = $(this).index();
    setIndicatorStyle();
    carousel.finish().animate({left: -carouselWidth * count}, 500)
});

// 设置指示器样式
function setIndicatorStyle() {
    indicators.eq(count - 1).addClass('active').siblings().removeClass('active')
}

interval();
// 鼠标移入  暂停 自动轮播
carouselWrap
    .mouseover(function () {
        clearInterval(timer)
    })
    .mouseout(interval);   // 鼠标移开 记录轮播

// 动画 主函数
function move(flag) {
    if (flag !== true) {
        count++;
        console.log(count)
        let l = -carouselWidth * count;
        if (count === num - 1) {
            carousel.finish().animate({
                left: l
            }, 500, function () {
                count = 1;
                setIndicatorStyle();
                $(this).css('left', -carouselWidth * count)
            })
        } else {
            setIndicatorStyle();
            carousel.finish().animate({
                left: l
            }, 500)
        }
    } else {
        count--;
        let l = -carouselWidth * count;
        if (count === 0) {
            carousel.finish().animate({
                left: l
            }, 500, function () {
                count = num - 2;
                setIndicatorStyle();
                $(this).css('left', -carouselWidth * count)
            })
        } else {
            setIndicatorStyle();
            carousel.finish().animate({
                left: l
            }, 500)
        }
    }
}

// 自动轮播
function interval() {
    timer = setInterval(move, 2000)
}

