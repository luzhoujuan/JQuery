  function changeDown(trid){
    $("#"+trid+" td:eq(4)").text("已下架").css("color","red");
    $("#"+trid+" td:eq(5) a").attr("href","javascript:changeUp(\'"+trid+"\')").text("[上架]");
  }
  function changeUp(trid){
    $("#"+trid+" td:eq(4)").text("已上架").css("color","green");
    $("#"+trid+" td:eq(5) a").attr("href","javascript:changeDown(\'"+trid+"\')").text("[下架]");
  }

