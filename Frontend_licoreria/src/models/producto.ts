import type { Categoria } from "./categoria";

export interface Producto {
    
  id: number,
  nombre: string,
  precio: number,
  fechaCreacion: Date,
  fechaModificacion: Date,
  categoria: Categoria; 
  //detallesVentas: DetallesVenta[];
  }