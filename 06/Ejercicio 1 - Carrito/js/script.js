// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

//Funciones

//Desactiva o activa el botón según si el carrito está vacío o no
function vacio(){
  var total_unidades = document.getElementsByClassName("cantidad");
  var suma = 0;
  for (i=0; i<total_unidades.length; i++)
  {
    suma += total_unidades[i].value;
  }
  (suma <= 0) ? boton.disabled = true : boton.disabled = false;
}

//Por cada producto de nuestro carrito, se genera una linea con los datos en nuestro HTML
function listar_productos(){
  for (i=0; i<products.length; i++)
  {
    var lista_productos = document.getElementById("lista_productos");
    var productos = document.createElement("div");
    var numero = document.createElement("p");
    var producto = document.createElement("div");
    var item = document.createElement("p");
    var input = document.createElement("input");

    productos.setAttribute("class", "productos");
    item.setAttribute("class", "item");
    input.setAttribute("type", "text");
    input.setAttribute("class", "cantidad");
    input.setAttribute("value", products[i].units);
    input.addEventListener("change", () => vacio());

    productos.appendChild(numero);
    numero.innerHTML = i+1 + ".";
    productos.appendChild(producto);
    producto.appendChild(item);
    item.innerHTML = products[i].description + " - " + products[i].price + "€/ud.";
    item.appendChild(input);
    lista_productos.appendChild(productos);
  }
}

//Se calculan los precios. Sólo se actualizarán cuando se pulse el botón
function calcular_precio(){
  var subtotal = 0;
  var iva = 0;
  var total = 0;
  var total_unidades = document.getElementsByClassName("cantidad");
  
  for (i=0; i<products.length; i++)
  {
    subtotal += products[i].price * total_unidades[i].value;
    (total_unidades[i].value != 0) ? iva += (products[i].price * products[i].tax)/100 : iva += 0;
  }
  total = subtotal + iva;

  document.getElementById("subtotal").innerHTML = subtotal + "€";
  document.getElementById("iva").innerHTML = iva + "€";
  document.getElementById("total").innerHTML = total + "€";
}

listar_productos();
vacio();
calcular_precio();
var calcular = document.getElementById("boton");
calcular.addEventListener("click", () => calcular_precio());