import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.stategy';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.registerAsync({
    useFactory: (configService: ConfigService) => ({
      secret: configService.get('JWT_SECRET')
    }),
    inject: [ConfigService]
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtModule]
})
export class AuthModule { }
