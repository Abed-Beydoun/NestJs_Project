import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({
    required: [true, 'firstName is required'],
    trim: true,
    lowercase: true,
  })
  firstName: string;

  @Prop({
    required: [true, 'lastName is required'],
    trim: true,
    lowercase: true,
  })
  lastName: string;

  @Prop({
    required: [true, 'email is required'],
    unique: true,
    trim: true,
    lowercase: true,
  })
  email: string;

  @Prop({ required: [true, 'password is required'], trim: true })
  password: string;
}

export const userSchema = SchemaFactory.createForClass(User);
