import type { Categoria } from "./categoria";

export interface Producto {
    
    id: number
    nombre: string
    precio: number
    idCategoria: number
    
    categoria: Categoria; 
  }