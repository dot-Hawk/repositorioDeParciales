//  Pedidos de un local de comidas:

interface IPedido {
  calcularTotal(subtotal: number): number;
}

class ConfiguracionLocal {
  private static instancia: ConfiguracionLocal;
  readonly costoEnvio: number = 1500;

  private constructor() {}

  static obtenerInstancia(): ConfiguracionLocal {
    if (!ConfiguracionLocal.instancia) {
      ConfiguracionLocal.instancia = new ConfiguracionLocal();
    }
    return ConfiguracionLocal.instancia;
  }
}

class PedidoRetiro implements IPedido {
  calcularTotal(subtotal: number): number {
    return subtotal;
  }
}

class PedidoEnvio implements IPedido {
  calcularTotal(subtotal: number): number {
    return subtotal + ConfiguracionLocal.obtenerInstancia().costoEnvio;
  }
}

class FabricaPedidos {
  static crear(tipo: "retiro" | "envio"): IPedido {
    switch (tipo.toLocaleLowerCase()) {
      case "retiro":
        return new PedidoRetiro();
      case "envio":
        return new PedidoEnvio();
      default:
        throw new Error(`Tipo de pedido no válido: ${tipo}`);
    }
  }
}

const conf1 = ConfiguracionLocal.obtenerInstancia();
const conf2 = ConfiguracionLocal.obtenerInstancia();

const retiro1 = FabricaPedidos.crear("retiro");
const retiro2 = FabricaPedidos.crear("envio");

console.log(`Mismo Singleton: ${conf1 === conf2}`);
console.log(`Retiro: $${retiro1.calcularTotal(4000)}`);
console.log(`Envío: $${retiro2.calcularTotal(4000)}`);
