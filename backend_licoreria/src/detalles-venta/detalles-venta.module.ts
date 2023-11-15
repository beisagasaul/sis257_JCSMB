import { Module } from '@nestjs/common';
import { DetallesVentasService } from './detalles-venta.service';
import { DetallesVentaController } from './detalles-venta.controller';
import { DetallesVenta } from './entities/detalles-venta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DetallesVenta])],
  controllers: [DetallesVentaController],
  providers: [DetallesVentasService],
})
export class DetallesVentaModule {}
