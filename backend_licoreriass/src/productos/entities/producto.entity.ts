import { Categoria } from "src/categorias/entities/categoria.entity";
import { DetallesVenta } from "src/detalles-venta/entities/detalles-venta.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')

export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nombre: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column()
  cantidad_disponible: number;

  @Column()
  id_categoria: number;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'id_categoria' })
  categoria: Categoria;

  @OneToMany(() => DetallesVenta, (detallesventa) => detallesventa.producto)
  detallesventas: DetallesVenta[];
}
