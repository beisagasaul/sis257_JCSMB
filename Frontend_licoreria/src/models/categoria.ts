import type { Producto } from "./producto";

export interface Categoria {
  id: number
  nombre: string
  productos: Producto[];
}