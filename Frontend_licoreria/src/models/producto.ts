import type { Categoria } from "./categoria";
import type { DetallesVenta } from "./detallesVenta";

export interface Producto {
    
  id: number,
  nombre: string,
  precio: number,
  idCategoria: number;
  fechaCreacion: Date,
  fechaModificacion: Date,
  categoria: Categoria; 
  detallesVentas: DetallesVenta[];
  }