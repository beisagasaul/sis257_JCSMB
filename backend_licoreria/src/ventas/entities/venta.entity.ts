import { Cliente } from "src/clientes/entities/cliente.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('ventas')

export class Venta {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_cliente: number;

  @Column({ type: 'date' })
  fecha_venta: Date;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Cliente;
}
