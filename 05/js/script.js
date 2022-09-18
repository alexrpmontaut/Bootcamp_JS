const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
    ];

function primeraMayuscula(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

function mostrarListado(){
    console.log("Carrito de compra:");
        for(var lista of carrito){
            for(var propiedad in lista){
                if (propiedad == "id")
                {
                    console.log(primeraMayuscula(propiedad) + ": " + lista[propiedad]); 
                }
                else
                {
                    console.log(" --> " + primeraMayuscula(propiedad) + ": " + lista[propiedad]);
                } 
            }
        }
}

function mostrarProductos(){
    console.log("Carrito de compra:");
    for(var lista of carrito){
        for(var propiedad in lista){
            if (propiedad == "name")
            {
                console.log(" --> " + lista[propiedad]);
            }
        }
    }
}

function eliminarProducto(){
    var producto = document.getElementById("cesta").value;
    var eliminaciones = false;
    for (i = 0; i < carrito.length; i++){
        if(carrito[i].id == producto){
            console.log("Se ha eliminado "+ carrito[i].name + " de la cesta.");
            carrito.splice(i,1);
            eliminaciones = true;
        }
    }
    if (!eliminaciones){
        console.log("No se ha eliminado nada.");
    }
}

function calcularPrecio(){
    var precio = 0;
    var envio_gratis = true;
    for (i = 0; i < carrito.length; i++){
        precio += (carrito[i].price * carrito[i].count);
        if (!carrito[i].premium){
            envio_gratis = false;
        }
    }
    console.log("El precio total es de " + precio + " €");
    precio >= 50 ? console.log("Tiene derecho a un 5% de descuento, su precio final es de " + (precio * 0.95) + " €") : console.log("¡Puede obtener un 5% de descuento por compras de 50€ o superior!");
    envio_gratis ? console.log("Sin gastos de envío.") : console.log("Con gastos de envío aparte.");
}

function mostrarPrime(){
    var total_primes = 0;
    console.log("Productos Prime del carrito:");
    for (i = 0; i < carrito.length; i++){
        if(carrito[i].premium){
            console.log(" --> " + carrito[i].name);
            total_primes++;
        }
    }
    (total_primes != 0) ? console.log("Hay un total de " + total_primes + " producto(s) Prime en el carrito.") : console.log("No hay productos Prime en el carrito.");
}

document.getElementById("listado").addEventListener("click", () => mostrarListado());
document.getElementById("productos").addEventListener("click", () => mostrarProductos());
document.getElementById("eliminar").addEventListener("click", () => eliminarProducto());
document.getElementById("total").addEventListener("click", () => calcularPrecio());
document.getElementById("prime").addEventListener("click", () => mostrarPrime());