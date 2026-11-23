import { describe, expect, it } from "vitest";
import { calcularPrecioFinal } from "../src/services/precios.ts";

describe("calcularPrecioFinal", () => {
  it("aplica un descuento del 10 %", () => {
    expect(calcularPrecioFinal(1000, 10)).toBe(900);
  });

  it("conserva el precio si el descuento es cero", () => {
    expect(calcularPrecioFinal(1000, 0)).toBe(1000);
  });

  it("rechaza descuentos superiores al 100 %", () => {
    expect(() => calcularPrecioFinal(1000, 150)).toThrow(RangeError);
  });

  it("comprueba que el descuento superior al 100 % lance un error", () => {
    const resultado = () => calcularPrecioFinal(1000, 150);
    expect(resultado).toThrowError(RangeError);
  });

  it("Precio 100 y descuento del 100%", () => {
    expect(calcularPrecioFinal(1000, 100)).toBe(0);
  });

  it("Precio -100 y descuento del 10%", () => {
    expect(() => calcularPrecioFinal(-100, 10)).toThrow(RangeError);
  });

  it("Precio 1000 y descuento del -10", () => {
    expect(() => calcularPrecioFinal(1000, -10)).toThrow(RangeError);
  });
});
