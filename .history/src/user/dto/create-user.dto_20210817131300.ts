import { IsNumber, IsString } from 'class-validator';

export class CreateuserDto {
  @IsNumber()
  user_no: number;
  @IsString()
  user_id: string;
  @IsString()
  pwd: string;
}
