$("button").click(function(){
    $(".table").toggle();
    $(".list").toggle();

    if($(".table").css('display') == 'none'){
      initList();
    } else {
      initTable();
    }
    
  });

  $("div#pager").click(function(){
    
    if($(".table").css('display') == 'none'){
        checkStocks();
    }
    
  });
