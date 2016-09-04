
//////////静态扩展，一般用于插件/////////
$.extend({
	sayHello:function(){
		//alert("a");
		if( arguments.length>0){
			$("<div>"+arguments[0]+"</div>").appendTo( $("body"));
		}else{
			$("<div>hello</div>").appendTo( $("body"));
		}
	},
	log:function(){
		var n=new Date();
		var year=n.getFullYear();
		var mouth=n.getMonth();
		var date=n.getDate();
		var hour=n.getHours();
		var minutes=n.getMinutes();
		var seconds=n.getSeconds();
		var str=year+"年"+mouth+"月"+date+"日"+hour+":"+minutes+":"+seconds+":消息如下"+(arguments.length>0?arguments[0]:"");
		$("<div>"+str+"</div>").appendTo( $("body"));
	},
	ltrim:function( str ){
		return str.replace(/(^\s*)/g,"");
		
	},
	rtrim:function( str ){
		return str.replace(/(\s*$)/g,"");
	}
});





////////////实例方法扩展//////////////////
$.fn.setColor=function(){
	//谁调的这个函数谁就是this 
	//调用了这个函数的jquery对象
	this.css("color","red");
}

$.fn.showLink=function(){
	this.css("color","blue");
	this.each(function(index,obj){
		//这个内部函数中的this指的是循环出来的每个a标记，不是指的外面的this
		//因为在这里使用 this.each 它将一个JQuery的集合中每个元素提出来，这时提出来的是DOM元素
		//为了调用jquery方法，又要转换为jquery对象
		$(this).html( $(this).attr("href")+" "+$(this).attr("title"));
	})
	//要有链式调用，设计的每一个函数，都需要一个return返回值，没有返回值 返回的是undefined
}

$.fn.showLink2=function( options){
	var defaults={
		"color":"red",
		"background-color":"yellow"
	};
	defaults=$.extend(defaults,options);//$.extend调用这个函数把参数与默认值合并
	//设置样式
	this.css({"color":defaults.color,"background-color":defaults["background-color"]});
	this.each(function(index,obj){
		//这个内部函数中的this指的是循环出来的每个a标记，不是指的外面的this
		//因为在这里使用 this.each 它将一个JQuery的集合中每个元素提出来，这时提出来的是DOM元素
		//为了调用jquery方法，又要转换为jquery对象
		$(this).html( $(this).attr("href")+" "+$(this).attr("title"));
	})
	//要有链式调用，设计的每一个函数，都需要一个return返回值，没有返回值 返回的是undefined
}


