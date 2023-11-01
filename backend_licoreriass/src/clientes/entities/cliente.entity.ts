import { DetallesVenta } from "src/detalles-venta/entities/detalles-venta.entity";
import { Venta } from "src/ventas/entities/venta.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombres: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  apellidos: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  direccion: string;

  @Column({ type: 'int' })
  telefono: number;

  @OneToMany(() => Venta, (ventas) => ventas.cliente)
  ventas: Venta[];
}
