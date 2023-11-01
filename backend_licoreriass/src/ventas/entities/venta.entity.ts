import { Cliente } from "src/clientes/entities/cliente.entity";
import { DetallesVenta } from "src/detalles-venta/entities/detalles-venta.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('ventas')

export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha_venta: Date;

  @Column()
  id_cliente: number;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Cliente;

  @OneToMany(() => DetallesVenta, (detallesventa) => detallesventa.venta)
  detallesventas: DetallesVenta[];
}
