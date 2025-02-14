import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  //Inject the model that we want to use in the constructor arguments
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(user: CreateUserDto) {
    const userExist = await this.userModel.findOne({
      email: user.email,
    });

    if (userExist) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const createdUser = new this.userModel({
      ...user,
      password: hashedPassword,
    });

    const savedUser = await createdUser.save();

    return this.userModel.findById(savedUser._id).select('-password');
  }

  async getAllUsers() {
    return await this.userModel.find();
  }

  async deleteUser(user:)
}
