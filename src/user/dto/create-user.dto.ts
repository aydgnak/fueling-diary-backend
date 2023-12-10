import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
