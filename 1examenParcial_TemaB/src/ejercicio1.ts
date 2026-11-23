// Hotel:

abstract class Habitacion {
  readonly numero: number;

  constructor(numero: number) {
    this.numero = numero;
  }

  abstract calcularPrecio(noches: number): number;
}

class HabitacionSimple extends Habitacion {
  calcularPrecio(noches: number): number {
    return noches * 20000;
  }
}

class HabitacionSuite extends Habitacion {
  calcularPrecio(noches: number): number {
    return noches * 50000;
  }
}

class Hotel {
  private habitaciones: Habitacion[] = [];
  static ingresosTotales: number = 0;

  checkIn(Habitacion: Habitacion): void {
    this.habitaciones.push(Habitacion);
    Hotel.ingresosTotales += 1;
  }

  get cantidad(): number {
    return this.habitaciones.length;
  }

  mostrarPrecios(noches: number): void {
    for (const habitacion of this.habitaciones) {
      console.log(`Habitación ${habitacion.numero} paga $${habitacion.calcularPrecio(noches)}`);
    }
  }
}

const simple101 = new HabitacionSimple(101);
const suite303 = new HabitacionSuite(303);
const hotel = new Hotel();
hotel.checkIn(simple101);
hotel.checkIn(suite303);

hotel.mostrarPrecios(2);
console.log(`Habitaciones ocupadas: ${hotel.cantidad}`);
console.log(`Total históricode check-ins: ${Hotel.ingresosTotales} `);
