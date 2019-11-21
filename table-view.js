function initTable() {
    var gridDataSource = new kendo.data.DataSource({
        data: productList,
        schema: {
            model: {
                fields: {
                    ProductID: { type: "number" },
                    ProductName: { type: "string" },
                    UnitPrice: { type: "number" },
                    UnitsInStock: { type: "number" },
                    DeliveryOn: { type: "date" },
                    Picture: { type: "string"}
                }
            }
        },
        pageSize: 5,
        sort: {
            field: "DeliveryOn",
            dir: "desc"
        }
    });
    
    $(".table").kendoGrid({
        dataSource: gridDataSource,
        height: 500,
        pageable: true,
        sortable: true,
        filterable: true,
        columns: [{
            field:"ProductID",
            title: "Product ID",
            width: 160
        }, {
            field: "ProductName",
            title: "Product Name",
            width: 160,
        }, {
            field: "UnitPrice",
            title: "Unit Price",
            width: 50,
        }, {
            field: "UnitsInStock",
            title: "Units In Stock",
            width: 70,
        }, {
            field: "DeliveryOn",
            title: "Delivery On",
            width: 100,
        }, {
            template: "<div style='background-image: url(img/#:data.Picture#);' class='product-picture'></div>",
            field: "Picture",
            title: "Picture",
            width: 210
        }]
    });
}

initTable();