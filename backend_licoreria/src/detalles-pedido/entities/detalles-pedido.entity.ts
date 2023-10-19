import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Producto } from "src/productos/entities/producto.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('detalles-pedido')

export class DetallesPedido {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_pedido: number;

  @Column()
  id_producto: number;

  @Column()
  cantidad: number;

  @ManyToOne(() => Pedido)
  @JoinColumn({ name: 'id_pedido' })
  pedido: Pedido;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'id_producto' })
  producto: Producto
}
