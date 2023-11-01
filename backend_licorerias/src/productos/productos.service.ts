import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  async create(CreateProductoDto: CreateProductoDto): Promise<Producto> {
    const existeProducto = await this.productoRepository.findOneBy({
      nombre: CreateProductoDto.nombre,
      precio: CreateProductoDto.precio,
      cantidad_disponible: CreateProductoDto.cantidad_disponible,
      id_categoria: CreateProductoDto.id_categoria,
    });
    if (existeProducto) {
      throw new ConflictException('el cliente ya existe')
    }
    return this.productoRepository.save({
      nombre: CreateProductoDto.nombre.trim(),
      precio: CreateProductoDto.precio.valueOf(),
      cantidad_disponible: CreateProductoDto.cantidad_disponible.valueOf(),
      id_categoria: CreateProductoDto.id_categoria.valueOf(),
    });
  }

  async findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }

  async findOne(id: number): Promise<Producto> {
    const existeProducto = await this.productoRepository.findOneBy({ id });
    if (!existeProducto) {
      throw new NotFoundException('no existe el producto ${id}');
    }
    return existeProducto;
  }

  async update(
    id: number,
    UpdateProductoDto: UpdateProductoDto,
  ): Promise<Producto> {
    const Producto = await this.productoRepository.findOneBy({id});
    if (!Producto){
      throw new NotFoundException('no existe producto ${id}');
    }
    const ProductoUpdate = Object.assign(Producto, UpdateProductoDto);
    return this.productoRepository.save(ProductoUpdate);
  }

  async remove(id: number) {
    const existeProducto = await this.productoRepository.findOneBy({ id });
    if (!existeProducto) {
      throw new NotFoundException('no existe producto ${id}');
    }
    return this.productoRepository.delete(id);
  }
}
