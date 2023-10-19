import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('proveedores')
export class Proveedore {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: 'varchar', length: 100, nullable: false})
    nombres: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    apellidos: string;


    @Column({type: 'varchar', length: 100, nullable: false})
    direccion: string;

    @Column({type: 'int'})
    telefono: number;


}
