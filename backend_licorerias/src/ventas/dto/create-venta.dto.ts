import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsDefined, IsNotEmpty, IsNumber } from "class-validator";

export class CreateVentaDto {
  @ApiProperty({ example: '2005-05-01' })
  @IsNotEmpty({ message: 'El campo fecha de venta no de ser vacío' })
  @IsDateString(
    {},
    { message: 'El campo fechade venta debe ser de tipo fecha' },
  )
  readonly fecha_venta: Date;
  @ApiProperty()
  @IsDefined({ message: 'El campo id cliente debe estar definido' })
  @IsNumber({}, { message: 'El campo id cliente debe ser de tipo numérico' })
  readonly id_cliente: number;
}
