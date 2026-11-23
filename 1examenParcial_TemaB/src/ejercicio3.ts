// Refactorizar un servicio de Mensajeria:

/*

class ArchivoLog {
  escribir(linea: string): void {
    console.log(`[LOG] ${linea}`);
  }
}

class ServicioNotificaciones {
  notificar(canal: string, mensaje: string): void {
    let costo = 0;
    if (canal === "sms") {
      costo = 15;
    }
    const log = new ArchivoLog();
    log.escribir(`${canal}: "${mensaje}" ($${costo})`);
  }
}

const servicio = new ServicioNotificaciones();
servicio.notificar("email", "Hola");
servicio.notificar("sms", "Hola"); 

*/
//OCP -> Permite agregar nuevos canales sin modificar el servicio
interface Canal {
  nombre: string;
  calcularCosto(): number;
}

// DIP -> Permite cambiar la implementación del registro sin modificar el servicio
interface Registro {
  escribir(linea: string): void;
}

class RegistroArchivo implements Registro {
  escribir(linea: string): void {
    console.log(`[LOG] ${linea}`);
  }
}

class RegistroBaseDeDatos implements Registro {
  escribir(linea: string): void {
    console.log(`[DB] ${linea}`);
  }
}

class Email implements Canal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  calcularCosto(): number {
    return 0;
  }
}

class SMS implements Canal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  calcularCosto(): number {
    return 15;
  }
}

class ServicioNotificaciones {
  private registro: Registro;

  constructor(registro: Registro) {
    this.registro = registro;
  }

  notificar(canal: Canal, mensaje: string): void {
    const costo = canal.calcularCosto();

    this.registro.escribir(`${canal.nombre}: "${mensaje}" ($${costo})`);
  }
}

// Pruebas
const servicio = new ServicioNotificaciones(new RegistroArchivo());

servicio.notificar(new Email("Email"), "Hola");
servicio.notificar(new SMS("SMS"), "Hola");

const servicioDB = new ServicioNotificaciones(new RegistroBaseDeDatos());

servicioDB.notificar(new Email("Email"), "Prueba");
