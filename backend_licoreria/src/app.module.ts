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
import { Categoria } from './categorias/entities/categoria.entity';
import { Cliente } from './clientes/entities/cliente.entity';
import { Proveedore } from './proveedores/entities/proveedore.entity';
import { Producto } from './productos/entities/producto.entity';
import { Pedido } from './pedidos/entities/pedido.entity';
import { Venta } from './ventas/entities/venta.entity';
import { DetallesPedido } from './detalles-pedido/entities/detalles-pedido.entity';
import { DetallesVenta } from './detalles-venta/entities/detalles-venta.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'usrsis257',
      password: 'Sis257...',
      database: 'sis257_licoreria',
      entities:[Categoria,Cliente,Proveedore,Producto,Pedido,Venta,DetallesPedido,DetallesVenta],
      synchronize: true,
    }),  
  
    CategoriasModule, ProveedoresModule, ProductosModule, PedidosModule, DetallesPedidoModule, VentasModule, ClientesModule, DetallesVentaModule,DetallesVenta],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
