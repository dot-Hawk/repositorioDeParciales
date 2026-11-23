# Repositorio de Parciales — Taller de Lenguajes de Programación IV

Este repositorio reúne los **exámenes parciales** de la materia **Taller de Lenguajes de Programación IV (TLP IV)** que fui resolviendo como práctica de estudio.

El objetivo es **prepararme para rendir el Examen Integrador**: volver a resolver los parciales anteriores me sirve para repasar los contenidos de la cursada, detectar qué temas tengo flojos y llegar al integrador con los ejercicios practicados.

> Los parciales fueron desarrollados **sin asistencia de IA**, como práctica real de examen.

---

## Contenido

| Carpeta | Parcial | Temas principales |
| --- | --- | --- |
| [`1examenParcial_TemaA/`](./1examenParcial_TemaA) | 1.º Parcial — Tema A | POO en TypeScript, clases abstractas, interfaces, patrón Singleton, refactorización |
| [`1examenParcial_TemaB/`](./1examenParcial_TemaB) | 1.º Parcial — Tema B | POO en TypeScript, clases abstractas, interfaces, patrón Singleton, refactorización |
| [`2examenParcial_Testing1/`](./2examenParcial_Testing1) | 2.º Parcial — Testing | Calidad y pruebas de software, pruebas unitarias y de integración con Vitest y Supertest sobre una API Express |

### 1.º Parcial — Tema A

| Ejercicio | Consigna |
| --- | --- |
| `src/ejercicio1.ts` | Estacionamiento: jerarquía de vehículos con clase abstracta y cálculo de tarifas (polimorfismo). |
| `src/ejercicio2.ts` | Pedidos de un local de comidas: interfaces y configuración global con Singleton. |
| `src/ejercicio3.ts` | Refactorización de un sistema de cobros con distintos medios de pago. |

### 1.º Parcial — Tema B

| Ejercicio | Consigna |
| --- | --- |
| `src/ejercicio1.ts` | Hotel: jerarquía de habitaciones con clase abstracta y cálculo de precios. |
| `src/ejercicio2.ts` | Envíos de una empresa de paquetería: interfaces y configuración con Singleton. |
| `src/ejercicio3.ts` | Refactorización de un servicio de mensajería / notificaciones. |

### 2.º Parcial — Testing

- `TLP4_Unidad4_Introduccion_Testing.pdf` y `README.md`: material teórico de la Unidad 4 (calidad y pruebas de software).
- `Testing-Guía_Practica.md`: guía del laboratorio práctico.
- `demo_practica/`: API de precios hecha con **Express + TypeScript**, con:
  - pruebas unitarias (`tests/precios.test.ts`) con **Vitest**,
  - pruebas de integración HTTP (`tests/api.test.ts`) con **Supertest**,
  - integración continua con **GitHub Actions** (`.github/workflows/pruebas.yml`).

---

## Tecnologías

- **TypeScript**
- **Node.js** (22.18 o posterior; se recomienda Node.js 24)
- **Express**
- **Vitest** y **Supertest**
- **tsx** para ejecutar los ejercicios del primer parcial

---

## Cómo ejecutar

### 1.º Parcial (Tema A o Tema B)

```bash
cd 1examenParcial_TemaA   # o 1examenParcial_TemaB
npm install
npm run ej1   # ejecuta src/ejercicio1.ts
npm run ej2   # ejecuta src/ejercicio2.ts
npm run ej3   # ejecuta src/ejercicio3.ts
```

### 2.º Parcial — Testing

```bash
cd 2examenParcial_Testing1/demo_practica
npm install
npm run dev         # levanta el servidor en http://localhost:3000
npm test            # ejecuta las pruebas con Vitest
npm run typecheck   # verifica los tipos con tsc --noEmit
```

---

## Autor

**Diego García** — estudiante de Taller de Lenguajes de Programación IV.

Repositorio de uso personal con fines de estudio.
