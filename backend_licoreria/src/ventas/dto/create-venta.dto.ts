import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateVentaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo tal venta no de ser vacío' })
  @IsNumber({}, { message: 'El campo total venta debe ser de tipo numérico' })
  readonly totalVenta: number;

  @ApiProperty({ example: '2005-05-01' })
  @IsNotEmpty({ message: 'El campo fecha de venta no de ser vacío' })
  @IsDateString(
    {},
    { message: 'El campo fecha de venta debe ser de tipo fecha' },
  )
  readonly fechaVenta: Date;
  @ApiProperty()
  @IsDefined({ message: 'El campo idCliente debe estar definido' })
  @IsNumber({}, { message: 'El campo idCliente debe ser de tipo numérico' })
  readonly idCliente: number;
}
