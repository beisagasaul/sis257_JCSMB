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
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private ventaRepository: Repository<Venta>,
  ) {}

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    const existeVeta = await this.ventaRepository.findOneBy({
      totalVenta: createVentaDto.totalVenta,
      fechaVenta: createVentaDto.fechaVenta,
      cliente: { id: createVentaDto.idCliente },
    });

    if (existeVeta) {
      throw new ConflictException('la venta ya existe');
    }

    return this.ventaRepository.save({
      totalVenta: createVentaDto.totalVenta.valueOf(),
      fechaVenta: createVentaDto.fechaVenta,
      cliente: { id: createVentaDto.idCliente },
    });
  }

  async findAll(): Promise<Venta[]> {
    return this.ventaRepository.find({ relations: ['cliente'] });
  }

  async findOne(id: number): Promise<Venta> {
    const existeVenta = await this.ventaRepository.findOne({
      where: { id },
      relations: ['cliente'],
    });
    if (!existeVenta) {
      throw new NotFoundException(`no existe el venta ${id}`);
    }
    return existeVenta;
  }
  async update(id: number, updateVentaDto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.ventaRepository.findOneBy({ id });
    if (!venta) {
      throw new NotFoundException(`No existe el venta${id}`);
    }
    const ventaUpdate = Object.assign(venta, updateVentaDto);
    ventaUpdate.cliente = { id: updateVentaDto.idCliente } as Cliente;
    return this.ventaRepository.save(ventaUpdate);
  }

  async remove(id: number) {
    const venta = await this.ventaRepository.findOneBy({ id });
    if (!venta) {
      throw new NotFoundException(`No existe la venta ${id}`);
    }
    return this.ventaRepository.delete(id);
  }
}
