import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
