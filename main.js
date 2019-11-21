let productList = [
    {
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitPrice": 18,
        "UnitsInStock": 39,
        "DeliveryOn": new Date(1996, 8, 20),
        "Picture": "chai.jpg"
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitPrice": 19,
        "UnitsInStock": 17,
        "DeliveryOn": new Date(1996, 7, 12),
        "Picture": "chang.jpg"
    },
    {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "UnitPrice": 10,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 8, 26),
        "Picture": "syrup.jpg"
    },
    {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "UnitPrice": 22,
        "UnitsInStock": 53,
        "DeliveryOn": new Date(1996, 9, 19),
        "Picture": "seasoning.jpg"
    },
    {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 7, 17),
        "Picture": "mix.jpg"
    },
    {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "UnitPrice": 25,
        "UnitsInStock": 120,
        "DeliveryOn": new Date(1996, 9, 19),
        "Picture": "spread.jpg"
    },
    {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "UnitPrice": 30,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 7, 22),
        "Picture": "pears.jpg"
    },
    {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "UnitPrice": 40,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 11, 1),
        "Picture": "sauce.jpg"
    },
    {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "UnitPrice": 97,
        "UnitsInStock": 29,
        "DeliveryOn": new Date(1997, 1, 21),
        "Picture": "beef.jpg"
    },
    {
        "ProductID": 10,
        "ProductName": "Ikura",
        "UnitPrice": 31,
        "UnitsInStock": 31,
        "DeliveryOn": new Date(1996, 8, 5),
        "Picture": "caviar.jpg"
    }
];

// let parsed = '';
// for(i=0; i<productList.length; i++){
//     parsed += productList[i].ProductName;
// }
// $(".container").html(parsed);

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

$(".container").kendoGrid({
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