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
}

initList();