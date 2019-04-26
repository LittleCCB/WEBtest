 var outer_All = document.getElementById("outer-All");
        var scrollFunc = function (event) {
            event = event || window.event;
            if (event.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件
                if (event.wheelDelta > 0) { //当滑轮向上滚动时,内容出现
                    //上移是固定其位置不变
                    outer_All.style.top = 28+"px";
                    //当在页面中移动时使其保持在顶部位置
                    if (28<document.documentElement.scrollTop || document.body.scrollTop) {
                        outer_All.style.top = 0;
                    }
                    //向上移动时内容出现
                    $(document).ready(function () {
                        $("#outer-All").slideDown(500);
                    });

                }
                if (event.wheelDelta < 0) { //当滑轮向下滚动时
                    //首先实现导航条上移
                    if (0<=document.documentElement.scrollTop || document.body.scrollTop <=29) {
                        outer_All.style.top = 0;
                    }
                    //实现导航条消失
                    $(document).ready(function () {
                        $("#outer-All").slideUp(500);
                    })
                }
            }
        };
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法 //ie 谷歌
    window.onmousewheel = document.onmousewheel = scrollFunc;
