import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Conditions, ConditionsDocument } from './conditions.schema';

@Injectable()
export class ConditionsService {

  constructor(@InjectModel(Conditions.name) private conditionsModel: Model<ConditionsDocument>) { }

  async indexConditions() {
    return await this.conditionsModel.find();
  }
}
