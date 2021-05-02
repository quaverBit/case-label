import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConditionsService } from './conditions.service';
import { ConditionsController } from './conditions.controller';
import { Conditions, ConditionsSchema } from './conditions.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Conditions.name, schema: ConditionsSchema },
    ]),
    AuthModule,
  ],
  providers: [ConditionsService],
  controllers: [ConditionsController],
})
export class ConditionsModule { }
