import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user.schema';

@Injectable()
export class UsersService {
  //Inject the model that we want to use in the constructor arguments
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
}
