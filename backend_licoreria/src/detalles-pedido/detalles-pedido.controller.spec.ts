import { Test, TestingModule } from '@nestjs/testing';
import { DetallesPedidoController } from './detalles-pedido.controller';
import { DetallesPedidoService } from './detalles-pedido.service';

describe('DetallesPedidoController', () => {
  let controller: DetallesPedidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallesPedidoController],
      providers: [DetallesPedidoService],
    }).compile();

    controller = module.get<DetallesPedidoController>(DetallesPedidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
