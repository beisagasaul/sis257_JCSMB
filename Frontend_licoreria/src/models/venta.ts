import type { Cliente } from "./cliente";
import type { DetallesVenta } from "./detalle";

export interface Venta {
    id: number;
    totalVenta: number;
    fechaVenta: Date;
    idCliente: number;
    detalles: DetallesVenta[];
    cliente: Cliente;
  }