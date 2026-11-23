// ESTACIONAMIENTO :

abstract class Vehiculo {
  readonly patente: string;

  constructor(patente: string) {
    this.patente = patente;
  }

  abstract calcularTarifa(horas: number): number;
}

class Auto extends Vehiculo {
  calcularTarifa(horas: number): number {
    return 1000 * horas;
  }
}

class Moto extends Vehiculo {
  calcularTarifa(horas: number): number {
    return 500 * horas;
  }
}

class Estacionamiento {
  private vehiculo: Vehiculo[] = [];
  static ingresosTotales: number = 0;

  ingresar(vehiculo: Vehiculo): void {
    this.vehiculo.push(vehiculo);
    Estacionamiento.ingresosTotales += 1;
  }

  get cantidad(): number {
    return this.vehiculo.length;
  }

  mostrarTarifas(horas: number): void {
    for (const v of this.vehiculo) {
      const tarifa = v.calcularTarifa(horas);
      console.log(`${v.patente} paga $${tarifa}`);
    }
  }
}

const auto = new Auto("AB123CD");
const moto = new Moto("XY987ZW");

const estacionamiento = new Estacionamiento();
estacionamiento.ingresar(auto);
estacionamiento.ingresar(moto);

estacionamiento.mostrarTarifas(2);
console.log(`Vehículos estacionados: ${estacionamiento.cantidad}`);
console.log(`Total histórico de ingresos: ${Estacionamiento.ingresosTotales}`);
