import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserLoginDto } from './dtos/user.login.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.indexUsers();
  }

  @Post()
  userLogin(@Body() body: UserLoginDto) {
    return this.usersService.loginUser(body);
  }
}
