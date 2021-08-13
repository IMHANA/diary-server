import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  user_no: number;
  @IsString()
  user_id: string;
  @IsString()
  pwd: string;
}
