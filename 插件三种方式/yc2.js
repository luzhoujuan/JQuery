//使用对象封装
var Pretty=function( ele,options ){
	this.$ele=ele;
	this.defaults={
		'color':'red',
		'fontSize':'14px'
	};

	$.extend( this.defaults,options );
}
Pretty.prototype={
	beautify:function(){
		return this.$ele.css( {"color":this.defaults.color,"fontSize":this.defaults.fontSize });
	}
}
//调用
//var a=new Pretty;
//a.beautify()
//将对象与插件整合到一起
$.fn.myShow=function(options){
	var p=new Pretty(this,options);
	//console.log(this);
 	return p.beautify();  //return 是为了下一次链式调用
}

$.fn.myTable=function( options ){
	var $table=$("<table border='1' width='500px'><tr><td>张老师</td></tr></table>");
	var p=new Pretty($table,options);
	$table=p.beautify();
	return $table.appendTo("body");
}

