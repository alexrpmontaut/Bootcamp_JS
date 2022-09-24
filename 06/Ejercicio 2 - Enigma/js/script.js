//Variables
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
//Funciones
function encriptar(){
  var texto_top = document.getElementById("area_top").value;
  var traduccion = "";
  for (i=0; i<texto_top.length; i++)
  {
    var char = texto_top.charAt(i);
    var posicion = plainAlphabet.indexOf(char);
    posicion != -1 ? traduccion += encryptedAlphabet.charAt(posicion) : traduccion += char;
  }
  var texto_bot = document.getElementById("area_bot");
  texto_bot.value = traduccion;

  console.log("texto_bot: " + texto_bot );
}

function desencriptar(){
  var texto_bot = document.getElementById("area_bot").value;
  var traduccion = "";
  for (i=0; i<texto_bot.length; i++)
  {
    var char = texto_bot.charAt(i);
    var posicion = encryptedAlphabet.indexOf(char);
    posicion != -1 ? traduccion += plainAlphabet.charAt(posicion) : traduccion += char;
  }
  var texto_top = document.getElementById("area_top");
  texto_top.value = traduccion;

  console.log("texto_top: " + texto_top );
}

var encript = document.getElementById("encript");
var decript = document.getElementById("decript");
encript.addEventListener("click", () => encriptar());
decript.addEventListener("click", () => desencriptar());


