/*
	@params flakeChar:
			minSize:
			maxSize:
			newOn:
			flakeColor:
*/

;(function(w,d,u,$){
	$.fn.showPic=function( options ){
		var defaults={
			flakeChar:"&#10047",
			minSize:10,
			maxSize:100,
			flakeColor:"white"
		};
		$.extend( defaults,options );

		//生成一个节点，用于存这个图标
		var $flake=$("<div></div>").css({"position":"absolute","top":"-80"});
		var documentHeight=$(d).height();
		var documentWidth=$(d).width();

		$flake.html(defaults.flakeChar);
		//定时器操作
		//启动定时器
		setInterval(function(){
			//先计算雪花开始的位置,大小
			var startPositionLeft=Math.random()*documentWidth-100;
			var startOpacity=Math.random()+0.5;
			var sizeFlake=defaults.minSize+Math.random()*defaults.maxSize;
			var endPositionLeft=startPositionLeft+Math.random()*200-100;
			var endPositionTop=documentHeight-defaults.maxSize-20;
			var durationFall=documentHeight*10+Math.random()*5000;
			//再克隆
			$flake.clone()
				  .appendTo("body")
				  .css({
				  	left:startPositionLeft,
				  	opacity:startOpacity,
				  	'font-size':sizeFlake,
				  	color:defaults.flakeColor
				  })
				  .animate({
				  	top:endPositionTop,
				  	left:endPositionLeft,
				  	opacity:0.2
				  },durationFall,'linear',function(){
				  	$(this).remove();
				  })
			//把复制的出来的雪花设置随机的颜色，大小
			//用动画设置雪花的动画，坐标 透明度，大小  ？可以不用复制，因为animate的属性有个叫无限次的			
		},100)

	}
})( window,document,undefined,$)