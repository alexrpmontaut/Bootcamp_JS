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
calcular.addEventListener("click", () => leerInput());

// Funciones

function leerInput(){
  var total = document.getElementById("total");
  var entregado = document.getElementById("entregado");

  if ((total >= 0.01) && (entregado >= 0.01) && (entregado >= total)){
    console.log("Se procede a calcular.");//por aqui
  }
  else{
    console.log("Los datos son erróneos, vuelva a intentarlo.");
  }

}