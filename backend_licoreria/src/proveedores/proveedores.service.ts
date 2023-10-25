import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
import { Proveedore } from './entities/proveedore.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedoresService {
  constructor(
    @InjectRepository(Proveedore)
    private proveedoreRepository: Repository<Proveedore>,
  ) {}
  
  async create(CreateProveedoreDto: CreateProveedoreDto):Promise<Proveedore> {
    const existeProveedore = await this.proveedoreRepository.findOneBy({
      nombres: CreateProveedoreDto.nombres,
      apellidos: CreateProveedoreDto.apellidos,
      direccion: CreateProveedoreDto.direccion,
      telefono : CreateProveedoreDto.telefono
    })
    if (existeProveedore){
      throw new ConflictException('el cliente ya existe')
    }
    return this.proveedoreRepository.save({
      nombres: CreateProveedoreDto.nombres.trim(),
      apellidos:CreateProveedoreDto.apellidos.trim(),
      direccion :CreateProveedoreDto.direccion.trim(),
      telefono: CreateProveedoreDto.telefono.valueOf()
    });
  }

  async findAll():Promise<Proveedore[]> {
    return this.proveedoreRepository.find();
  }

  async findOne(id: number): Promise<Proveedore> {
    const existeCliente =await this.proveedoreRepository.findOneBy({id});
    if(!existeCliente){
      throw new NotFoundException('no existe proveedor ${id}');
    }
    return existeCliente;
  }

  async update(id: number, UpdateProveedoreDto: UpdateProveedoreDto): Promise<Proveedore> {
    const Proveedore = await this.proveedoreRepository.findOneBy({id});
    if (!Proveedore){
      throw new NotFoundException('no existe Proveedor ${id}');
    }
    const proveedoreUpdate = Object.assign(Proveedore, UpdateProveedoreDto);
    return this.proveedoreRepository.save(proveedoreUpdate);
  }

  async remove(id: number) {
    const existeProveedore= await this.proveedoreRepository.findOneBy({id});
    if (!existeProveedore){
      throw new NotFoundException('no existe proveedor ${id}');
    }
    return this.proveedoreRepository.delete(id);
  }
}
