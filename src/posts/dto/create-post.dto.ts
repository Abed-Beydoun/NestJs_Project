import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'User id is missing!' })
  @IsString({ message: 'user id must be string!' })
  @IsMongoId({ message: 'Invalid mongodb user id!' })
  readonly userId: string;

  @IsNotEmpty({ message: "post body can't be empty!" })
  @IsString({ message: 'invalid text type!' })
  readonly body: string;
}
