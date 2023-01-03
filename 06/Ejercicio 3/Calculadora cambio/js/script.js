// Constantes
var DINERO = [
  0.01,
  0.02,
  0.05,
  0.10,
  0.20,
  0.50,
  1,
  2,
  5,
  10,
  20,
  50,
  100,
  200
];

var calcular = document.getElementById("calcular");
calcular.addEventListener("click", () => leerInput("sin_caja"));

var calcular_caja = document.getElementById("calcular_caja");
calcular_caja.addEventListener("click", () => leerInput("con_caja"));

// Funciones

function leerInput(valor){
  var caja = [];
  switch(valor)
  {
    case "sin_caja":
      var total = Number(document.getElementById("total").value);
      var entregado = Number(document.getElementById("entregado").value);
      break;
    case "con_caja":
      var total = Number(document.getElementById("total_caja").value);
      var entregado = Number(document.getElementById("entregado_caja").value);
      
      var cantidad_caja = document.getElementById("caja_0_01").value;
      caja[0] = cantidad_caja;
      var cantidad_caja = document.getElementById("caja_0_02").value;
      caja[1] = cantidad_caja;
      var cantidad_caja = document.getElementById("caja_0_05").value;
      caja[2] = cantidad_caja;
      var cantidad_caja = document.getElementById("caja_0_10").value;
      caja[3] = cantidad_caja;
      var cantidad_caja = document.getElementById("caja_0_20").value;
      caja[4] = cantidad_caja;
      var cantidad_caja = document.getElementById("caja_0_50").value;
      caja[5] = cantidad_caja;
      var cantidad_caja = document.getElementById("caja_1").value;
      caja[6] = cantidad_caja;
      var cantidad_caja = document.getElementById("caja_2").value;
      caja[7] = cantidad_caja;
      var cantidad_caja = document.getElementById("caja_5").value;
      caja[8] = cantidad_caja;
      var cantidad_caja = document.getElementById("caja_10").value;
      caja[9] = cantidad_caja;
      var cantidad_caja = document.getElementById("caja_20").value;
      caja[10] = cantidad_caja;
      var cantidad_caja = document.getElementById("caja_50").value;
      caja[11] = cantidad_caja;
      var cantidad_caja = document.getElementById("caja_100").value;
      caja[12] = cantidad_caja;
      var cantidad_caja = document.getElementById("caja_200").value;
      caja[13] = cantidad_caja;
  }
  if ((total >= 0.01) && (entregado >= 0.01) && (entregado >= total)){
    console.log("Se procede a calcular.");
    console.log("\n");
    calcularCambio(total, entregado, caja);
  }
  else{
    console.log("Los datos son erróneos, vuelva a intentarlo.");
  }
}

function calcularCambio(total, entregado, caja){
  var vuelta = entregado - total;
  var cambio = [];
  var a_devolver = 0;
  var lacuenta = vuelta;
  
  for (i = DINERO.length - 1; i >= 0; i--)
  {
    a_devolver = ((lacuenta - (lacuenta % DINERO[i]))/DINERO[i]); //total de unidades de la moneda o billete actual

    if ((caja.length > 1) && (caja[i] < a_devolver)) //con caja y no hay suficiente
    {
      cambio[i] = caja [i];
      lacuenta = Number(lacuenta - (DINERO[i] * cambio[i])).toFixed(2);
    }
    else // sin caja
    {
      cambio[i] = a_devolver;
      lacuenta = Number(lacuenta % DINERO[i]).toFixed(2);

    }
  }

  console.log("Cambio a devolver: " + Number(vuelta).toFixed(2) + "€");
  console.log("\n");

  if (lacuenta != 0)
  {
    console.log("No hay dinero suficiente en la caja");
  }
  else
  {
    for (i = cambio.length - 1; i >= 0 ; i--)
    {
      console.log("Cambio de " + DINERO[i] + "€: " + cambio[i]);
      
    }
  }
}