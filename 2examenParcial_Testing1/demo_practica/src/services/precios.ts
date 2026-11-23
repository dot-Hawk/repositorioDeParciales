/** Calcula el precio luego de aplicar un porcentaje de descuento. */
export function calcularPrecioFinal(precio: number, descuento: number): number {
  if (!Number.isFinite(precio) || precio < 0) {
    throw new RangeError("Precio Inválido");
  }

  if (!Number.isFinite(descuento) || descuento < 0 || descuento > 100) {
    throw new RangeError("Descuento Invalido");
  }

  return precio - (precio * descuento) / 100;
}
