$("button").click(function(){
    $(".table").toggle();
    $(".list").toggle();

    if($(".table").css('display') == 'none'){
      initList();
    } else {
      initTable();
    }
    
  });

  $("div.k-pager-wrap").click(function(){
    
    if($(".table").css('display') == 'none'){
      indicateStocksInListView();
    } else {
      indicateStocksInTableView();
    }

  });
