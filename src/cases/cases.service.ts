import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Case, CaseDocument } from './cases.schema';

@Injectable()
export class CasesService {

  constructor(@InjectModel(Case.name) private caseModel: Model<CaseDocument>) { }

  async getUnsolvedCases(): Promise<any> {
    return await this.caseModel.find({ isSolved: true });
  }

  async solveCase(caseId: string, reviewerId: string, conditions: string[]) {
    return await this.caseModel.findByIdAndUpdate(caseId, { reviewerId, conditions, isSolved: true });
  }

}
