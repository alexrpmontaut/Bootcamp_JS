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
    var ids = [];
    console.log(ids.lenght);//POR AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
    for(var lista of carrito){
        for(var propiedad in lista){
            var longitud = ids.push(propiedad);
        }
    }
    console.log(ids.lenght);
    console.log(longitud);

}

document.getElementById("listado").addEventListener("click", () => mostrarListado());
document.getElementById("productos").addEventListener("click", () => mostrarProductos());
document.getElementById("eliminar").addEventListener("click", () => eliminarProducto());
//document.getElementById("eliminar").addEventListener("click", () => mostrarListado());
//document.getElementById("total").addEventListener("click", () => mostrarListado());
//document.getElementById("prime").addEventListener("click", () => mostrarListado());
