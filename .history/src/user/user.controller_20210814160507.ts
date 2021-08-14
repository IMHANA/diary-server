import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  getUserList(): Promise<User[]> {
    return this.userService.getUserList();
  }

  @Post('add')
  addUser(@Body() body: CreateUserDto): Promise<number> {
    return this.userService.addUser(body);
  }

  @Get(':user_id')
  patch(@Param('user_id') userId: string): Promise<User> {
    return this.userService.getUser(userId);
  }
}
