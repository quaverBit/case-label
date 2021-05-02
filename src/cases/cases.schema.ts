import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose';
import { User } from 'src/users/users.schema';

export type CaseDocument = Case & Document

@Schema()
export class Case {
  @Prop()
  description: string;

  @Prop({ type: Types.ObjectId, ref: User.name })
  reviewerId: string

  @Prop({ type: [String] })
  conditions: string[];

  @Prop({ type: Boolean })
  isSolved: boolean;

}

export const CaseSchema = SchemaFactory.createForClass(Case);
