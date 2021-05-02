import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NestFactory } from '@nestjs/core';
import { MigrationService } from './migration.service';
import { User, UsersSchema } from './users/users.schema';
import { Case, CaseSchema } from './cases/cases.schema';
import { Conditions, ConditionsSchema } from './conditions/conditions.schema';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UsersSchema,
      },
      {
        name: Conditions.name,
        schema: ConditionsSchema,
      },
      { name: Case.name, schema: CaseSchema },
    ]),
  ],
  providers: [MigrationService],
})
export class MigrationModule {}

async function bootstrap() {
  await NestFactory.create(MigrationModule);
}
bootstrap();
