import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VentasService {
  ventaRepository: any;
  constructor(
    @InjectRepository(Venta)
    private albumRepository: Repository<Venta>,
  ) {}

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    const existeVeta = await this.albumRepository.findOneBy({
      fecha_venta: createVentaDto.fecha_venta,
      id_cliente: createVentaDto.id_cliente,
    });

    if (existeVeta) {
      throw new ConflictException('la venta ya existe');
    }

    return this.ventaRepository.save({
      fecha_venta: createVentaDto.fecha_venta.valueOf(),
      id_cliente: createVentaDto.id_cliente,
    });
  }

  async findAll(): Promise<Venta[]> {
    return this.ventaRepository.find();
  }

  async findOne(id: number): Promise<Venta> {
    const existeVenta = await this.ventaRepository.findOneBy({ id });
    if (!existeVenta) {
      throw new NotFoundException(`no existe el venta ${id}`);
    }
    return existeVenta;
  }
  async update(id: number, UpdateVentaDto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.ventaRepository.findOneBy({ id });
    if (!venta) {
      throw new NotFoundException(`no existe la venta ${id}`);
    }
    const VentaUpdate = Object.assign(Venta, UpdateVentaDto);
    return this.ventaRepository.save(VentaUpdate);
  }

  async remove(id: number) {
    const venta = await this.ventaRepository.findOneBy({ id });
    if (!venta) {
      throw new NotFoundException(`No existe la venta ${id}`);
    }
    return this.ventaRepository.delete(id);
  }
}
