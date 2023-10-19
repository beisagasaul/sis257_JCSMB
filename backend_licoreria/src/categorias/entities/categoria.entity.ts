import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categorias')

export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: 'varchar', length: 100, nullable: false})
    nombre: string;

}
