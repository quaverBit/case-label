import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService, private jwtService: JwtService) { }

  async authenticateUser(user: string, password: string): Promise<any> {
    const { id: sub, username } = await this.userService.loginUser({ username: user, password });
    return {
      access_token: this.jwtService.sign({ sub, username }),
    }

  }
}
