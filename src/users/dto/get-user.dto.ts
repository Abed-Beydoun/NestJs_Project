import { IsMongoId, IsNotEmpty } from 'class-validator';

export class getUserDto {
  @IsNotEmpty({ message: 'User ID is required!' })
  @IsMongoId({ message: 'Invalid user ID format!' })
  readonly id: string;
}
