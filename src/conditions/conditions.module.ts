import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConditionsService } from './conditions.service';
import { ConditionsController } from './conditions.controller';
import { Conditions, ConditionsSchema} from './conditions.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Conditions.name, schema: ConditionsSchema }])
  ],
  providers: [ConditionsService],
  controllers: [ConditionsController]
})
export class ConditionsModule {}
