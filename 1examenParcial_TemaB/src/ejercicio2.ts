// Envios de una empresa de paquerteria:

interface Envio {
  calcularCosto(base: number): number;
}

class ConfiguracionEmpresa {
  private static instancia: ConfiguracionEmpresa;
  readonly recargoExpress: number = 2500;

  private constructor() {}

  static obtenerInstancia(): ConfiguracionEmpresa {
    if (!ConfiguracionEmpresa.instancia) {
      ConfiguracionEmpresa.instancia = new ConfiguracionEmpresa();
    }
    return ConfiguracionEmpresa.instancia;
  }
}

class EnvioEstandar implements Envio {
  calcularCosto(base: number): number {
    return base;
  }
}

class EnvioExpress implements Envio {
  calcularCosto(base: number): number {
    return ConfiguracionEmpresa.obtenerInstancia().recargoExpress + base;
  }
}

class FabricaEnvios {
  static crear(tipo: "estandar" | "express"): Envio {
    switch (tipo.toLocaleLowerCase()) {
      case "estandar":
        return new EnvioEstandar();
      case "express":
        return new EnvioExpress();
      default:
        throw new Error("Tipo de Envío no válido");
    }
  }
}

const confEmpresa = ConfiguracionEmpresa.obtenerInstancia();
const instancia1 = confEmpresa;
const instancia2 = confEmpresa;

console.log(`Mismo Singleton: ${instancia1 === instancia2}`);

const envioEstandar = FabricaEnvios.crear("estandar");
const envioExpress = FabricaEnvios.crear("express");

console.log(`Estandar: ${envioEstandar.calcularCosto(3000)}`);
console.log(`Express: ${envioExpress.calcularCosto(3000)}`);
