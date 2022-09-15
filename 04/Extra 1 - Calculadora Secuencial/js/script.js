//Variables
var num_old = 0;
var operador_old = "=";

//Funciones

function calcular(operador) {
    var num_new = document.getElementById('num1').value;

    var check_num = isNaN(num_new);

    if (check_num) {
        num_old = 0;
        operador_old = "=";
        return "Error";
    }
    else {
        switch(operador_old){
            case "+":
                var result = Number(num_old) + Number(num_new);
                num_old = result;
                operador_old = operador;
                return result;
            case "-":
                var result = Number(num_old) - Number(num_new);
                num_old = result;
                operador_old = operador;
                return result;
            case "*":
                var result = Number(num_old) * Number(num_new);
                num_old = result;
                operador_old = operador;
                return result;
            case "/":
                var result = Number(num_old) / Number(num_new);
                num_old = result;
                operador_old = operador;
                return result;
            case "=":
                var result = Number(num_new);
                num_old = result;
                operador_old = operador;
                return result;
        }
    }
}

document.getElementById('suma').addEventListener("click",() => document.getElementById('num1').value = calcular("+"));
document.getElementById('resta').addEventListener("click",() => document.getElementById('num1').value = calcular("-"));
document.getElementById('multiplicacion').addEventListener("click",() => document.getElementById('num1').value = calcular("*"));
document.getElementById('division').addEventListener("click",() => document.getElementById('num1').value = calcular("/"));
document.getElementById('resultado').addEventListener("click",() => document.getElementById('num1').value = calcular("="));