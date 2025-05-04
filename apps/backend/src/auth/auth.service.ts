import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentials, AuthResponse, UserProfile, RefreshTokenRequest } from 'packages/shared/src/api/auth';
import { UsersService } from '../users/users.service';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<UserProfile | null> {
    const user = await this.usersService.findByEmail(email);
    if (user && await argon2.verify(user.password, pass)) {
      return user;
    }
    return null;
  }

  async login(authCredentials: AuthCredentials): Promise<AuthResponse> {
    const user = await this.validateUser(authCredentials.email, authCredentials.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  async register(authCredentials: AuthCredentials): Promise<UserProfile> {
    const hashedPassword = await argon2.hash(authCredentials.password);
    return this.usersService.create({
      ...authCredentials,
      password: hashedPassword,
    });
  }

  async getProfile(userId: number): Promise<UserProfile> {
    return this.usersService.findById(userId);
  }

  async refreshToken(refreshTokenRequest: RefreshTokenRequest): Promise<AuthResponse> {
    const payload = this.jwtService.verify(refreshTokenRequest.refreshToken);
    const user = await this.usersService.findById(payload.sub);
    if (!user) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    return {
      accessToken: this.jwtService.sign({ email: user.email, sub: user.id }),
      refreshToken: this.jwtService.sign({ email: user.email, sub: user.id }, { expiresIn: '7d' }),
    };
  }
}
