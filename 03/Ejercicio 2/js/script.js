//Variables
var bruto = prompt(
    "Indique el salario bruto:",
);
var hijos = prompt(
    "Indique el número de hijos:",
);
var pagas = prompt(
    "Indique el número de pagas:",
);

//getRetencion: A partir del sueldo bruto devuelve la retención a aplicar 
function getRetencion(cifra){
    if (cifra > 12000) {
        if (cifra > 24000) {
            if (cifra > 34000) {
                return 0.3;
            }
            else {
                return 0.16;
            }
        }
        else {
            return 0.08;
        }
    }
    else {
        return 0;
    }
}

//getDescuentoHijos: A partir del número de hijos devuelve el descuento a aplicar
function getDescuentoHijos(cifra){
    return((cifra > 0) ? 0.02 : 0);
}

//Update: Es la que actualiza la información en pantalla
function update() {
    document.getElementById('bruto').value = bruto;
    document.getElementById('hijos').value = hijos;
    document.getElementById('pagas').value = pagas;

    neto = (bruto - (bruto * (getRetencion(bruto) - getDescuentoHijos(hijos)))) / pagas;

    document.getElementById('neto').value = neto;

}

update();