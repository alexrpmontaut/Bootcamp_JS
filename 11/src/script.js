//Variables
const reservas = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1
  }
];

class TotalesReservas{
  constructor(reservas) {
    this.listaReservas = reservas;
    this.iva = 0.21;
    this.extra = 40;
    this._subtotal = 0;
    this._total = 0;
    this.desayuno = 15;
}

calcularTipoHabitacion(reserva) {
    switch(reserva.tipoHabitacion){
        case "standard":
            return 100;
        case "suite":
            return 150;
    }
}

calcularDesayuno(reserva) {
  if (reserva.desayuno){
    return (this.desayuno * reserva.pax * reserva.noches);
  }
  else return 0;
}

get subtotal(){
  for (var i = 0; i < this.listaReservas.length; i++){
    this._subtotal += (this.calcularTipoHabitacion(this.listaReservas[i]) * this.listaReservas[i].noches) + ((this.listaReservas[i].pax - 1) * this.extra)
    + (this.calcularDesayuno(this.listaReservas[i]));
  }
  return this._subtotal;
}

get total(){
  return this._total = this._subtotal + (this._subtotal * this.iva);
}
}

class TotalesReservasCliente extends TotalesReservas{
    constructor(reservas) {
        super(reservas);
    }

}

class TotalesReservasTour extends TotalesReservas{
    constructor(reservas) {
      super(reservas);
      this.descuento = 0.15;
  }

  calcularTipoHabitacion() {
    return 100;
  }

  get total(){
    return this._total = this._subtotal + (this._subtotal * this.iva) - (this._subtotal * this.descuento);
  }

}

const reservasCliente = new TotalesReservasCliente(reservas);

console.log("El subtotal para un cliente es " + reservasCliente.subtotal + "€.");
console.log("El total para un cliente es " + reservasCliente.total + "€.");

const reservasTour = new TotalesReservasTour(reservas);

console.log("El subtotal para un tour operador es " + reservasTour.subtotal + "€.");
console.log("El total para un tour operador es " + reservasTour.total + "€.");