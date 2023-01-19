var validar = document.getElementById("validar");
var validar2 = document.getElementById("validar2");
var validar3 = document.getElementById("validar3");
var validar4 = document.getElementById("validar4");
var validar5 = document.getElementById("validar5");
var validar6 = document.getElementById("validar6");


validar.addEventListener("click", () => validarIBAN());
validar2.addEventListener("click", () => validarMatricula());
validar3.addEventListener("click", () => validarTarjeta());
validar4.addEventListener("click", () => validarSeguridad());
validar5.addEventListener("click", () => validarURL());
validar6.addEventListener("click", () => validarColor());
capturarImagenes();

//Ejercicio 7-1
function validarIBAN(){
    var sintaxis = /^([A-Z]{2})(\d{2})((\s?\d{4}){5})$/;
    var iban = document.getElementById("iban").value;

    console.log(iban.toUpperCase());

    var check = sintaxis.test(iban.toUpperCase());

    console.log(check);

    if (check)
    {
        var desglose = sintaxis.exec(iban.toUpperCase());

        console.log("Código de país: " + desglose[1]);
        console.log("Dígito de control: " + desglose[2]);
    }
    console.log("\n");
}

//Podrían unirse ambas funciones, pero como son ejercicios diferentes las dejo por separado
//Ejercicio 7-2
function validarMatricula(){
    var sintaxis = /^(\d{4})([-\s]?)([A-Z]{3})$/;
    var matricula = document.getElementById("matricula").value;

    console.log(matricula.toUpperCase());

    var check = sintaxis.test(matricula.toUpperCase());

    console.log(check);

    if (check)
    {
        var desglose = sintaxis.exec(matricula.toUpperCase());

        console.log("Parte numérica: " + desglose[1]);
        console.log("Letras: " + desglose[3]);
    }
    console.log("\n");
}

//Ejercicio 7-3
//De esta manera funciona sin necesidad de expresiones regulares:
function capturarImagenes()
{
    var imgCapturar = document.getElementsByTagName("img");

    console.log("Estas son las imágenes del documento:");
    console.log("\n");

    for (i=0; i<imgCapturar.length; i++)
    {
        console.log(imgCapturar[i].src);
    }
    console.log("\n");
}

//Ejercicio 7-4
function validarTarjeta()
{
    //La forma óptima está comentada porque si no se recoge sólo el último fragmento (lo que comentamos)
    var sintaxis = /^(5[1-5]{1}\d{2})([-\s]?)(\d{4})([-\s]?)(\d{4})([-\s]?)(\d{4})$/; ///^([50-55]{2}\d{2})(([-\s]?)(\d{4})){3}$/;
    var tarjeta = document.getElementById("tarjeta").value;

    console.log(tarjeta);

    var check = sintaxis.test(tarjeta);

    console.log(check);

    if(check)
    {
        var desglose = sintaxis.exec(tarjeta);
        
        for (i=1; i<desglose.length; i=i+2)
        {
            console.log(desglose[i]);
        }
    }
    console.log("\n");
}

//Ejercicio 7-5
function validarSeguridad()
{
    var sintaxis = /[a-z]/ && /[A-Z]/ && /\d/ && /[_\W]/;
    var checkLongitud = /.{8,}/;
    var clave = document.getElementById("clave").value;

    console.log(clave);

    var check = sintaxis.test(clave);

    console.log(check);

    if (check)
    {
        (checkLongitud.exec(clave)) ? console.log("La clave es moderada (seguridad alta)") : console.log("La clave es compleja (seguridad media)");
    }
    else console.log("La clave no es segura");
    console.log("\n");
}

//Ejercicio 7-6
function validarURL()
{
    var sintaxis = /^((https:\/\/)?(www\.))?([a-z]+)(\.)(net|com|es)$/i;
    var url = document.getElementById("url").value;

    console.log(url);

    var check = sintaxis.test(url);

    console.log(check);
    console.log("\n");
}

//Ejercicio 7-7
function validarColor()
{
    var sintaxis = /^#([\d|[A-F]){6}$/; //Separados por color /^#([\d|[A-F]{2})([\d|[A-F]{2})([\d|[A-F]{2})$/;
    var color = document.getElementById("color").value;

    console.log(color);

    var check = sintaxis.test(color);

    console.log(check);
    console.log("\n");
}
