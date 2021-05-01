import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose';
import * as bcrypt from 'bcryptjs';

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  comparePassword: (toCheck: string) => Promise<any>;
}

export const UsersSchema = SchemaFactory.createForClass(User);

UsersSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, (saltErr, salt) => {
    if (saltErr) return next(saltErr);
    //@ts-ignore
    bcrypt.hash(user.password, salt, (hashErr, hash) => {
      if (hashErr) return next(hashErr);
      //@ts-ignore
      user.password = hash;
      next();
    })
  })
})

UsersSchema.methods.comparePassword = function (toCheck) {
  return new Promise((resolve, reject) => {
    //@ts-ignore
    bcrypt.compare(toCheck, this.password, function (checkErr, isMatch) {
      if (checkErr) return reject(checkErr);
      resolve(isMatch);
    })

  })
}
