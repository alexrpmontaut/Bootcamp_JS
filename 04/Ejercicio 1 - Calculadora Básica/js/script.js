//Funciones
function sumar() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var check1 = isNaN(num1);
    var check2 = isNaN(num2);
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

document.getElementById('suma').addEventListener("click",() => document.getElementById('result').value = sumar());
document.getElementById('resta').addEventListener("click",() => document.getElementById('result').value = restar());
document.getElementById('multiplicacion').addEventListener("click",() => document.getElementById('result').value = multiplicar());
document.getElementById('division').addEventListener("click",() => document.getElementById('result').value = dividir());

