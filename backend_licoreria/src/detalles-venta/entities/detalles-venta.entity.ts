import { Producto } from "src/productos/entities/producto.entity";
import { Venta } from "src/ventas/entities/venta.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('detalles-venta')

export class DetallesVenta {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_venta: number;

  @Column()
  id_producto: number;

  @Column()
  cantidad: number;

  @ManyToOne(() => Venta)
  @JoinColumn({ name: 'id_venta' })
  venta: Venta;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'id_producto' })
  producto: Producto;
}
