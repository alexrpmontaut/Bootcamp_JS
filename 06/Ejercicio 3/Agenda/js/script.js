// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00"
];

// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true)
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true)
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true)
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true)
  },
];

function generarAgendaRandom(){
  for (i=0; i<myTeam.length; i++)
  {
    console.log("Disponibilidad de " + myTeam[i].name);
    for (j=0; j<myTeam[i].availability.length; j++)
    {
      var libre = Math.round(Math.random());
      var hueco = "";
      (libre != 0) ? myTeam[i].availability[j] = true : myTeam[i].availability[j] = false;
      (myTeam[i].availability[j]) ? hueco = "Sí" : hueco = "No";
      console.log(WORK_HOURS[j] + ": " + hueco);
    }
  }
}

function buscarHueco(){

  var total_horas = myTeam[0].availability.length;
  var total_equipo = myTeam.length;
  for (j=0; j<total_horas; j++)
  {
    var i=0;
    while ((i<total_equipo) && (myTeam[i].availability[j])){
      i++;
    }
    if (i == total_equipo)
    {
      return console.log("Hueco encontrado en el horario " + WORK_HOURS[j]);
    }
  }
  return console.log("Lo siento. No hay hueco disponible en el equipo.");
}

generarAgendaRandom();
buscarHueco();