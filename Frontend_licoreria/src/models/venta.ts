import type { DetallesVenta } from "./detallesVenta";

export interface Venta {
    id: number;
    totalVenta: number;
    fechaVenta: Date;
    idCliente: number;
    detalles: DetallesVenta[];
  }