import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DetallesVentasService } from './detalles-venta.service';
import { CreateDetallesVentaDto } from './dto/create-detalles-venta.dto';
import { UpdateDetallesVentaDto } from './dto/update-detalles-venta.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('detalles-venta')
@Controller('detalles-venta')
export class DetallesVentaController {
  constructor(private readonly detallesVentaService: DetallesVentasService) {}

  @Post()
  create(@Body() createDetallesVentaDto: CreateDetallesVentaDto) {
    return this.detallesVentaService.create(createDetallesVentaDto);
  }

  @Get()
  findAll() {
    return this.detallesVentaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detallesVentaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDetallesVentaDto: UpdateDetallesVentaDto,
  ) {
    return this.detallesVentaService.update(+id, updateDetallesVentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detallesVentaService.remove(+id);
  }
}
