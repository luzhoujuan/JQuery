$(function(){
	init();
})();



var selectedtr; //表示选定的行,一定是一个jquery对象
function delInfo(){
	//选定后 
	if(selectedtr){
		var result=confirm("您确定要删除这个数据吗");
		if(result){
			selectedtr.remove();
		}
	}else{
		alert("请至少选定一行");
	}
	
}
		
function addInfo(){
	//创建<tr><td></td><td></td></tr> appendTo()
	var newtr=$("<tr><td>请输入学号</td><td>请输入姓名</td></tr>");
	newtr.appendTo( $("table tbody"));
	init();
}

function init(){
	//奇数行的背景颜色,以及事件
	$("table tbody tr:even").css({"background-color":"blue","color":"white"});
	$("table tbody tr").unbind().bind({
		mouseover:function(){
			$(this).css("background-color","green");
		},
		mouseout:function(){
			if( $(this).index()%2==0 ){
				$(this).css({"background-color":"blue","color":"white"});
			}else{
				$(this).css({"background-color":"white","color":"black"});
			}
		}
	});
	$("table tbody tr td").unbind().bind({
		click:function(){
			selectedtr=$(this).parent();
		},
		dblclick:function(){
			 var $newinput=$("<input type='text'/>");
			 $newinput.css({"border":"1px solid","font-size":"12px"});
			var oldvalue=$(this).html();
			$newinput.val(oldvalue);
			$(this).html( $newinput );
			$newinput.focus();
			$newinput.select();

			var tdobj=$(this);
			//给新的Input元素绑定事件
			$newinput.blur(function(){
				tdobj.html(oldvalue);
			});
			$newinput.keyup(function(event){
				var keycode=event.which;
				if(keycode==13){
					var newvalue=$(this).val();
					tdobj.html( newvalue );
				}
			});
		}
	});
}