import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { User, UsersSchema } from './users.schema';
import { UsersService } from './users.service';
import { closeInMongodConnection, rootMongooseTestModule } from '../test-utils/mongoose.test.module'
import { ConfigModule } from '@nestjs/config';


describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule,
        rootMongooseTestModule(),
        MongooseModule.forFeature([{
          name: User.name,
          schema: UsersSchema,
        }]),
      ],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return array from indexUsers', async () => {
    const result = await service.indexUsers();
    expect(Array.isArray(result)).toBe(true);
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });
});
