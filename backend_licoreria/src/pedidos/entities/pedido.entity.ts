import { Proveedore } from "src/proveedores/entities/proveedore.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pedidos')

export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_proveedor: number;

  @Column({ type: 'date' })
  fecha_pedido: Date;

  @ManyToOne(() => Proveedore)
  @JoinColumn({ name: 'id_proveedor' })
  proveedor: Proveedore;
}
