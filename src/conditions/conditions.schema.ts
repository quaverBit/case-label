import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose';

export type ConditionsDocument = Conditions & Document

@Schema()
export class Conditions {
  @Prop()
  icd10: string;

  @Prop()
  icd10description: string
}

export const ConditionsSchema = SchemaFactory.createForClass(Conditions);
