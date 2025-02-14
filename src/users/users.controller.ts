import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { Response } from 'express';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return await this.userService.createUser(user);
  }

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Delete(':id')
  async deleteUser(@Param() user: DeleteUserDto, @Res() res: Response) {
    const deletedUser = await this.userService.deleteUser(user.id);

    if (deletedUser === true) {
      return res.status(HttpStatus.NO_CONTENT).send();
    }

    return deletedUser;
  }
}
