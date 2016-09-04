/**
 * jquery.nagareboshi
 *
 * @params flakeChar - 漂浮图标样式, 默认是雪花, 其它漂亮符号参考： ❥ღ❣♔♕♖♚♛♜☀☁☂☃☼☽☾♨❄❅❆★☆✦✪✫✿
 * @params minSize - 默认size最小是10
 * @params maxSize - 默认size最大是20
 * @params newOn - 出现新图标的频率，默认是500
 * @params flakeColors - 默认的图标颜色 , 默认是#FFFFFF
 * @params durationMillis - 停止加载图标的时间，默认是一直加载
 * @example $.fn.nagareboshi({ maxSize: 200, newOn: 1000 });
 */
; (function ($, window, document, undefined) {

    $.fn.nagareboshi = function (options) {
        //这是定义樱花的变量$flake
        var $flake = $('<div class="flake"></div>').css({ 'position': 'absolute', 'top': '-50px' }),
            //获取整个屏幕的宽和高
            documentHeight = $(document).height(),
            documentWidth = $(document).width(),
            //给flake樱花 设置默认属性
            defaults = {
                flakeChar: "&#10052;",
                minSize: 10,
                maxSize: 20,
                newOn: 100,  //每间隔时间出现
                flakeColor: ["#ffffff"],
                durationMillis: null       //停止加载图标的时间
            };

        // 当给extend方法传递一个以上的参数时，它会将所有参数对象合并到第一个里。同时，如果对象中有同名属性时，合并的时候后面的会覆盖前面的。
        // 所以如果传递进来的options参数有的值，将会覆盖defaults对象里对应的值
        //用extend()方法来合并参数对象属性
        $.extend(defaults, options);  
        //给flake div放这个符号
        $flake.html(defaults.flakeChar);
        //静态的做好后，设置定时器
        var interval = setInterval(function () {
            //樱花开始出现的距左的位置  默认距上的距离为本身位置  
            var startPositionLeft = Math.random() * documentWidth - 100,
                //开始的透明度
                startOpacity = 0.5 + Math.random(),
                //樱花大小  在minSize--maxSize之类
                sizeFlake = defaults.minSize + Math.random() * defaults.maxSize,
                //最后出来距上的位置  总高度- 本身最小的大小-距底部的固定位置
                endPositionTop = documentHeight - defaults.maxSize - 40,
                //？？
                endPositionLeft = startPositionLeft - 100 + Math.random() * 200,
                //？？ 持续多长时间掉落
                durationFall = documentHeight * 10 + Math.random() * 5000;
            //复制樱花
            $flake
                .clone()
                .appendTo('body')
                .css(
                    {
                        left: startPositionLeft,
                        opacity: startOpacity,
                        'font-size': sizeFlake,
                        //随机颜色
                        color: defaults.flakeColor[Math.floor((Math.random() * defaults.flakeColor.length))]
                    }
                )
                .animate(
                    {
                        top: endPositionTop,
                        left: endPositionLeft,
                        opacity: 0.2
                    },
                    durationFall,
                    'linear',
                    function () {
                        $(this).remove()
                    }
                );
        }, defaults.newOn);
        if (defaults.durationMillis) {   //如果durationMillis这个有值
            setTimeout(function () {
                clearInterval(interval);
            }, defaults.durationMillis);   //那就过durationMillis这个时间后清除这个定时器
        }
    };

})(jQuery, window, document);