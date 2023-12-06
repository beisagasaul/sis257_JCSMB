import type { Venta } from "./venta";

export interface Cliente {
  id: number,
  nombre: string,
  apellido: string,
  cedulaIdentidad: string,
  fechaCreacion: Date,
  fechaModificacion: Date,
  ventas: Venta[];
}
