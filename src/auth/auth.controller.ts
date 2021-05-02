import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody } from '@nestjs/swagger';
import { AuthLoginDto } from './dtos/auth.login.dto';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) { }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiBody({ type: AuthLoginDto })
  async login(@Request() req) {
    return req.user;
  }
}
