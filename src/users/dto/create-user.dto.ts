import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'First name is required!' })
  @IsString({ message: 'First name should be a string!' })
  readonly firstName: string;

  @IsNotEmpty({ message: 'Last name is required!' })
  @IsString({ message: 'Last name should be a string!' })
  readonly lastName: string;

  @IsNotEmpty({ message: 'Email is required!' })
  @IsEmail({}, { message: 'Invalid email format!' })
  readonly email: string;

  @IsNotEmpty({ message: 'Password is required!' })
  readonly password: string;
}
