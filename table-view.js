function initTable() {
    $(".k-primary").html('List View');

    var gridDataSource = new kendo.data.DataSource({
        data: productList,
        schema: {
            model: {
                fields: {
                    Picture: { type: "string"},
                    ProductID: { type: "number" },
                    ProductName: { type: "string" },
                    UnitPrice: { type: "number" },
                    UnitsInStock: { type: "number" },
                    DeliveryOn: { type: "date" }
                }
            }
        },
        pageSize: 5
    });
    
    $(".table").kendoGrid({
        dataSource: gridDataSource,
        height: 600,
        pageable: true,
        sortable: true,
        filterable: true,
        columns: [{
            template: "<div style='background-image: url(img/#:data.Picture#);' class='product-picture'></div>",
            field: "Picture",
            title: "Picture",
            width: 210
        }, {
            field: "ProductName",
            title: "Product Name",
            width: 160,
        }, {
            field: "UnitPrice",
            title: "Unit Price",
            width: 100,
        }, {
            field: "UnitsInStock",
            title: "Units In Stock",
            width: 100,
        }]
    });

    indicateStocksInTableView();
}

function indicateStocksInTableView() {
    let columns = $("table tbody tr td:nth-child(4)"); 

    columns.each(function() {
        if(this.innerHTML == '0') {
            this.innerHTML = "OUT OF STOCK";
            this.style.color  = "red";
            this.style.fontWeight  = "bold";
            this.style.fontSize = "25px";
        }
      });
    
}

initTable();