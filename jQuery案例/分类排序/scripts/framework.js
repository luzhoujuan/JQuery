//因为该例题，需要用的选择器较多，所以不适合用插件
//如果要做成插件，则需要把html代码动态生成

$(document).ready(function(){
	$("#container #filter li a").click(function(){
			//var a=$(this).html();
			$(this).parent().parent().find("li").removeClass("current");
			$(this).parent().addClass("current");
			var filterclass=$(this).html().toLowerCase().replace(" ","-");

			if( filterclass=="all" ){
				$("ul#portfolio li").fadeIn("slow");
			}else{
				$("ul#portfolio li").each(function(index,element){
					if( $(element).hasClass(filterclass) ){
						$(element).fadeIn("slow");
					}else{
						$(element).fadeOut("slow");
					}
				})
			}
	});
});
	
		
	