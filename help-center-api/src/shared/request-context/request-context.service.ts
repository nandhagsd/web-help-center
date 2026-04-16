import { Inject, Injectable, Scope } from '@nestjs/common';
import { Request } from 'express';
import { UAParser } from 'ua-parser-js';
import { REQUEST } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST })
export class RequestContextService {
  constructor(
    @Inject(REQUEST)
    private readonly request: Request,
  ) {}

  get raw(): Request {
    return this.request;
  }

  get ipAddress(): string | null {
    const forwardedFor = this.request.headers['x-forwarded-for'];

    if (typeof forwardedFor === 'string' && forwardedFor.trim()) {
      return forwardedFor.split(',')[0].trim();
    }

    if (Array.isArray(forwardedFor) && forwardedFor.length > 0) {
      return forwardedFor[0];
    }

    return this.request.socket?.remoteAddress ?? null;
  }

  get userAgent(): string | null {
    const value = this.request.headers['user-agent'];
    return typeof value === 'string' && value.trim() ? value : null;
  }

  get deviceName(): string | null {
    const userAgent = this.userAgent;

    if (!userAgent) {
      return 'Unknown Device';
    }

    const parser = new UAParser(userAgent);
    const result = parser.getResult();

    const browserName = result.browser.name ?? 'Unknown Browser';
    const osName = result.os.name ?? 'Unknown OS';

    return `${browserName} on ${osName}`;
  }

  get sessionToken(): string | null {
    return this.request.cookies?.sid ?? null;
  }

  get origin(): string | null {
    const value = this.request.headers.origin;
    return typeof value === 'string' && value.trim() ? value : null;
  }

  get host(): string | null {
    const value = this.request.headers.host;
    return typeof value === 'string' && value.trim() ? value : null;
  }

  get protocol(): string {
    const forwardedProto = this.request.headers['x-forwarded-proto'];

    if (typeof forwardedProto === 'string' && forwardedProto.trim()) {
      return forwardedProto.split(',')[0].trim();
    }

    return this.request.protocol;
  }

  get method(): string {
    return this.request.method;
  }

  get path(): string {
    return this.request.path;
  }

  get fullUrl(): string {
    const host = this.host ?? 'unknown-host';
    return `${this.protocol}://${host}${this.request.originalUrl}`;
  }
}
