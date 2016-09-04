$(function(){
	productCount();
})();


//显示与收缩
function shopping_commend_show(){
	  //show(),hide()
	var $sort=$("#shopping_commend_sort");
	if( $sort.is(":hidden") ){
		$sort.show();
		$("#shopping_commend_arrow").attr("src","images/shopping_arrow_up.gif");
	}else{
		$sort.hide();
		$("#shopping_commend_arrow").attr("src","images/shopping_arrow_down.gif");
	}	

	/* toggle  */
	/*$("#shopping_commend_sort").toggle{
		function(){
			$("#shopping_commend_arrow").attr("src","images/shopping_arrow_up.gif");
		},
		function(){
			$("#shopping_commend_arrow").attr("src","images/shopping_arrow_down.gif");	
		}
	}*/

}

function deleteProduct( trid ){
	var isTrue=confirm("确定要删除它吗？")
	if( isTrue ){
		$("#"+trid).remove();
		productCount();
	}
}


function productCount(){
//第一步，先把静态的显示出来，即总金额，总积分之类
	var savamoney=0;//您节省的金额
	var score=0;	//总积分
	var total=0;	//商品金额总计
	var markettotal=0; //市场价总价

	var sc=0;		//积分
	var price=0;  	//市场价
	var ddprice=0;  //当当价
	var num=0;		//input 里面的 数量

	//循环所有的tr，取出数据
	var trs=$("#myTableProduct tr");
	console.info(trs.length);
	for(var i=0;i<trs.length;i++){
		//获取tr 中td的数据
		sc=$(trs[i]).find("td:eq(1) label").html();
		price=$(trs[i]).find("td:eq(2) label").html();
		ddprice=$(trs[i]).find("td:eq(3) label").html();
		num=$(trs[i]).find("td:eq(4) input").val();
		//每循环一次，取出它们的数据进行相加
		total+=ddprice*num;
		score+=sc*num;
		markettotal+=price*num;
	}	
	//想成功没有捷径  做事的能力与态度
	//取完数据后，就把数据放进去
	$("#product_total").html( total.toFixed(2) );
	$("#product_save").html( (markettotal-total).toFixed(2));
	$("#product_integral").html(score.toFixed(0));

}
//点击购买的函数
function buyProduct(ulid){
	//取出表格
	var $table=$("#myTableProduct");
	var $ul=$("#"+ulid);

	//取出表格中信息
	var pname=$ul.find("li:eq(0) a").html();
	var $trs=$table.find("tr");
	var flag=-1;	//判读是否有这个商品
	for(var i=0;i<$trs.length;i++){
		if( $($trs[i]) .find("td a").html()==pname){
			flag=i;
			break;
		}
	}
	if( flag==-1 ){
		addTr( $table, $ul);
	}else{
		updateNum( flag );
	}
	productCount();
}

function updateNum(index){
	var num=parseInt($("#myTableProduct tr:eq("+index+")").find("td:eq(4) input").val());                    
	$("#myTableProduct tr:eq("+index+")").find("td:eq(4) input").val( num+1 )   
}

function addTr( $table,$ul ){
	var pname=$ul.find("li:eq(0) a").html();
	var price=$ul.find("li:eq(1)").html().substring(1);
	var ddprice=$ul.find("li:eq(2)").html().substring(1);
	//计算编号值
	var newid=parseInt( $table.find("tr:last").attr("id").split("_")[1])+1;
	var newtr=$table.find("tr:last").clone();		
	$(newtr).attr("id","shoppingProduct_0"+newid);
	$(newtr).find("td:eq(0)").html("<a href='#' class='blue'>"+pname+"</a>");
	$(newtr).find("td:eq(1) label").html( (ddprice*10).toFixed(0) );
	$(newtr).find("td:eq(2) label").html( price );
	$(newtr).find("td:eq(3)").html( "￥<label>"+ddprice+"</label> ("+(ddprice/price*100).toFixed(0)+"折)");
	$(newtr).find("td:eq(4) input").val(1);
	$(newtr).find("td:eq(5) a").attr( "href","javascript:deleteProduct('shoppingProduct_0"+newid+"')");
	$table.prepend( newtr );

}




 