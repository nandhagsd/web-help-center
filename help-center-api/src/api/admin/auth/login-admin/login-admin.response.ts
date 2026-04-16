import { ApiProperty } from '@nestjs/swagger';

class LoginAdminResponseUserData {
  @ApiProperty({
    example: 'cm8w4w3qf0000x9abcd123456',
    description: 'Admin user id',
  })
  id!: string;

  @ApiProperty({
    example: 'Super Admin',
    nullable: true,
    description: 'Admin full name',
  })
  fullName!: string | null;

  @ApiProperty({
    example: 'admin@example.co',
    nullable: true,
    description: 'Admin email address',
  })
  email!: string | null;
}

class LoginAdminResponseTokensData {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    description: 'JWT access token',
  })
  accessToken!: string;

  @ApiProperty({
    example:
      '4f1e0f43-2a74-47f1-a5ec-6a5f557c48f4.4f5f51f9-45f3-49e1-88c3-4d4c6da0b4d4',
    description: 'Refresh token',
  })
  refreshToken!: string;
}

class LoginAdminResponseData {
  @ApiProperty({
    type: LoginAdminResponseUserData,
    description: 'Admin user details',
  })
  user!: LoginAdminResponseUserData;

  @ApiProperty({
    type: LoginAdminResponseTokensData,
    description: 'Generated authentication tokens',
  })
  tokens!: LoginAdminResponseTokensData;
}

export class LoginAdminResponse {
  @ApiProperty({
    example: 'Admin login successful',
    description: 'Response message',
  })
  message!: string;

  @ApiProperty({
    type: LoginAdminResponseData,
    description: 'Admin login response payload',
  })
  data!: LoginAdminResponseData;
}
