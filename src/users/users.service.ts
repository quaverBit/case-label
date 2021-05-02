import { Model } from 'mongoose';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';
import { ConfigService } from '@nestjs/config';
import { UserLoginDto } from './dtos/user.login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
    private configService: ConfigService,
  ) {}

  async indexUsers() {
    return await this.usersModel.find();
  }

  async loginUser(body: UserLoginDto) {
    const { password, username } = body;
    const user = await this.usersModel.findOne({ username });
    if (await user.comparePassword(password)) return user.id;
    else throw new UnauthorizedException();
  }
}
