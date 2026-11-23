// Refactorizar un sistema de cobros:

interface MedioDePago {
  nombre: string;
  calcularTotal(monto: number): number;
}

class Efectivo implements MedioDePago {
  readonly nombre: string = "Efectivo";

  calcularTotal(monto: number): number {
    return monto;
  }
}

class Tarjeta implements MedioDePago {
  nombre: string = "Tarjeta";

  calcularTotal(monto: number): number {
    return monto + (monto * 5) / 100;
  }
}

// DIP (Dependency Inversion Principle): Desacopla SistemaCobros de las implementaciones concretas de almacenamiento.

interface Repositorio {
  guardar(detalle: string): void;
}

class RepositorioMySQL implements Repositorio {
  guardar(dato: string): void {
    console.log(`[MySQL] ${dato}`);
  }
}

class RepositorioArchivo implements Repositorio {
  guardar(dato: string): void {
    console.log(`[Archivo] ${dato}`);
  }
}

class SistemaCobros {
  private repositorio: Repositorio;

  constructor(repositorio: Repositorio) {
    this.repositorio = repositorio;
  }

  cobrar(medio: MedioDePago, monto: number): void {
    const total = medio.calcularTotal(monto);
    this.repositorio.guardar(`${medio.nombre}: $${total}`);
  }
}

const sistemaMySQL = new SistemaCobros(new RepositorioMySQL());
sistemaMySQL.cobrar(new Efectivo(), 1000);
sistemaMySQL.cobrar(new Tarjeta(), 2000);

const sistemaArchivo = new SistemaCobros(new RepositorioArchivo());
sistemaArchivo.cobrar(new Efectivo(), 500);
