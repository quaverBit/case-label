import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CasesController } from './cases.controller';
import { CasesService } from './cases.service';
import { Case, CaseSchema } from './cases.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Case.name, schema: CaseSchema }]),
  ],
  providers: [CasesService],
  controllers: [CasesController],
})
export class CasesModule {}
