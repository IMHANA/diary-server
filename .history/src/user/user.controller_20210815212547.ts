import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //사용자 전체조회
  @Get('list')
  getUserList(): Promise<User[]> {
    return this.userService.getUserList();
  }

  @Get(':user_id')
  getUser(): Promise<User> {
    return this.userService.getUser();
  }

  //사용자 추가
  @Post('add')
  addUser(@Body() body: CreateUserDto): Promise<number> {
    return this.userService.addUser(body);
  }

  //사용자 id로 추가
  @Get(':user_id')
  patch(@Param('user_id') userId: string): Promise<User> {
    return this.userService.getUser(userId);
  }
}
