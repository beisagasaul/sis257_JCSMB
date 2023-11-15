import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateClienteDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombres no de ser vacío' })
  @IsString({ message: 'El campo nombres debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo nombres no debe ser mayor a 50 caracteres',
  })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo apellidos no de ser vacío' })
  @IsString({ message: 'El campo apellidos debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo apellidos no debe ser mayor a 50 caracteres',
  })
  readonly apellido: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo direccion no de ser vacío' })
  @IsString({ message: 'El campo direccion debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo direccion no debe ser mayor a 50 caracteres',
  })
  readonly direccion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo teléfono debe estar definido' })
  @IsNumber({}, { message: 'El campo teléfono debe ser de tipo numérico' })
  readonly telefono: number;
}
