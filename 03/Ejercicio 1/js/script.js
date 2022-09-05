//Variables
var products = {
    camiseta: {
        count: 1,
        price: 19.95,
        type: "ropa",
    },
    pack_pizzas: {
        count: 3,
        price: 4.95,
        type: "alimentacion",
    },
    pack_novelas: {
        count: 10,
        price: 9.95,
        type: "libro",
    },
    defectuoso: {
        count: 1,
        price: -3,
        type: "otros",
    },
    agotado: {
        count: 0,
        price: 10,
        type: "ropa",
    },
};
//Funciones
//getVat: Le damos un producto y nos devuelve su IVA a aplicar
function getVat(product) {
    //Según su tipo, calculamos el IVA
    switch(product.type) {
        case "alimentacion":
            return 0.1;
            break;
        case "libro":
            return 0.04;
            break;
        default:
            return 0.21;
            break;
    }
}
//getTotalVat: Le damos un producto y nos devuelve el precio con IVA de la cantidad total
function getTotalVat(product) {
    return product.count > 0 && product.price > 0? (product.price + (product.price * getVat(product.type))) * product.count : 0;
}
//getResult: Le damos 2 productos y nos devuelve el precio total
function getResult(product_1,product_2) {
    return getTotalVat(product_1) + getTotalVat(product_2);
}

//Update: Es la que actualiza la información en pantalla
function update() {
    var product_1 = document.getElementById('product_1').value;
    var product_2 = document.getElementById('product_2').value;
    
    document.getElementById('product_1_count').value = products[product_1].count;
    document.getElementById('product_1_price').value = products[product_1].price;
    document.getElementById('product_1_type').value = products[product_1].type;
    document.getElementById('product_1_iva').value = getVat(products[product_1]);
    document.getElementById('product_1_final_price').value = getTotalVat(products[product_1]);

    document.getElementById('product_2_count').value = products[product_2].count;
    document.getElementById('product_2_price').value = products[product_2].price;
    document.getElementById('product_2_type').value = products[product_2].type;
    document.getElementById('product_2_iva').value = getVat(products[product_2]);
    document.getElementById('product_2_final_price').value = getTotalVat(products[product_2]);

    document.getElementById('result').value = getResult(products[product_1],products[product_2]);
}

update();