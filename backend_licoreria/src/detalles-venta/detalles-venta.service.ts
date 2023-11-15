import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDetallesVentaDto } from './dto/create-detalles-venta.dto';
import { UpdateDetallesVentaDto } from './dto/update-detalles-venta.dto';
import { DetallesVenta } from './entities/detalles-venta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from 'src/ventas/entities/venta.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Injectable()
export class DetallesVentasService {
  constructor(
    @InjectRepository(DetallesVenta)
    private detallesVentaRepository: Repository<DetallesVenta>,
  ) {}

  async create(
    createDetallesVentanDto: CreateDetallesVentaDto,
  ): Promise<DetallesVenta> {
    const existeDetallesVenta = await this.detallesVentaRepository.findOneBy({
      cantidad: createDetallesVentanDto.cantidad,
      venta: { id: createDetallesVentanDto.idVenta },
      producto: { id: createDetallesVentanDto.idProducto },
    });

    if (existeDetallesVenta) {
      throw new ConflictException('La venta ya existe');
    }

    return this.detallesVentaRepository.save({
      cantidad: createDetallesVentanDto.cantidad.valueOf(),
      venta: { id: createDetallesVentanDto.idVenta },
      producto: { id: createDetallesVentanDto.idProducto },
    });
  }

  async findAll(): Promise<DetallesVenta[]> {
    return this.detallesVentaRepository.find({
      relations: ['venta', 'producto'],
    });
  }

  async findOne(id: number): Promise<DetallesVenta> {
    const detalles = await this.detallesVentaRepository.findOne({
      where: { id },
      relations: ['venta', 'Producto'],
    });
    if (!detalles) {
      throw new NotFoundException(`No existe detalles de venta ${id}`);
    }
    return detalles;
  }

  async update(
    id: number,
    updateDetallesVentanDto: UpdateDetallesVentaDto,
  ): Promise<DetallesVenta> {
    const detalles = await this.detallesVentaRepository.findOneBy({ id });
    if (!detalles) {
      throw new NotFoundException(`No existe detalles de venta ${id}`);
    }
    const detallesVentaUpdate = Object.assign(
      detalles,
      updateDetallesVentanDto,
    );
    detallesVentaUpdate.venta = {
      id: updateDetallesVentanDto.idVenta,
    } as Venta;
    detallesVentaUpdate.producto = {
      id: updateDetallesVentanDto.idProducto,
    } as Producto;
    return this.detallesVentaRepository.save(detallesVentaUpdate);
  }

  async remove(id: number) {
    const detalles = await this.detallesVentaRepository.findOneBy({ id });
    if (!detalles) {
      throw new NotFoundException(`No existe detalles de venta ${id}`);
    }
    return this.detallesVentaRepository.delete(id);
  }
}
