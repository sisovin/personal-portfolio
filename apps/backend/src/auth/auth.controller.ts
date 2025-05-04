import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentials, AuthResponse, UserProfile, RefreshTokenRequest } from 'packages/shared/src/api/auth';
import { JwtGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authCredentials: AuthCredentials): Promise<AuthResponse> {
    return this.authService.login(authCredentials);
  }

  @Post('register')
  async register(@Body() authCredentials: AuthCredentials): Promise<UserProfile> {
    return this.authService.register(authCredentials);
  }

  @UseGuards(JwtGuard)
  @Get('profile')
  async getProfile(@Request() req): Promise<UserProfile> {
    return this.authService.getProfile(req.user.id);
  }

  @Post('refresh-token')
  async refreshToken(@Body() refreshTokenRequest: RefreshTokenRequest): Promise<AuthResponse> {
    return this.authService.refreshToken(refreshTokenRequest);
  }
}
