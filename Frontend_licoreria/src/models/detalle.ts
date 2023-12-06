import type { Venta } from "./venta";
import type { Producto } from "./producto";

export interface Detalle {
  id: number;
  cantidad: number;
  precioUnitario: number;
  idVenta: number;
  idProducto: number;
  fechaCreacion: Date;
  producto: Producto;
  venta: Venta;
}