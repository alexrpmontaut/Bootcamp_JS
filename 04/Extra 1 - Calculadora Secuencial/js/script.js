//Funciones
/*
introducir numero a
seleccionar operacion -> guardar el número actual y recordar operación
introducir número b
introducir operación -> se refresca con (a signo b), memorizar (a signo b) y recordar operación
introducir número c
introducir operación -> se refresca con [(a signo b) signo c], memorizar [(a signo b) signo c] y recordar operacion

si se pulsa = -> se refresca con x signo y = z, se recuerda z y no recuerda operación


*/
function calcular(num1, operador) {
    var actual = document.getElementById('num1').value;
    var memoria = document.getElementById('num2').value;
    var check_actual = isNaN(actual);
    var check_memoria = isNaN(memoria);

    switch(operador){
        case "+":
            var result = Number(num1) + Number(num2);
            return result;
        case "-":
            var result = Number(num1) - Number(num2);
            return result;
        case "*":
            var result = Number(num1) * Number(num2);
            return result;
        case "/":
            var result = Number(num1) / Number(num2);
            return result;
        case "=":
            var result = Number(num1) = Number(num2);
            return result;
    }

    if ((check1) || (check2)) {
        return "Error";
    }
    else {
        var result = Number(num1) + Number(num2);
        return result;
    }
}

function restar() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var check1 = isNaN(num1);
    var check2 = isNaN(num2);
    if ((check1) || (check2)) {
        return "Error";
    }
    else {
        var result = Number(num1) - Number(num2);
        return result;
    } 
}

function multiplicar() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var check1 = isNaN(num1);
    var check2 = isNaN(num2);
    if ((check1) || (check2)) {
        return "Error";
    }
    else {
        var result = Number(num1) * Number(num2);
        return result;
    }
}

function dividir() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var check1 = isNaN(num1);
    var check2 = isNaN(num2);
    if ((check1) || (check2)) {
        return "Error";
    }
    else {
        var result = Number(num1) / Number(num2);
        return result;
    }
}

document.getElementById('suma').addEventListener("click",() => document.getElementById('num1').value = calcular("+"));
document.getElementById('resta').addEventListener("click",() => document.getElementById('num1').value = calcular("-"));
document.getElementById('multiplicacion').addEventListener("click",() => document.getElementById('num1').value = calcular("*"));
document.getElementById('division').addEventListener("click",() => document.getElementById('num1').value = calcular("/"));
document.getElementById('resultado').addEventListener("click",() => document.getElementById('num1').value = calcular("="));

