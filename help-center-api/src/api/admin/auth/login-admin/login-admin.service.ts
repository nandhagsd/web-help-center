import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';

import { AppConfigService } from '@core/services/app-config.service';

import { LoginAdminRequest } from './login-admin.request';
import { LoginAdminResponse } from './login-admin.response';

@Injectable()
export class LoginAdminService {
  private static readonly ACCESS_TOKEN_EXPIRES_IN = '15m';
  private static readonly REFRESH_TOKEN_EXPIRES_IN_DAYS = 30;


  constructor(
      private readonly jwtService: JwtService,
      private readonly appConfigService: AppConfigService,
  ) {}

  async handle(request: LoginAdminRequest): Promise<LoginAdminResponse> {
    const identifier = request.identifier.trim().toLowerCase();
    const password = request.password;

    // 🔒 Hardcoded validation
    if (
        identifier !== this.appConfigService.all.adminCredential.adminUsername ||
        password !== this.appConfigService.all.adminCredential.adminPassword
    ) {
      throw new UnauthorizedException('Invalid admin credentials');
    }

    const user = {
      id: 'admin@smartdining.co',
      fullName: 'Super Admin',
      email: this.appConfigService.all.adminCredential.adminUsername,
      phoneNumber: null,
      isPhoneNumberVerified: true,
      isEmailVerified: true,
      isProfileCompleted: true,
      isActive: true,
      role: 'ADMIN',
    };

    const accessToken = await this.jwtService.signAsync(
        {
          sub: user.id,
          role: user.role,
          email: user.email,
        },
        {
          secret: this.appConfigService.all.security.jwtSecret,
          expiresIn: LoginAdminService.ACCESS_TOKEN_EXPIRES_IN,
        },
    );

    const refreshToken = this.generateRefreshToken();

    return {
      message: 'Admin login successful',
      data: {
        user,
        tokens: {
          accessToken,
          refreshToken,
        },
      },
    };
  }

  private generateRefreshToken(): string {
    return `${crypto.randomUUID()}.${crypto.randomUUID()}`;
  }
}