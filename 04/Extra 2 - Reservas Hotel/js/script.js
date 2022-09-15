function total(){
    //Variables
    var habitacion = document.getElementById('habitacion').value;
    var spa = document.getElementById('spa').checked;
    var ocupacion = document.getElementById('ocupacion').value;
    var noches = document.getElementById('noches').value;
    var parking = document.getElementById('parking').value;
    var total = 0;
    //Se calcula el precio de la habitación según tipo:
    switch(habitacion){
        case "standard":
            total += 100;
            break;
        case "junior":
            total += 120;
            break;
        case "suite":
            total += 150;
            break;
    }
    //Si tiene spa se le añade una cuota extra
    total += (spa ? 20 : 0);
    //Según la ocupación, el precio se queda en 75%, 100% o 125%
    switch(ocupacion){
        case "individual":
            total *= 0.75;
            break;
        case "doble":
            break;
        case "triple":
            total *= 1.25;
            break;
    }
    //Ahora, ese precio se multiplica por las noches
    total *= noches;
    //Y se le añade el precio de las noches de parking
    total += (parking*10);

    return total;
}

document.getElementById('habitacion').addEventListener("change",() => document.getElementById('precio').value = total());
document.getElementById('spa').addEventListener("change",() => document.getElementById('precio').value = total());
document.getElementById('ocupacion').addEventListener("change",() => document.getElementById('precio').value = total());
document.getElementById('noches').addEventListener("change",() => document.getElementById('precio').value = total());
document.getElementById('parking').addEventListener("change",() => document.getElementById('precio').value = total());