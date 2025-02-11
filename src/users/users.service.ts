import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  //Inject the model that we want to use in the constructor arguments
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(user: CreateUserDto) {
    if (!user.firstName || user.firstName === '') {
      return 'firstName is required';
    }

    if (!user.lastName || user.lastName === '') {
      return 'lastName is required';
    }

    if (!user.email || user.email === '') {
      return 'email is required';
    }

    if (!user.password || user.password === '') {
      return 'password is required';
    }

    const userExist = await this.userModel.findOne({
      email: user.email,
    });

    if (userExist) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const createdUser = new this.userModel({
      ...CreateUserDto,
      password: hashedPassword,
    });

    return createdUser.save();
  }
}
