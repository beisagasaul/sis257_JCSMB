import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ProductosModule } from './productos/productos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { DetallesPedidoModule } from './detalles-pedido/detalles-pedido.module';
import { VentasModule } from './ventas/ventas.module';
import { ClientesModule } from './clientes/clientes.module';
import { DetallesVentaModule } from './detalles-venta/detalles-venta.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallesVenta } from './detalles-venta/entities/detalles-venta.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities:[__dirname + '**/*.entity.ts'],
      synchronize: true,
      autoLoadEntities: true,
    }),  
  
    CategoriasModule, ProveedoresModule, ProductosModule, PedidosModule, DetallesPedidoModule, VentasModule, ClientesModule, DetallesVentaModule,DetallesVenta],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
