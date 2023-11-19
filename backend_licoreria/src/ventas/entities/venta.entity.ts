import { Cliente } from 'src/clientes/entities/cliente.entity';
import { DetallesVenta } from 'src/detalles-venta/entities/detalles-venta.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'total_venta' })
  totalVenta: number;

  @Column({ name: 'fecha_venta', type: 'date' })
  fechaVenta: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.ventas)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  cliente: Cliente;

  @OneToMany(() => DetallesVenta, (detallesVenta) => detallesVenta.venta)
  detallesventas: DetallesVenta[];
}
