function initList() {
    $(".k-primary").html('Table View');

    var dataSource = new kendo.data.DataSource({
        data: productList,
        pageSize: 6
    });
    
    $("#pager").kendoPager({
        dataSource: dataSource
    });
    
    $("#listView").kendoListView({
        dataSource: dataSource,
        template: kendo.template($("#template").html())
    });

    indicateStocksInListView();
    
}

function indicateStocksInListView() {

    let stocks = $('p.stock');

    stocks.each(function() {
    if(this.innerHTML == '0') {
        this.parentElement.querySelectorAll("span")[0].style.display = "unset";
        this.parentElement.querySelectorAll("h3")[0].style.textDecoration  = "line-through";
    }
  });
}

initList();