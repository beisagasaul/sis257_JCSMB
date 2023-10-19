import { Module } from '@nestjs/common';
import { DetallesPedidoService } from './detalles-pedido.service';
import { DetallesPedidoController } from './detalles-pedido.controller';
import { DetallesPedido } from './entities/detalles-pedido.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DetallesPedido])],
  controllers: [DetallesPedidoController],
  providers: [DetallesPedidoService],
})
export class DetallesPedidoModule {}
