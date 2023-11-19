import type { Categoria } from "./categoria";

export interface Producto {
    categoria: Categoria; 
    id: number
    nombre: string
    precio: number
    
    idCategoria: number
    
    
  }