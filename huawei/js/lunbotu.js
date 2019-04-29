
    var carouselS = $('.Exhibition_rotation .carousel'),
        arrowLeftS = $('.Exhibition_rotation a.arrow-left'),
        arrowRightS = $('.Exhibition_rotation a.arrow-right'),
        indicatorsS = $('.Exhibition_rotation li.indicator'),
        carouselWrapS = $('.Exhibition_rotation .carousel-wrap');

    var numS = 4, carouselWidthS = 1128, countS = 1, timerS = null;

//设置左右箭头的点击事件

    arrowLeftS.click(function (e) {

        e.preventDefault();
        moveS(true);
    });
    arrowRightS.click(function (e) {
        e.preventDefault();
        moveS();
    });

// 指示器
    indicatorsS.click(function () {
        countS = $(this).index();
        setIndicatorStyleS();
        carouselS.finish().animate({left: -carouselWidthS * countS}, 500);
    });

// 设置指示器样式
    function setIndicatorStyleS() {
        indicatorsS.eq(countS - 1).addClass('active').siblings().removeClass('active');
    }

    intervalS();
// 鼠标移入  暂停 自动轮播
    carouselWrapS
        .mouseover(function () {
            clearInterval(timerS);
        })
        .mouseout(intervalS);   // 鼠标移开 记录轮播

// 动画 主函数
    function moveS(flag) {
        //向左滑动
        if (flag !== true) {
            countS++;
            console.log(countS);
            var l = -carouselWidthS * countS;
            console.log(l);
            if (countS === 3) {
                carouselS.finish().animate({
                    left: l
                }, 0, function () {
                    countS = 1;
                    setIndicatorStyleS();
                    $(this).css('left', -carouselWidthS * countS);
                })
            } else if(countS === 2){
                setIndicatorStyleS();
                carouselS.finish().animate({
                    left: l
                }, 0);
            }
        } else {//向右滑动
            countS--;
            console.log(countS);
            var l = -carouselWidthS * countS;
            console.log(l);
            if (countS === 0) {
                carouselS.finish().animate({
                    left: l
                }, 0, function () {
                    countS = numS - 1;
                    setIndicatorStyleS();
                    $(this).css('left', -carouselWidthS * countS);
                })
            } else {
                setIndicatorStyleS();
                carouselS.finish().animate({
                    left: l
                }, 0);
            }
        }
    }

// 自动轮播
    function intervalS() {
        timerS = setInterval(moveS, 2000)
    }


