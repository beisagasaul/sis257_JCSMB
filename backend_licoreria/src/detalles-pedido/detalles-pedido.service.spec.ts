import { Test, TestingModule } from '@nestjs/testing';
import { DetallesPedidoService } from './detalles-pedido.service';

describe('DetallesPedidoService', () => {
  let service: DetallesPedidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetallesPedidoService],
    }).compile();

    service = module.get<DetallesPedidoService>(DetallesPedidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
