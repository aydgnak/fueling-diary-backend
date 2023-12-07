import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  @Expose()
  username: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  password: string;
}
