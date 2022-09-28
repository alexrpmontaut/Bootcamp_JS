function readInput(){
  const n = document.getElementById("n").value;
  const min = document.getElementById("min").value;
  const max = document.getElementById("max").value;

  if (isNaN(n) || isNaN(min) || isNaN(max))
  {
    console.log("Por favor, introduzca valores numéricos");
  }
  else if (n <= 0) 
  {
    console.log("El total de valores no puede ser 0 o inferior");
  }
  else if (min > max)
  {
    console.log("El valor mínimo no puede ser superior al máximo");
  }
  else
  {
    randomPick(Number(n), Number(min), Number(max));
  }

}

function randomPick(n, min, max){
  const range = max - min + 1;
  var valores = [];
  var iteraciones = 0;
  var i = 0;

  if (n > range)
  {
    console.log("El número de valores es mayor que el rango, se mostrarán solo " + range + " valor/es");
    iteraciones = range;
  }
  else{
    console.log("Mostrando " + n + " valor/es ");
    iteraciones = n;
  }

  while (valores.length < iteraciones)
  {
    const valor = Math.floor(Math.random() * range) + min;
    if ((valores.indexOf(valor) == -1))
    {
      valores[i] = valor;
      console.log("El valor nº " + Number(i+1) + " es " + valores[i]);
      i++;
    }
  }
}

generar.addEventListener("click", () => readInput());