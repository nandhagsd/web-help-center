import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginAdminRequest {
  @ApiProperty({
    example: 'admin@example.co',
    description: 'Admin email address or phone number',
  })
  @IsString()
  @IsNotEmpty()
  identifier!: string;

  @ApiProperty({
    example: '',
    description: 'Admin account password',
    minLength: 8,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password!: string;
}
