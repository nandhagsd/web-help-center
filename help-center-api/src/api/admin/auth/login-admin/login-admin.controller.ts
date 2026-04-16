import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { LoginAdminRequest } from './login-admin.request';
import { LoginAdminResponse } from './login-admin.response';
import { LoginAdminService } from './login-admin.service';

@ApiTags('Admin Auth')
@Controller('api/admin/auth/login')
export class LoginAdminController {
  constructor(private readonly loginAdminService: LoginAdminService) {}

  @Post()
  @ApiOperation({
    summary: 'Login admin',
    operationId: 'loginAdmin',
    description:
      'Logs in an admin user using email or phone number and password and returns access token and refresh token.',
  })
  @ApiOkResponse({
    type: LoginAdminResponse,
    description: 'Admin login successful',
  })
  @ApiBadRequestResponse({
    description:
      'Admin account is inactive, phone number is not verified, profile is incomplete, or password is not set',
  })
  @ApiUnauthorizedResponse({
    description: 'Invalid admin credentials',
  })
  async handle(
    @Body() request: LoginAdminRequest,
  ): Promise<LoginAdminResponse> {
    return this.loginAdminService.handle(request);
  }
}
