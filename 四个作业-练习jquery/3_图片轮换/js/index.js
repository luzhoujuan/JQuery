//记录当前第几张的一个变量
//
var index=0;  //显示1，123456 123...   index%6+1=图片的编号
var time=window.setInterval("show()",1000);
function show( id ){
	if( Number(id) ){
		index=id;
		clearInterval(time);
	}else{
		//当没传参，则为undefined
		index=index%6+1;
	}
			
	$("#dd_scroll").attr("src","images/dd_scroll_"+index+".jpg");
	//给所有的li加上样式  .scroll_number_out   
	$("#scroll_number li").attr("class","scroll_number_out");
	//再将其中下标为index的li，加另一个样式 .scroll_number_over
	$("#scroll_number li").eq(index-1).attr("class","scroll_number_over");
}
function start(){	
	time=window.setInterval("show()",1000);
}




