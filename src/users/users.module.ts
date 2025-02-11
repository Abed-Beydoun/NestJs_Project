import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/models/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: userSchema,
      },
    ]),
  ],
  controllers: [UsersController],
})
export class UsersModule {}
